<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input WFH</title>
    <link rel="stylesheet" href="style.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

    <div class="form-container">
        <h2>Formulir Validasi WFH</h2>
        <form id="wfhForm">
            
            <div class="form-group">
                <label for="selectNama">Nama Pegawai:</label>
                <select id="selectNama" required>
                    <option value="">-- Pilih Nama --</option>
                </select>
            </div>

            <!-- Auto-filled by Dropdown Chain -->
            <div class="form-group">
                <label for="inputID">NIP:</label>
                <input type="text" id="inputID" readonly placeholder="Otomatis terisi">
            </div>

            <div class="form-group">
                <label for="inputJabatan">Jabatan:</label>
                <input type="text" id="inputJabatan" readonly placeholder="Otomatis terisi">
            </div>

            <div class="form-group">
                <label for="inputJobdesk">Uraian Kegiatan:</label>
                <input type="text" id="inputJobdesk" readonly >
            </div>

            <!-- Geolocation (Auto-filled) -->
            <div class="form-row">
                <div class="form-group">
                    <label for="lat">Latitude:</label>
                    <input type="text" id="lat" readonly required placeholder="Mencari...">
                </div>
                <div class="form-group">
                    <label for="lon">Longitude:</label>
                    <input type="text" id="lon" readonly required placeholder="Mencari...">
                </div>
            </div>

            <div class="form-group">
                <label for="alamat">Alamat Lokasi:</label>
                <textarea id="alamat" readonly placeholder="Mendeteksi alamat koordinat..."></textarea>
            </div>

            <!-- Multi Image Inputs (Max 2 files, Max 2MB) -->
            <div class="form-group">
                <label>Gambar 1 (Max 2 File, @2MB):</label>
                <input type="file" id="img1" accept="image/*" multiple>
                <span class="file-info" id="info-img1">0 file terpilih</span>
            </div>

            <div class="form-group">
                <label>Gambar 2 (Max 2 File, @2MB):</label>
                <input type="file" id="img2" accept="image/*" multiple>
                <span class="file-info" id="info-img2">0 file terpilih</span>
            </div>

            <div class="form-group">
                <label>Gambar 3 (Max 2 File, @2MB):</label>
                <input type="file" id="img3" accept="image/*" multiple>
                <span class="file-info" id="info-img3">0 file terpilih</span>
            </div>

            <button type="submit" id="submitBtn">Kirim Data WFH</button>
        </form>
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>
</html>
