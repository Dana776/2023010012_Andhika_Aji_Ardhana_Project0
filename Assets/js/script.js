// Menggunakan Function
function bulbOff() {
  document.getElementById("bulb").src = "Assets/pic_bulboff.gif";
}
function bulbOn() {
  document.getElementById("bulb").src = "Assets/pic_bulbon.gif";
}
/*function tampilKan() {
  document.getElementById("show").style.display = "block";
}*/

/**
 * Perbedaan Antara var,let dan const .
 * var digunakan di tahun 1995-2015 pada browser lama.
 * let baru digunakan pada tahun 2015.
 * const juga baru di tahun 2015, const tidak bisa di deklarasi ulang.
 */

function perkalian() {
  let x, y, z;

  x = 23;
  y = 98;
  z = x * y;

  document.getElementById("kali").innerHTML = "Jadi Hasil 23 + 98 = " + z + ".";
}

function penjumlah() {
  let x, y, z, f, g, h;

  x = 23;
  y = 98;
  const a = 48;
  const b = 78;
  f = 88;
  g = 67;
  z = x + y;
  const c = a + b;
  h = f + g;
  document.getElementById("jumlah").innerHTML =
    "Jadi Hasil 23 + 98 = " + z + ".";
  document.getElementById("jumlah1").innerHTML =
    "Jadi Hasil 48 + 78 = " + c + ".";
  document.getElementById("jumlah2").innerHTML =
    "Jadi Hasil 88 + 67 = " + h + ".";
}

/**
 * Operator Aritmatika yang di kerjakan dahulu adalah (),*,/,+,-
 */
function operatorAritmatika() {
  const x = 9,
    y = 7,
    w = 5,
    z = (w + x) * y;
  let t, o, u;
  t = 5;
  o = 2;
  u = t ** o;
  document.getElementById("aritmatika").innerHTML =
    "Jadi Hasil (5 + 9) * 7 = " + z + ".";
  document.getElementById("eksponen").innerHTML = "5^2 = " + u;
}

/**
 * Javascript Penugasan pertambah an (+=,-=,*= dll..)
 * Operator +=penugasan juga dapat digunakan untuk menambahkan (menggabungkan) string
 */
function penugasanUlang() {
  let x, y, z;
  x = 5;
  x += 5;
  y = 9;
  z = x + y;
  document.getElementById("penugasan").innerHTML =
    "Jika x = 5 dan y sama dengan 9 dan nilai x di tambah 5(5+5) hasil nya adalah = " +
    z +
    ".";
}

function perbandingan() {
  let x, y, z;
  x = 70;
  y = 20;
  z = x > y;
  document.getElementById("perbandingan").innerHTML = "70 > 20 = " + z;
}
