import axios from "axios";

// Configure backend URL via VITE_API_URL (defaults to local Flask dev server)
const baseURL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_URL) ||
  "http://localhost:5000";

export const api = axios.create({ baseURL });

export type FileMeta = {
  id: number;
  filename: string;
  size: number;
  uploaded_at: string;
  pin: string;
};

export const ApiClient = {
  upload: async (file: File, onProgress?: (pct: number) => void): Promise<FileMeta> => {
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await api.post<FileMeta>("/upload", fd, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (e) => {
        if (onProgress && e.total) onProgress(Math.round((e.loaded / e.total) * 100));
      },
    });
    return data;
  },
  list: async (): Promise<FileMeta[]> => {
    const { data } = await api.get<FileMeta[]>("/files");
    return data;
  },
  remove: async (id: number) => {
    await api.delete(`/delete/${id}`);
  },
  // Returns a blob URL for the downloaded file
  download: async (pin: string): Promise<{ blob: Blob; filename: string }> => {
    const res = await api.post(
      "/download",
      { pin },
      { responseType: "blob" },
    );
    const disposition = res.headers["content-disposition"] as string | undefined;
    let filename = `secureshare-${pin}`;
    if (disposition) {
      const m = /filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(disposition);
      if (m) filename = decodeURIComponent(m[1]);
    }
    return { blob: res.data as Blob, filename };
  },
};

export function formatBytes(bytes: number): string {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export const ALLOWED_EXT = ["pdf", "png", "jpg", "jpeg", "docx", "txt"];
export const BLOCKED_EXT = ["exe", "bat", "sh", "msi", "cmd", "scr"];

export function isAllowed(filename: string): boolean {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (BLOCKED_EXT.includes(ext)) return false;
  return ALLOWED_EXT.includes(ext);
}