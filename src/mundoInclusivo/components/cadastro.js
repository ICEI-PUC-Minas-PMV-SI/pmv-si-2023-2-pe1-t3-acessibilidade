const form = document.getElementById('formingFill');
const fieldset = document.getElementById('fieldset');
const spans = document.getElementsByClassName('span-required');

const control = document.getElementsByClassName('form-control m4in');
let ic = document.getElementById('iCon');
let ic2 = document.getElementById('iCon2')

ic.style.display = 'flex';
ic2.style.display = 'none';


let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function passToggle() {
  if (control[3].type === 'password') {
    ic.style.display = 'none';
    ic2.style.display = 'flex';
    control[3].type = 'text';

  }
  else {
    ic2.style.display = 'none';
    ic.style.display = 'flex';
    control[3].type = 'password';
  }
}

ic.addEventListener(('click'), passToggle)

ic2.addEventListener(('click'), passToggle)





form.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const data = new FormData(form)






  let sensitive = {
    "ID": control[0].value,
    "Nome": control[1].value,
    "E-mail": control[2].value,
    "Senha": control[3].value,
    "Bloco de Texto": control[4].value.trim()
  };

  Object.keys(sensitive).forEach((str) => {
    if (str === "E-mail" || str === "Bloco de Texto") {
      localStorage.setItem(str, JSON.stringify(sensitive[str]));
    }
    else if (str === "ID" || str === "Nome" || str === "Senha") {
      localStorage.setItem("Informações Pessoais", sensitive);
    }
  })



})

function properties(i) {
  const formDis = getComputedStyle(form);
  const fieldDis = getComputedStyle(fieldset);
  form.getBoundingClientRect();
  fieldset.getBoundingClientRect();

  control[i].getBoundingClientRect();
  getComputedStyle(control[i]);
}



function Validate() {
  switch (control[0].value.length) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      spans[0].style.display = "block";
      control[0].style.borderColor = "red";
      properties(0);
      break;
    default:
      spans[0].style.display = "none";
      control[0].style.borderColor = "#015776";
      properties(0);
  }
  switch (control[1].value) {
    case "":
      spans[1].style.display = "block";
      control[1].style.borderColor = "red";
      properties(1);
      break;
    default: spans[1].style.display = "none";
      control[1].style.borderColor = "#015776";
      properties(1);
  }
  switch (control[3].value.length) {
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
      control[3].style.borderColor = "red";
      properties(3);
      break;
    default: spans[3].style.display = "none";
      control[3].style.borderColor = "#015776";
      properties(3);
  }
  switch (control[4].value.trim().length) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      spans[4].style.display = "block";
      control[4].style.borderColor = "red";
      properties(4);
      break;
    default:
      spans[4].style.display = "none";
      control[4].style.borderColor = "#015776";
      properties(4);
  }
  if (!regex.test(control[2].value)) {
    spans[2].style.display = "block";
    control[2].style.borderColor = "red";
    properties(2);

  }
  else if (regex.test(control[2].value)) {
    spans[2].style.display = "none";
    control[2].style.borderColor = "#015776";
    properties(2);
  }
}

