// GANTI DENGAN URL WEB APP DEPLOYMENT ANDA
// const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyaRgq5Epcv-8SKjMGwrZod4LyiXZH0arro3gu45N1W0yaaHPOINHJTN71DeGTJNLhLfA/exec";

        const gasUrl = 'https://script.google.com/macros/s/AKfycbzkCSMhQuFwSIuKRLFiI-9rylfJHrIELHiRLuzrsr6fTv7MvW9-RhZsDG0PeqH1HqIrNg/exec';
        let globalData = [];
        let globalKaryawanMap = {}; 
        let currentUserEmail = "";

        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            if (tabId === 'data') {
                document.querySelector('[onclick="switchTab(\'data\')"]').classList.add('active');
                document.getElementById('panel-data').classList.add('active');
            } else if (tabId === 'peta') {
                document.querySelector('[onclick="switchTab(\'peta\')"]').classList.add('active');
                document.getElementById('panel-peta').classList.add('active');
            }
        }

        // VALIDASI JUMLAH FILE DI SISI CLIENT
        function validateFileCount(input) {
            if (input.files.length > 2) {
                alert("⚠️ Maaf, Anda hanya diperbolehkan mengunggah maksimal 2 gambar.");
                input.value = ""; // Reset pilihan file
            }
        }

        async function loadData() {
            try {
                const response = await fetch(gasUrl);
                const resJson = await response.json();
                globalData = resJson.tabelUtama;
                currentUserEmail = resJson.currentUserEmail;

                document.getElementById('user-email-display').innerText = `👤 Akun: ${currentUserEmail}`;

                // Susun Dropdown Nama Dinamis dari Sheet3
                const nameSelect = document.getElementById('input-nama');
                nameSelect.innerHTML = '<option value="">-- Pilih Nama Anda --</option>';
                
                resJson.listKaryawan.forEach(item => {
                    globalKaryawanMap[item.nama] = item.jabatanId; // Petakan nama ke ID jabatan
                    let opt = document.createElement('option');
                    opt.value = item.nama;
                    opt.textContent = item.nama;
                    nameSelect.appendChild(opt);
                });

                renderTableHeader();
                renderTableBody(globalData);

                document.getElementById('loading').style.display = 'none';
                document.getElementById('data-table').style.display = 'table';
            } catch (error) {
                document.getElementById('loading').innerText = 'Gagal memuat basis data.';
            }
        }

        function autoFillJabatan() {
            const selectedNama = document.getElementById('input-nama').value;
            document.getElementById('input-jabatan').value = globalKaryawanMap[selectedNama] || '';
        }

