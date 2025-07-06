function converter() {
  const valor = parseFloat(document.getElementById("tempInput").value);
  const escala = document.getElementById("scale").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.innerHTML = "❗ Digite um valor válido.";
    return;
  }

  let c, f, k;

  if (escala === "C") {
    c = valor;
    f = (valor * 9) / 5 + 32;
    k = valor + 273.15;
  } else if (escala === "F") {
    c = ((valor - 32) * 5) / 9;
    f = valor;
    k = c + 273.15;
  } else if (escala === "K") {
    c = valor - 273.15;
    f = (c * 9) / 5 + 32;
    k = valor;
  }

  resultado.innerHTML = `
    <strong>Resultado:</strong><br/>
    Celsius: ${c.toFixed(2)} °C<br/>
    Fahrenheit: ${f.toFixed(2)} °F<br/>
    Kelvin: ${k.toFixed(2)} K
  `;
}
