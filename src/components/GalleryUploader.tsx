import React, { useRef } from 'react';

// NOTE: Uploading to src/assets/gallery only works in local dev (VS Code), not on deployed web. For public sharing, files must be committed to repo.
export default function GalleryUploader() {
  const inputRef = useRef<HTMLInputElement>(null)

  // Handler for local dev: move file to src/assets/gallery
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    // VS Code extension or manual move required for real file system write
    alert('Setelah memilih file, drag & drop ke src/assets/gallery di VS Code agar foto muncul di galeri. (Web tidak bisa upload langsung ke folder src)')
  }

  return (
    <div className="mb-8 flex flex-col items-center gap-4">
      <label className="font-semibold">Upload Foto ke Galeri (local dev only)</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="p-2 border rounded"
        onChange={handleUpload}
      />
    </div>
  )
}