function renderTableHeader() {
if (globalData.length === 0) return;
const headers = Object.keys(globalData[0]).filter(k => k !== 'rowNumber');
let headHtml = '';
headers.forEach(header => { headHtml += <th>${header}</th>; });
headHtml += 'Action';
document.getElementById('table-head').innerHTML = headHtml;
}
function renderTableBody(dataToRender) {
const tableBody = document.getElementById('table-body');
if (dataToRender.length === 0) {
tableBody.innerHTML = <tr><td colspan="11" class="no-data">Belum ada riwayat terekam.</td></tr>;
return;
}
const headers = Object.keys(globalData[0]).filter(k => k !== 'rowNumber');
let bodyHtml = '';
dataToRender.forEach(row => {
bodyHtml += '';
headers.forEach(header => {
let cellValue = row[header] !== undefined ? row[header] : '';
if (header === 'Tanggal' && cellValue) cellValue = new Date(cellValue).toLocaleDateString('id-ID');
if (header === 'Link_Gambar' && cellValue) {
let links = cellValue.split(' , ');
cellValue = links.map((url, index) => <a href="${url}" target="_blank" style="color:#2ecc71; text-decoration:none; font-weight:bold;">🖼️ Foto ${index+1}</a>).join(' | ');
}
if ((header === 'Latitude' || header === 'Longitude') && cellValue) {
cellValue = <a href="https://google.com{row['Latitude']},${row['Longitude']}" target="_blank" style="color:#3498db; text-decoration:none;">📍 ${cellValue}</a>;
}
bodyHtml += <td>${cellValue}</td>;
});
let actionCell = '-';
if (row['Email'] && row['Email'].toString().trim().toLowerCase() === currentUserEmail.trim().toLowerCase()) {
actionCell = <td><button class="btn-edit" onclick="openEditModal(${row['rowNumber']}, '${escapeHtml(row['Jobdesk'])}')">✏️ Edit</button></td>;
}
bodyHtml += actionCell + '';
});
tableBody.innerHTML = bodyHtml;
}
function escapeHtml(text) { return text ? text.replace(/'/g, "\'").replace(/"/g, """) : ''; }
function openEditModal(rowNumber, jobdesk) {
document.getElementById('edit-row-number').value = rowNumber;
document.getElementById('edit-jobdesk').value = jobdesk;
document.getElementById('edit-modal').style.display = 'flex';
}
function closeEditModal() { document.getElementById('edit-modal').style.display = 'none'; }
// LOGIKA SUBMIT EDIT JOBDESK
document.getElementById('edit-form').addEventListener('submit', async function(e) {
e.preventDefault();
const formData = new URLSearchParams();
formData.append('action', 'update');
formData.append('rowNumber', document.getElementById('edit-row-number').value);
formData.append('Jobdesk', document.getElementById('edit-jobdesk').value);
try {
const response = await fetch(gasUrl, { method: 'POST', body: formData });
const result = await response.json();
alert(result.message);
if (result.status === 'success') { closeEditModal(); loadData(); }
} catch (err) { alert("Gagal memperbarui."); }
});
// SUBMIT DATA BARU + FILE TRANSFER KE BASE64
document.getElementById('karyawan-form').addEventListener('submit', function(e) {
e.preventDefault();
const submitBtn = document.getElementById('btn-submit-data');
submitBtn.disabled = true;
submitBtn.innerText = "Mengunci Koordinat Lokasi...";
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
async function(position) {
submitBtn.innerText = "Membaca & Memproses Gambar...";
const fileInput = document.getElementById('input-images');
const params = new URLSearchParams();
params.append('Nama', document.getElementById('input-nama').value);
params.append('Jabatan', document.getElementById('input-jabatan').value);
params.append('Jobdesk', document.getElementById('input-jobdesk').value);
params.append('Latitude', position.coords.latitude);
params.append('Longitude', position.coords.longitude);
// Ambil teks alamat dari Nominatim
try {
const gRes = await fetch(https://openstreetmap.org{position.coords.latitude}&lon=${position.coords.longitude});
const gData = await gRes.json();
if(gData.display_name) params.append('Alamat', gData.display_name);
} catch(e){}
// Membaca file gambar terpilih (Maksimal 2) dan mengubahnya ke Base64
let fileReadPromises = [];
let maxUploadCount = Math.min(fileInput.files.length, 2);
for (let i = 0; i < maxUploadCount; i++) {
const file = fileInput.files[i];
const p = new Promise((resolve) => {
const reader = new FileReader();
reader.onload = function(evt) {
const base64Data = evt.target.result.split(',')[1];
params.append('file_' + (i + 1), base64Data);
params.append('file_' + (i + 1) + 'name', file.name);
params.append('file' + (i + 1) + '_type', file.type);
resolve();
};
reader.readAsDataURL(file);
});
fileReadPromises.push(p);
}
// Tunggu semua berkas gambar selesai dikonversi ke Base64, lalu kirim ke server
Promise.all(fileReadPromises).then(async () => {
submitBtn.innerText = "Mengirim Paket Data...";
try {
const response = await fetch(gasUrl, { method: 'POST', body: params });
const result = await response.json();
alert(result.message);
if (result.status === 'success') { document.getElementById('karyawan-form').reset(); loadData(); }
} catch(err) { alert("Masalah jaringan data."); }
finally { submitBtn.disabled = false; submitBtn.innerText = "Kirim Data & Kunci GPS"; }
});
},
function() { alert("Akses GPS ditolak."); submitBtn.disabled = false; submitBtn.innerText = "Kirim Data & Kunci GPS"; },
{ enableHighAccuracy: true, timeout: 10000 }
);
}
});
document.addEventListener('DOMContentLoaded', loadData);


