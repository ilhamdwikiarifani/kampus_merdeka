function kosong1() {
  let form = document.getElementById("formulir");
  form.a1.value = "";
}

function kosong2() {
  let form = document.getElementById("formulir");
  form.a2.value = "";
}

function batal() {
  let form = document.getElementById("formulir");
  form.a1.value = "";
  form.a2.value = "";
  form.hasil.value = "";
}

function totalJumlah(button) {
  let form = document.getElementById("formulir");
  let a = parseInt(form.a1.value);
  let b = parseInt(form.a2.value);
  let nilai;
  let currency = Intl.NumberFormat("id-ID");

  switch (button) {
    case "+":
      nilai = a + b;
      break;
    case "-":
      nilai = a - b;
      break;
    case "x":
      nilai = a * b;
      break;
    case "/":
      nilai = a / b;
      break;
    case "^":
      nilai = a ** b;
      break;
  }

  if (isNaN(a) || a == "") {
    alert("Data Kosong / Tolong diisi dengan Angka");
  } else if (isNaN(b) || b == "") {
    alert("Data Kosong / Tolong diisi dengan Angka");
  } else {
    form.hasil.value = currency.format(nilai);
  }
}
