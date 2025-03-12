const inputTelefone = document.getElementById("ip-telefone");

inputTelefone.addEventListener("input", (event) => {
  let valor = event.target.value.replace(/\D/g, "");
  let formatado = "";

  if (valor.length > 0) {
    formatado = "(" + valor.substring(0, 2);
    if (valor.length > 2) {
      formatado += ") " + valor.substring(2, 7);
      if (valor.length > 7) {
        formatado += "-" + valor.substring(7, 11);
      }
    }
  }

  event.target.value = formatado;
});
