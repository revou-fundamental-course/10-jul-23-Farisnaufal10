const tinggi = document.querySelector('#tinggi');
const berat = document.querySelector('#berat');
const usia = document.querySelector('#usia');
const buttom = document.querySelector('#hasil');
const result = document.querySelector('#result');


hasil.addEventListener('click', () => { 
    const bmi = (Number(berat.value) / (Number(tinggi.value)/100)**2).toFixed(1)
    const gender = document.querySelector('input[name="gender"]:checked').value;
    if (bmi < 18.5) {
        category = "kurus";
    } else if (bmi >= 19.5 && bmi < 25) {
        category = "normal";
    } else if (bmi >= 25 && bmi < 30){
        category = "gemuk";
    } else {
        category = "obesitas"
    }
    document.getElementById("result").innerHTML = `
<h1>Hasil BMI:
<p>BMI: ${bmi}</p>
<p> Kategori: ${category}</p><p> Jenis kelamin : ${gender}</p>`

})


