const getEstabLoginForm = () => document.getElementById('estabLoginForm');
const getEstabSigninModal = () => document.getElementById('estabFormSigninModal');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const LOGIN_INPUT_KEYS = {
  estabEmail: "Email Estabelecimento",
  estabPass: "Senha"
}

document.addEventListener("DOMContentLoaded", () => {
  let estabLoginForm = getEstabLoginForm();
  let estabSigninFormModal = getEstabSigninModal();

  estabLoginForm.addEventListener('submit', ev => {
    ev.preventDefault();

    let currentForm = ev.target;
    let inputs = currentForm.querySelectorAll('input')
   
    let currentLogin = {}
    
    for (const input of inputs) {
      let key = LOGIN_INPUT_KEYS[input.id]
      currentLogin[key] = input.value
    }

    let currentStores = window.getStores();
    let currentStoreLogin = currentStores.find(stores => {
      let loginKey = LOGIN_INPUT_KEYS['estabEmail'];
      return stores[loginKey] === currentLogin[loginKey]
    })

    let loginPassowrdKey = LOGIN_INPUT_KEYS['estabPass']
    let storePassword = currentStoreLogin?.[loginPassowrdKey]
    let currentPassword = currentLogin?.[loginPassowrdKey]

    let isSamePassword = storePassword === currentPassword

    if(isSamePassword) {
      window.loginStore(currentStoreLogin)
    }

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