const cpfInput = document.getElementById("cpf");
const submit = document.getElementById("botao");

cpfInput.addEventListener("keypress", (event) => {
  let valorInput = cpfInput.value;

  if (valorInput.length === 3 || valorInput.length === 7) {
    cpfInput.value += ".";
  } else if (valorInput.length === 11) {
    cpfInput.value += "-";
  }
});

submit.addEventListener("click", () => {
  alert("Olá");
});
