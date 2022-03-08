class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }

  dampak() {
    if (this.skala >= 0 && this.skala <= 2)
      this.dampak = "Dampaknya tidak terasa";
    else if (this.skala > 2 && this.skala <= 4)
      this.dampak = "Dampaknya bangunan retak-retak";
    else if (this.skala > 4 && this.skala <= 6)
      this.dampak = "Dampaknya bangunan roboh";
    else if (this.skala > 6)
      this.dampak = "Dampaknya bangunan roboh dan berpotensi tsunami";
    else this.dampak = " Tidak terjadi apa - apa";

    document.getElementById("data").innerHTML += `
      <tr>
      <td>${this.lokasi}</td>
      <td>${this.skala}</td>
      <td>${this.dampak}</td>
    </tr>`;
  }
}

let m1 = new Gempa("Nuku'alofa, Tonga", 8);
let m2 = new Gempa("Villazon, Bolivia", 2);
let m3 = new Gempa("Indonesia", 1);
let m4 = new Gempa("Afrika", 3);
let m5 = new Gempa("Pulau Rat, Alaska", 5);
let m6 = new Gempa("China", 6);
let m7 = new Gempa("Amerika", 9);
let m8 = new Gempa("Argentina", 7);
let m9 = new Gempa("Korea", 2);
let m10 = new Gempa("Jepang", 4);

m1.dampak();
m2.dampak();
m3.dampak();
m4.dampak();
m5.dampak();
m6.dampak();
m7.dampak();
m8.dampak();
m9.dampak();
m10.dampak();
