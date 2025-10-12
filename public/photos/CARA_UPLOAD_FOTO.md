# 📸 Cara Upload Foto ke Portfolio

## Langkah-langkah Upload Foto:

### 1️⃣ **Siapkan 9 Foto Anda**
   - 1 foto untuk **portrait utama** (close-up terbaik)
   - 8 foto untuk **background scattered** (foto apapun yang menarik)

### 2️⃣ **Rename Foto dengan Nama Berikut:**
   ```
   hero.jpg     <- Foto portrait utama (close-up wajah terbaik)
   1.jpg        <- Foto background #1
   2.jpg        <- Foto background #2
   3.jpg        <- Foto background #3
   4.jpg        <- Foto background #4
   5.jpg        <- Foto background #5
   6.jpg        <- Foto background #6
   7.jpg        <- Foto background #7
   8.jpg        <- Foto background #8
   ```

### 3️⃣ **Copy Semua File ke Folder Ini**
   Copy 9 file tersebut ke folder:
   ```
   c:\Users\lulus\Dominator\Portofolio\public\photos\
   ```

   **Via File Explorer:**
   - Buka folder ini
   - Drag & drop atau copy-paste 9 foto yang sudah direname

   **Via PowerShell (jika foto ada di folder Download):**
   ```powershell
   Copy-Item "$env:USERPROFILE\Downloads\hero.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\hero.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\1.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\1.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\2.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\2.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\3.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\3.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\4.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\4.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\5.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\5.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\6.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\6.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\7.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\7.jpg"
   Copy-Item "$env:USERPROFILE\Downloads\8.jpg" "c:\Users\lulus\Dominator\Portofolio\public\photos\8.jpg"
   ```

### 4️⃣ **Refresh Browser**
   Setelah upload:
   - Tekan **Ctrl + R** atau **F5** di browser
   - Foto akan langsung muncul! ✨

## 🎨 Hasil yang Diharapkan:

### Di Halaman **Home**:
   - Portrait besar (260px) di hero section
   - 8 foto kecil melayang di background dengan efek blur & rotasi

### Di Halaman **About**:
   - Portrait sedang (220px) di header
   - 8 foto scattered di background

### Di Halaman **Contact**:
   - Portrait kecil (180px) di header
   - 8 foto scattered di background

## ⚠️ Catatan Penting:

1. **Format File**: Gunakan `.jpg` (lebih ringan) atau `.png` (jika butuh transparansi)
2. **Ukuran File**: Usahakan < 500KB per foto untuk loading cepat
3. **Nama File**: Harus **PERSIS** seperti yang disebutkan (huruf kecil semua)
4. **Ekstensi**: Harus `.jpg` bukan `.JPG` atau `.jpeg`

## 🐛 Troubleshooting:

**Foto masih tidak muncul?**
- Cek nama file (harus huruf kecil semua: `hero.jpg` bukan `Hero.jpg`)
- Cek ekstensi (harus `.jpg` bukan `.jpeg`)
- Hard refresh browser: **Ctrl + Shift + R**
- Cek konsol browser (F12) untuk error

**Muncul emoji 📸 atau gradient?**
- Itu fallback ketika foto belum ada
- Upload foto dengan nama yang benar, lalu refresh

---

**Need Help?** Jika masih ada masalah, cek console browser (F12) atau tanya saya! 🚀
