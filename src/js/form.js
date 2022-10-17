const Btn = document.getElementById("btn")
const entradas = document.querySelectorAll(".entrada")
const mensagemError = document.querySelectorAll(".mensagem")

btn.addEventListener('click', function (event) {
  event.preventDefault();
  entradas.forEach((entradas, i) => {
    console.log(mensagemError[i])
    if (entradas.value == "") {
      entradas.classList.remove("sucess");
      entradas.classList.add("error");
      mensagemError[i].classList.add("mensagem-error")
    }else {
      entradas.classList.remove("error");
      entradas.classList.add("sucess");
      mensagemError[i].classList.remove("mensagem-error")
    }
  })
})