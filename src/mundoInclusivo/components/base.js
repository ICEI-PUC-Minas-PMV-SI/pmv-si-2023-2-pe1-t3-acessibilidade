const getEstabLoginForm = () => document.getElementById('estabLoginForm');
const getEstabSigninModal = () => document.getElementById('estabFormSigninModal');
const getUserLoginForm = () => document.getElementById('userFormLogin');
const getUserSigninModal = () => document.getElementById('estabFormSigninModal');

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const LOGIN_INPUT_KEYS = {
  email: "Email",
  pass: "Senha"
}

const setLoginData = (ev) => {
  ev.preventDefault();

  let currentForm = ev.target;
  console.log
  let inputs = currentForm.querySelectorAll('input')

  let currentLogin = {}
  
  for (const input of inputs) {
    let key = LOGIN_INPUT_KEYS[input.id]
    currentLogin[key] = input.value
  }

  return currentLogin
}

const verifyLogin = (base, loginData, callback) => {;
  let currentLogin = base.find(stores => {
    let loginKey = LOGIN_INPUT_KEYS['email'];
    return stores[loginKey] === loginData[loginKey]
  })

  let loginPassowrdKey = LOGIN_INPUT_KEYS['pass']
  let storePassword = currentLogin?.[loginPassowrdKey]
  let currentPassword = loginData?.[loginPassowrdKey]

  let isSamePassword = storePassword === currentPassword

  if(isSamePassword) {
    callback(currentLogin)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let estabLoginForm = getEstabLoginForm();
  let estabSigninFormModal = getEstabSigninModal();
  let userLoginForm = getUserLoginForm();

  estabLoginForm.addEventListener('submit', ev => {
    let currentLogin = setLoginData(ev)
    let currentStores = window.getStores();

    verifyLogin(currentStores, currentLogin, window.loginStore)
  })

  userLoginForm.addEventListener('submit', ev => {
    let currentLogin = setLoginData(ev)
    let currentUsers = window.getUsers();

    verifyLogin(currentUsers, currentLogin, window.loginUser)
  })

  estabSigninFormModal.addEventListener('submit',ev=>{
      ev.preventDefault();

      const modalData = new FormData(estabFormModal);

      const gaps = estabFormModal.getElementsByClassName('form-control');

      const modalObj = {
          "Nome do Proprietário":gaps[0].value,
          "Razão Social":gaps[1].value,
          "CNPJ":gaps[2].value,
          "Email Estabelecimento":gaps[3].value,
          "Endereço":gaps[4].value,
          "Telefone":gaps[5].value,
          "Senha":gaps[6].value,
          "Confirmar senha":gaps[7].value
      }
      
      Object.keys(modalObj).forEach((str,index)=>{
        if(str === "Senha" || str === "Confirmar senha" ){
          localStorage.setItem(str,modalObj[str]);
          localStorage.getItem(str);
        }
        else{
          localStorage.setItem(str,JSON.stringify(modalObj[str]));
          localStorage.getItem(str);
        }
      })
  })

});