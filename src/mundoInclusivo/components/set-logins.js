const getEstabLoginForm = () => document.getElementById('estabLoginForm');
const getEstabSigninModal = () => document.getElementById('estabFormSigninModal');
const getUserLoginForm = () => document.getElementById('userFormLogin');
const getUserSigninModal = () => document.getElementById('userSigninForm');

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const LOGIN_INPUT_KEYS = {
  email: "Email",
  pass: "Senha"
}

const SINGIN_INPUT_KEYS = {
  nameEstab: "Nome do Proprietário",
  razSoc: "Razão Social",
  cnpj: "CNPJ",
  address: "Endereço",
  telefone: "Telefone",
  defs: "Tipos de deficiência",
  image: "Fotos",
  confirm: "Confirmar senha",
  userName: "Nome completo",
  about: "Sobre",
  ...LOGIN_INPUT_KEYS
}

const setData = async (ev, mapper = {}) => {
  ev.preventDefault();

  let currentForm = ev.target;
  let inputs = currentForm.querySelectorAll('input')

  let currentLogin = {}
  
  for (const input of inputs) {
    let key = mapper[input.id || input['name']]

    if(key === "Endereço") {
      let end = await window.getAddress(input.value)
      currentLogin[key] = end
    } else {
      currentLogin[key] = input.value
    }
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

const registerSessionRecord = (loginData, callback) => {;
  let loginPassowrdKey = SINGIN_INPUT_KEYS['pass']
  let confirmPassKey = SINGIN_INPUT_KEYS['confirm']

  let isSamePassword = loginData[loginPassowrdKey] === loginData[confirmPassKey]

  if(isSamePassword) {
    callback(loginData)
  }
}

const setLogins = () => {
  let estabLoginForm = getEstabLoginForm();
  let estabSigninFormModal = getEstabSigninModal();
  let userLoginForm = getUserLoginForm();
  let userSinginForm = getUserSigninModal()

  estabLoginForm?.addEventListener('submit', async ev => {
    let currentLogin = await setData(ev, LOGIN_INPUT_KEYS)
    let currentStores = window.getStores();

    verifyLogin(currentStores, currentLogin, window.loginStore)
  })

  userLoginForm?.addEventListener('submit', async ev => {
    let currentLogin = await setData(ev, LOGIN_INPUT_KEYS)
    let currentUsers = window.getUsers();

    verifyLogin(currentUsers, currentLogin, window.loginUser)
  })

  estabSigninFormModal?.addEventListener('submit', async ev=>{
    let currentLogin = await setData(ev, SINGIN_INPUT_KEYS)

    registerSessionRecord(currentLogin, window.saveStores)
   
    let currentStores = window.getStores();

    verifyLogin(currentStores, currentLogin, window.loginStore)
  })

  userSinginForm?.addEventListener('submit',async ev=>{
    let currentLogin = await setData(ev, SINGIN_INPUT_KEYS)

    registerSessionRecord(currentLogin, window.saveUsers)
    
    let currentUsers = window.getUsers();

    verifyLogin(currentUsers, currentLogin, window.loginUser)
  })
}

const fillEstabFields = () => {
  let element = getEstabSigninModal();
  let data = window.getSessionStore();

  let inputs = element?.querySelectorAll('input') || []
 
  for (const input of inputs) {
    let key = SINGIN_INPUT_KEYS[input.id];
    let value = data[key];
    input.setAttribute('value', value)
  }

  return element
}

const filUserFields = () => {
  let element = getUserSigninModal();
  let data = window.getSessionUser();

  let inputs = element?.querySelectorAll('input') || []
 
  for (const input of inputs) {
    let key = SINGIN_INPUT_KEYS[input.id || input['name']];
    let value = data[key];
    input.setAttribute('value', value)
  }

  return element
}

window.setLogins = setLogins // Comunica formulários com o login
window.fillEstabFields = fillEstabFields // Pre-preenche formulario com o login estabelecimento (edição)
window.filUserFields = filUserFields // Pre-preencher formulario de login usuario (edição)