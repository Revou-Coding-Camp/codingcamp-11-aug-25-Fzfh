window.onload = function() {
    welcomeSpeech();
};

function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName && userName.trim() !== '') {
        document.querySelector('.hero-left .pre-title').innerHTML = `Halo ${userName}! Nama Saya Adalah`;
    }
}


function tampilkanPesan(event) {
  event.preventDefault();

  const nama = document.getElementById('name').value;
  const ttl = document.getElementById('ttl').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "belum di pilih jenis kelamin";
  const pesan = document.getElementById('message').value;

  const waktu = new Date();

  const output = document.getElementById('output');
  output.innerHTML = `
    <div class="contact-item">
      <div class="contact-item-detail">
        <p><b>Current Time:</b> ${waktu}</p>
        <br>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Tanggal Lahir:</b> ${ttl}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Pesan:</b> ${pesan}</p>
      </div>
    </div>
  `;
}
