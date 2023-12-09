"1600 Amphitheatre Parkway, Mountain View, CA"

const GOOGLE_API_KEY = 'AIzaSyBkLndHuMv968iinF2ol4_B33JVIf7Gf6A';

const BASE_STORES = [
  {
    "Nome do Proprietário": "Mariana Mattos",
    "Razão Social": "Mari Software House",
    "CNPJ": "173.017.447-73",
    "Email": "marianasmmattos@gmail.com",
    "Endereço": {
      "Texto": "R. Silva Teles, 23 - Andaraí, Rio de Janeiro - RJ, 20541-110, Brasil",
      "Latitude": "-22.9235881",
      "Longitude": "-43.2429692"
    },
    "Telefone": "21996903276",
    "Senha": "12345678",
    "Confirmar senha": "12345678",
    "Tipos de deficiência": [],
    "Descrição": "Um local muito bom",
    "Foto": "img/local8.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 5,
      "usuário": "marianasmmattos@gmail.com",
      "texto": "Ótimo lugar para comer, com rampas e cardápio em braile"
    },
    {
      "nota": 3,
      "usuário": "ceci@gmail.com",
      "texto": "Bom lugar, muito barulhento e atendimento um pouco lento"
    }
  ]
  },
  {
    "Nome do Proprietário": "Ana Cecília",
    "Razão Social": "Ceci Tecnologia da Informação",
    "CNPJ": "173.017.447-73",
    "Email": "ceci@gmail.com",
    "Endereço": {
      "Texto": "R. Araújo Lima, 38, Rio de Janeiro - RJ, 20541-050, Brasil",
      "Latitude": "-22.9233354",
      "Longitude": "-43.2405696"
    },
    "Telefone": "21996903276",
    "Senha": "12345678",
    "Confirmar senha": "12345678",
    "Tipos de deficiência": [],
    "Descrição": "Um local muito bom",
    "Foto": "img/local1-unsplash.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 2,
      "usuário": "marianasmmattos@gmail.com",
      "texto": "Lugar ok, atendimento pouco empático e sem rampas"
    }]
  }
]

const BASE_USERS = [{
  "Nome completo": "Mariana Mattos",
  "Email": "marianasmmattos@gmail.com",
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
  saveStores(store)
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

const getAddress = async (address) => {
  let queryString = "address=" + encodeURIComponent(address);
  let api_key = "&key=" + GOOGLE_API_KEY
  let base_url = 'https://maps.googleapis.com/maps/api/geocode/json';
  
  let res = await fetch(`${base_url}?${queryString}${api_key}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    return data.results[0]
  })

  let formatted_res = {
    "Texto": res?.formatted_address,
    "Latitude": res?.geometry?.location?.lat,
    "Longitude": res?.geometry?.location?.lng
  }

  return formatted_res
}

window.onload = function() {
  window.saveStores = saveStores // Adiciona novo estabelecimento
  window.getStores = getStores // Carrega todos os estabelecimentos

  window.loginStore = loginStore // Altera estabelecimento logado
  window.getSessionStore = getSessionStore // Puxa estabelecimento logado

  window.saveUsers = saveUsers // Adiciona usuário
  window.getUsers = getUsers // Carrega todos os usuários

  window.loginUser = loginUser // Altera usuário logado
  window.getSessionUser = getSessionUser // Mostra usuário logado atual

  window.getAddress = getAddress // Busca as coordenadas

  window.saveStores({})
  window.saveUsers({})
  
  let meusLocais = window.getStores()
  window?.renderLocaisList(meusLocais)
  window?.renderCurrentLocal(meusLocais)

  let loggedUser = getSessionUser();
  let loggedStore = getSessionStore();

  let isLogin = window.location.href?.includes('login.html')
  let isLocal = window.location.href.includes('localhost');
  let url = isLocal ? window.location.origin : `${window.location.origin}/pmv-si-2023-2-pe1-t3-acessibilidade`

  if(isLogin) {
    if(!!loggedUser) {
      return window.location = `${url}/src/mundoInclusivo/perfilUser.html`
    } else if (!!loggedStore) {
      return window.location = `${url}/src/mundoInclusivo/perfilEstab.html`
    }
  }
}
