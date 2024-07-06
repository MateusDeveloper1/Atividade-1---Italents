const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("button");

inputPeso.addEventListener("click", function () {
  inputPeso.value = "";
  resultado.value = "";
});

inputAltura.addEventListener("click", function () {
  inputAltura.value = "";
  resultado.value = "";
});

botao.addEventListener("click", function () {
  const resultadoIMC = calculaIMC();
  if (resultadoIMC !== undefined) {
    resultado.value = calculaIMC();
  }
});

function calculaIMC() {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if (peso <= 0 || peso >= 1000 || isNaN(peso)) {
    window.alert("Peso ou altura estão inválidos");
    return undefined;
  }

  if (altura <= 0 || isNaN(altura) || altura > 300) {
    window.alert("Peso ou altura estão inválidos");
    return undefined;
  }

  const alturaMetros = altura / 100;
  const resultIMC = (imc = peso / alturaMetros ** 2).toFixed(1);

  return `Seu IMC é: ${resultIMC}`;
}
