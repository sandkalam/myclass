AOS.init({
  duration: 1200,
});
// animasi text
//#region
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
//#endregion

$(document).on("click", '[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 15,
    },
    500
  );
});

//   scroll
document.querySelectorAll('[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Get the modal
//#region
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg");
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$(".myImg").click(function () {
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr("src", newSrc);
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
//#endregion

// vue Js sebagai pembelajaran sebenarnya bisa juga menggunakan array biasa / jquery hanya saja saya kebetulan ingin sekalian belajar vuejs
// data murid
//#region
var vmurid = new Vue({
  el: "#murid",
  data: {
    arr_murid: [
      {
        nama: "Abdillah Raihan Azra",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Ahmad Romadoni",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "doni",
        lahir: "20 Desember 2000",
      },
      {
        nama: "Ahmad Alfaridzi",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan:
          "Hidup mah Jgn banyak ngeluh ,Tapi Jalanin, Soal Hasil Allahualam !!",
        img: "ridzi",
        lahir: "21 Oktober 1999",
      },
      {
        nama: "Ahmad Maulana",
        alias: "abang tampan",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "Pinter pinter jaga badan..",
        img: "maul",
        lahir: "penasaran ya..",
      },
      {
        nama: "Atma yuda Satria",
        alias: "King",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "Hidup itu sederhana, sedangkan yang rumit itu cewek...",
        img: "yuda",
        lahir: "22 Januari 2002",
      },
      {
        nama: "Hilal khoir",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Muhammad Fahromi",
        alias: "Rombeng",
        jk: "L",
        jabatan: "Murid biasa",
        pesan:
          "hanya karena sekarang lu berada di tempat lain dan menemukan teman baru, bukan berarti lu bisa melupakan sahabat lama lu.",
        img: "romi",
        lahir: "02 Agustus 2001",
      },
      {
        nama: "Muhammad Eko Saputra",
        alias: "Sikun",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "-",
      },
      {
        nama: "Ichwal Hadid",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "07 Mei 2001",
      },
      {
        nama: "Soni Setiawan",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Sadam Ibnu Ramadhan",
        alias: "-",
        jk: "L",
        jabatan: "Wakil ketua Kelas",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Rafli",
        alias: "Tempo",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "28 Oktober 2001",
      },
      {
        nama: "Ramli",
        alias: "Pak RT",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "19 September 2002",
      },
      {
        nama: "Ramadani",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "Down To Earth",
        img: "dani",
        lahir: "09 Desember 2001",
      },
      {
        nama: "Sandy Kalamuddin",
        alias: "sen",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "semoga teman-temanku sukses biar masa depan punya orang dalem",
        img: "sendi",
        lahir: "27 Agustus 2001",
      },
      {
        nama: "Dyas Athoriq",
        alias: "-",
        jk: "L",
        jabatan: "Seksi Kerohanian",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Rifqi Maulana Aji",
        alias: "KM",
        jk: "L",
        jabatan: "Ketua Kelas",
        pesan:
          "Tidak ada perjuangan yang melelahkan, yang ada hanya hasil yang memuaskan.",
        img: "rifqi",
        lahir: "15 Oktober 2001",
      },
      {
        nama: "Yosia Ryan",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "01 Desember 2001",
      },
      {
        nama: "Ferry Saputra",
        alias: "-",
        jk: "L",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "penasaran ya..",
      },
      {
        nama: "Ika Fransiska",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "13 Juni 2001",
      },
      {
        nama: "Safitri Maryanti",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "23 November 2001",
      },
      {
        nama: "Angel Sastaviani",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan:
          "jangan sampai lupain kenangan selama 3 tahun di kelas MM2 dan mudah mudahan kalian makin sukses untuk kedepannya.amin",
        img: "angel",
        lahir: "16 Juli 2000",
      },
      {
        nama: "Lala",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "27 Oktober 2001",
      },
      {
        nama: "Devita Sugiarti",
        alias: "ratu",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "devi",
        lahir: "30 Desember 2001",
      },
      {
        nama: "Siti Rahmawati",
        alias: "-",
        jk: "P",
        jabatan: "Wakil Bendahara",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "20 Agustus 2000",
      },
      {
        nama: "Yeni Apriyani",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "19 Januari 2001",
      },
      {
        nama: "Gita Ayu Cahyani",
        alias: "-",
        jk: "P",
        jabatan: "Bendahara",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "19 Maret 2001",
      },
      {
        nama: "Murni Faniyah",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan:
          "Tersenyumlah sebab, kamu tak akan tahu ada banyak orang yang merasa bahagia ketika melihat dirimu tersenyum.:)",
        img: "murni",
        lahir: "21 Juni 2001",
      },
      {
        nama: "Serly",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "10 April 2001",
      },
      {
        nama: "Nimi Nuraini",
        alias: "-",
        jk: "P",
        jabatan: "Wakil Sekretaris",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "13 Mei 2001",
      },
      {
        nama: "Nila Septia",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "25 Februari 2000",
      },
      {
        nama: "Intan Pandini",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "11 Mei 2001",
      },
      {
        nama: "Yolanda Handoko",
        alias: "-",
        jk: "P",
        jabatan: "Sekretaris",
        pesan: "Ga usah pake kesan pesan lah 😂",
        img: "yolanda",
        lahir: "02 November 2001",
      },
      {
        nama: "Fadia Husniati",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "fadia",
        lahir: "22 Maret 2002",
      },
      {
        nama: "Indah",
        alias: "Gomang",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "07 November 2000",
      },
      {
        nama: "Yuanita Indah R",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "08 Januari 2002",
      },
      {
        nama: "Rahmadanti Iyasa",
        alias: "-",
        jk: "P",
        jabatan: "Murid biasa",
        pesan: "ini adalah pesan saya",
        img: "me",
        lahir: "07 Desember 2000",
      },
    ],
  },
});
// data guru
var vguru = new Vue({
  el: "#guru",
  data: {
    arr_guru: [
      {
        nama: "Irwan Kurnia",
        jk: "L",
        jabatan: "Wali Kelas",
        pelajaran: "Bahasa Indonesia",
        img: "pak irwan",
        pesan: "ini adalah pesan saya..",
      },
      {
        nama: "Muhammad Kallam Royhan",
        jk: "L",
        jabatan: "Guru Produktif",
        pelajaran: "Fotografi",
        img: "pak roy",
        pesan: "ini adalah pesan saya..",
      },
      {
        nama: "Budi Sanjaya",
        jk: "L",
        jabatan: "Guru Produktif",
        pelajaran: "Desain Grafis",
        img: "me",
        pesan: "ini adalah pesan saya..",
      },
    ],
  },
});
//#endregion

// fitur buka tutup foto
$(".card").on("click", function () {
  $(".card-left", this).toggleClass("d-flex d-none");
  $(".card-right", this).toggleClass("d-none d-flex");
});
