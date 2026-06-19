<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input WFH</title>
    <link rel="stylesheet" href="style.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

<body class="bg-light">

<div class="container py-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Form Pendaftaran</h5>
        </div>
        <div class="card-body">
            <form id="wfhForm">
                <div class="row g-3">
                    <!-- Kolom Kiri -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="selectNama">Nama Pegawai:</label>
                            <select id="selectNama" required>
                                <option value="">-- Pilih Nama --</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="inputID">NIP:</label>
                            <input type="text" id="inputID" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="inputJabatan">Jabatan:</label>
                            <input type="text" id="inputJabatan" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="inputJobdesk">Uraian Kegiatan:</label>
                            <input type="text" id="inputJobdesk" required>
                        </div>
                    </div>

                    <!-- Kolom Kanan -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="lat">Latitude:</label>
                            <input type="text" id="lat" readonly required placeholder="Mencari...">
                        </div>
                        <div class="mb-3">
                            <label for="lon">Longitude:</label>
                            <input type="text" id="lon" readonly required placeholder="Mencari...">
                        </div>
                        <div class="mb-3">
                            <label for="alamat">Alamat Lokasi:</label>
                            <textarea id="alamat" readonly placeholder="Mendeteksi alamat koordinat..."></textarea>
                       </div>
                        <div class="mb-3">
                            <label>Gambar 1 (Max 2 File, @2MB):</label>
                            <input type="file" id="img1" accept="image/*" multiple>
                            <span class="file-info" id="info-img1">0 file terpilih</span>
                        </div>
                        <div class="mb-3">
                            <label>Gambar 2 (Max 2 File, @2MB):</label>
                            <input type="file" id="img2" accept="image/*" multiple>
                            <span class="file-info" id="info-img2">0 file terpilih</span>
                         </div>
                        <div class="mb-3">
                          <label>Gambar 3 (Max 2 File, @2MB):</label>
                            <input type="file" id="img3" accept="image/*" multiple>
                            <span class="file-info" id="info-img3">0 file terpilih</span>
                       </div>

                    </div>
                </div>

                <!-- Tombol Submit -->
                <div class="mt-4 text-end">
                    <button type="submit" id="submitBtn">Kirim Data WFH</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>
</html>
