const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.addEventListener("click", ligarLampada);
btn2.addEventListener("click", desligarLampada);
function ligarLampada() {
  document.querySelector("#lampada").style.backgroundImage =
    "url('https://i.stack.imgur.com/ybxlO.jpg')";
  document.body.classList.add("black-background");
}

function desligarLampada() {
  document.querySelector("#lampada").style.backgroundImage =
    "url('https://i.stack.imgur.com/b983w.jpg')";
  document.body.classList.remove("black-background");
}
