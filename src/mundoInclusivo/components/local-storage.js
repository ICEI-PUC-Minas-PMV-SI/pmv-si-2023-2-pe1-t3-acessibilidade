const BASE_STORES = [{
  "Nome do Proprietário": "Mariana Mattos",
  "Razão Social": "Mari Software House",
  "CNPJ": "173.017.447-73",
  "Email": "marianasmmattos@gmail.com",
  // TODO: VOLTAR PRA VER
  // TODO: Pensar se precisa de um ID
  // ENDEREÇO: {
  //    maps: fvdfbfd
  //  }
  "Endereço": "Rua Silva Teles",
  "Telefone": "21996903276",
  "Senha": "12345678",
  "Confirmar senha": "12345678",
  "Tipos de deficiência": [],
  "Foto": '',
  "Sobre": "lorem ipsum"
}]

const BASE_USERS = [{
  "Nome completo": "Mariana Mattos",
  "Email": "marianasmmattos@gmail.com",
    // TODO: VOLTAR PRA VER
  // TODO: Pensar se precisa de um ID
  // ENDEREÇO: {
  //    maps: fvdfbfd
  //  }
  "Endereço": "Rua Silva Teles",
  "Telefone": "21996903276",
  "Senha": "12345678",
  "Confirmar senha": "12345678",
  "Tipos de deficiência": [],
  "Foto": ''
}]

const LOCAL_STORES_KEY = 'locaisCadastrados';
const STORE_SESSION_KEY = 'localLogado';
const LOCAL_USERS_KEY = 'usuariosCadastrados';
const USER_SESSION_KEY = 'usuarioLogado';

const globalLocalStorage = window.localStorage;
const getStoreItem = (key) => {
  let values = globalLocalStorage.getItem(key);
  return JSON.parse(values)
}

const setStoreItem = (key, values) => {
  let stringifiedJson = JSON.stringify(values)
  globalLocalStorage.setItem(key, stringifiedJson);
  return values
}

const getStores = () => {
  let parsedStores = getStoreItem(LOCAL_STORES_KEY);
  return parsedStores?.locais
}

const saveStores = (store) => {
  let currentStores = getStores()?.locais || [];
  let newStores = [...BASE_STORES, ...currentStores, store]
  
  setStoreItem(LOCAL_STORES_KEY, { locais: newStores })

  return store
}

const loginStore = (store) => {
  setStoreItem(STORE_SESSION_KEY, store)
  return store
}

const getSessionStore = () => {
  let parsedStore = getStoreItem(STORE_SESSION_KEY)
  return parsedStore
}

const loginUser = (user) => {
  setStoreItem(USER_SESSION_KEY, user)
  return user
}

const getUsers = () => {
  let parsedUsers = getStoreItem(LOCAL_USERS_KEY);
  return parsedUsers?.users
}

const saveUsers = (user) => {
  let currentUsers = getStores()?.locais || [];
  let newUsers = [...BASE_USERS, ...currentUsers, user]
  
  setStoreItem(LOCAL_USERS_KEY, { users: newUsers })

  return user
}

const getSessionUser = () => {
  let parsedStore = getStoreItem(USER_SESSION_KEY)
  return parsedStore
}

window.onload = function() {
  window.saveStores = saveStores
  window.getStores = getStores

  window.loginStore = loginStore
  window.getSessionStore = getSessionStore

  window.saveUsers = saveUsers
  window.getUsers = getUsers

  window.loginUser = loginUser
  window.getSessionUser = getSessionUser

  window.saveStores({})
  window.saveUsers({})
}
