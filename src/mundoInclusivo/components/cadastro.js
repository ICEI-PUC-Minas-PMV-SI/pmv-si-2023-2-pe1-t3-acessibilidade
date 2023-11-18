const form = document.getElementById('formingFill');
const firstIn = document.getElementById('first');
const secondIn = document.getElementById('second');
const thirdIn = document.getElementById('third');
const lastIn = document.getElementById('last');
const textArea = document.getElementById('info');
const spans = document.getElementsByClassName('span-required');

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailValidation() {
  if (!regex.test(thirdIn.value)) {
    spans[2].style.display = "block";
    thirdIn.style.borderColor = "red";
    return true;
  }
  else {
    spans[2].style.display = "none";
    thirdIn.style.borderColor = "lightgreen";
    return false;
  }

}



form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const data = new FormData(form)

  let sensitive = {
    "ID": firstIn.value,
    "Nome": secondIn.value,
    "E-mail": thirdIn.value,
    "Senha": lastIn.value,
    "Bloco de Texto": textArea.value
  }
  Object.keys(sensitive).forEach((str) => {
    if (str === "E-mail" || str === "Bloco de Texto") {
      localStorage.setItem(str, JSON.stringify(sensitive[str]));
    }
    else if (str === "ID" || str === "Nome" || str === "Senha") {
      localStorage.setItem("Informações Pessoais", sensitive);
    }
  })



})


function Validate() {
  switch (firstIn.value.length) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      spans[0].style.display = "block";
      firstIn.style.borderColor = "red";
      break;
    default: spans[0].style.display = "none";
      firstIn.style.borderColor = "lightgreen";
  }
  switch (secondIn.value) {
    case "":
      spans[1].style.display = "block";
      secondIn.style.borderColor = "red";
      break;
    default: spans[1].style.display = "none";
      secondIn.style.borderColor = "lightgreen";
  }
  switch (lastIn.value.length) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      spans[3].style.display = "block";
      lastIn.style.borderColor = "red";
      break;
    default: spans[3].style.display = "none";
      lastIn.style.borderColor = "lightgreen";
  }
  switch (textArea.value.length) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      spans[4].style.display = "block";
      textArea.style.borderColor = "red";
      break;
    default:
      spans[4].style.display = "none";
      textArea.style.borderColor = "lightgreen";
  }
}
