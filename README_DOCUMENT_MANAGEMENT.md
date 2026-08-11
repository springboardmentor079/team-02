# Document Management — Patch Files

This archive contains only the files that are **new or changed** to add
Document Management to the Construction (BuildTrack) project. Drop them
into your project at the matching paths, overwriting the existing ones.

## New files
- `backend/models/Document.js` — Mongoose model for uploaded documents
- `frontend/src/app/services/document.service.ts` — Angular service (list/upload/update/delete/download)
- `frontend/src/app/components/documents/documents.component.ts` — Document Management page

## Modified files (merge/overwrite)
- `backend/server.js` — adds multer config, `/uploads/documents` static route, and the
  `/api/documents` CRUD + download endpoints (search for "DOCUMENT MANAGEMENT API")
- `frontend/src/app/app.module.ts` — declares `DocumentsComponent`, provides `DocumentService`
- `frontend/src/app/app-routing.module.ts` — adds the `/documents` route (behind `AuthGuard`)
- `frontend/src/app/app.component.ts` — adds a "Documents" sidebar nav entry (visible to all roles)
- `.gitignore` — ignores `backend/uploads/` so uploaded files aren't committed

## Setup after copying the files
1. Install the one new backend dependency (multer is already in your `package.json`
   dependencies — just make sure it's actually installed):
   ```bash
   cd backend
   npm install multer
   ```
2. Start the backend as usual (`npm run dev` or `npm start`). It will auto-create
   `backend/uploads/documents/` on first launch.
3. Rebuild/serve the frontend as usual (`npm start` / `ng serve` / `ng build`).
4. Log in and open **Documents** in the sidebar to upload, filter, download, and
   delete files.

## API quick reference
| Method | Route                          | Purpose                          |
|--------|---------------------------------|-----------------------------------|
| GET    | `/api/documents`                | List (optional `?projectId=&category=`) |
| POST   | `/api/documents`                | Upload (multipart, field name `file`) |
| PUT    | `/api/documents/:id`            | Update title/description/category/project |
| GET    | `/api/documents/:id/download`   | Download the stored file          |
| DELETE | `/api/documents/:id`            | Delete record + stored file       |

Allowed file types: PDF, Word, Excel, PowerPoint, JPG/PNG/WEBP images, TXT, ZIP,
DWG. Max size: 25MB per file (adjust `limits.fileSize` in `server.js` if needed).
