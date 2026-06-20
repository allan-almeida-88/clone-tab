function soma(numero1, numero2) {
  if (typeof numero1 != "number" || typeof numero1 != "number") {
    return "Error";
  }
  return numero1 + numero2;
}

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

module.exports = { soma, subtracao };
