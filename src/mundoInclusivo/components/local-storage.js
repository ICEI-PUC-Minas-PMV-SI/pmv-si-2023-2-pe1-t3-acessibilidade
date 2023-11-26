const BASE_STORES = [{
  "Nome do Proprietário": "Mariana Mattos",
  "Razão Social": "Mari Software House",
  "CNPJ": "173.017.447-73",
  "Email Estabelecimento": "marianasmmattos@gmail.com",
  // TODO: VOLTAR PRA VER
  // TODO: Pensar se precisa de um ID
  // ENDEREÇO: {
  //    maps: fvdfbfd
  //  }
  "Endereço": "Rua Silva Teles",
  "Telefone": "21996903276",
  "Senha": "12345678"
}]

const LOCAL_STORES_KEY = 'locaisCadastrados';
const STORE_SESSION_KEY = 'localLogado';

const globalLocalStorage = window.localStorage

const cleanStorage = () => {
  globalLocalStorage.setItem(LOCAL_STORES_KEY, '')
}

const getStores = () => {
  let currentStores = globalLocalStorage.getItem(LOCAL_STORES_KEY);
  let parsedStores = JSON.parse(currentStores)

  return parsedStores?.locais
}

const saveStores = (store) => {
  let currentStores = getStores()?.locais || [];
  let newStores = [...BASE_STORES, ...currentStores, store]
  let stringifiedJson = JSON.stringify({ locais: newStores })

  globalLocalStorage.setItem(LOCAL_STORES_KEY, stringifiedJson);

  return store
}

const loginStore = (store) => {
  let stringifiedJson = JSON.stringify(store)
  globalLocalStorage.setItem(STORE_SESSION_KEY, stringifiedJson)

  return store
}

const getSessionStore = () => {
  let currentStore = globalLocalStorage.getItem(STORE_SESSION_KEY)
  let parsedStore = JSON.parse(currentStore)

  return parsedStore
}

window.onload = function() {
  window.saveStores = saveStores
  window.getStores = getStores
  window.loginStore = loginStore
  window.getSessionStore = getSessionStore
  window.saveStores({})
}
