# SecureShare — Frontend

React + TanStack Start + Tailwind CSS frontend for the SecureShare PIN-based file-sharing app.

## Setup

```bash
cd client
bun install        # or: npm install
cp .env.example .env
bun run dev        # or: npm run dev
```

Set `VITE_API_URL` in `.env` to point at your Flask backend (default `http://localhost:5000`).

## Pages

- `/` — Landing page
- `/dashboard` — Upload files, view share PINs, manage uploads
- `/download` — Enter a 5-digit PIN to download a shared file
