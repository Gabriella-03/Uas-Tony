function tampilkanJam() {
  const jam = new Date().toLocaleTimeString();
  document.getElementById("jam").innerHTML = "⏰ Jam saat ini: " + jam;
  setTimeout(tampilkanJam, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const formDaftar = document.getElementById("formDaftar");
  if (formDaftar) {
    formDaftar.addEventListener("submit", function(e) {
      e.preventDefault();
      const hasil = `
        <p><strong>NIK:</strong> ${document.getElementById("nik").value}</p>
        <p><strong>Nama:</strong> ${document.getElementById("nama").value}</p>
        <p><strong>Alamat:</strong> ${document.getElementById("alamat").value}</p>
        <p><strong>Jenis Kelamin:</strong> ${document.getElementById("jk").value}</p>
      `;
      document.getElementById("hasilDaftar").innerHTML = hasil;
    });
  }

  const formJadwal = document.getElementById("formJadwal");
  if (formJadwal) {
    formJadwal.addEventListener("submit", function(e) {
      e.preventDefault();
      const hasil = `
        <p><strong>Nama:</strong> ${document.getElementById("namaJadwal").value}</p>
        <p><strong>Hari:</strong> ${document.getElementById("hari").value}</p>
        <p><strong>Waktu:</strong> ${document.getElementById("waktu").value}</p>
      `;
      document.getElementById("hasilJadwal").innerHTML = hasil;
    });
  }
});
