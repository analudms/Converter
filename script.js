const valor = document.getElementById("number");
const buttonConvert = document.getElementById("buttonConvert");
const buttonReset = document.getElementById("buttonReset")
let res = document.getElementById("res");

buttonConvert.addEventListener("click", convert);
buttonReset.addEventListener("click", reset)

function convert() {
  const inputValue = parseFloat(valor.value);
  const taxaCambio = 4.91;
  const valorConvertido = inputValue * taxaCambio;

  if (!isNaN(inputValue)) {

    const formattedValue = valorConvertido.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    res.innerHTML = `O valor em reais é ${formattedValue}`;
  } 
}

function reset() {
    res.innerHTML = ''
    valor.value = ''
}
