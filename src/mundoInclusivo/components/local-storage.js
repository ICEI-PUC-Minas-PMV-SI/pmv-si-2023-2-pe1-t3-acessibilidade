"1600 Amphitheatre Parkway, Mountain View, CA"

const GOOGLE_API_KEY = 'AIzaSyBkLndHuMv968iinF2ol4_B33JVIf7Gf6A';

const BASE_STORES = [
    {
    "Nome do Proprietário": "Sofia Oliveira",
    "Razão Social": " Multicultura Gastronômica ",
    "CNPJ": "321.654.987/0001-06",
    "Email": "contato@saboresmulticulturais.com",
    "Endereço": {
      "Texto": "R. Silva Teles, 23 - Andaraí, Rio de Janeiro - RJ, 20541-110, Brasil",
      "Latitude": "-22.9235881",
      "Longitude": "-43.2429692"
    },
    "Telefone": "(55) 12345-6789",
    "Senha": "multicultural123",
    "Confirmar senha": "multicultural123",
    "Tipos de deficiência": [],
    "Descrição": "O Sabores Multiculturais oferece rampas de acesso, cardápios em Braille e espaços adaptados para cadeirantes. A equipe recebe treinamento para atender às necessidades de diversas deficiências.",
    "Foto": "img/local1-unsplash.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 5,
      "usuário": "isadora.lima@email.com",
      "texto": "Uma experiência gastronômica única! A diversidade de sabores e o comprometimento com a acessibilidade tornam o Sabores Multiculturais um lugar especial. Muito bom!"
    },
    {
      "nota": 3,
      "usuário": "rafael.oliveira@email.com",
      "texto": "O ambiente é agradável, e a equipe é prestativa, mas esperava uma variedade maior no cardápio. Boa experiência, mas com espaço para melhorias."
    }
  ]
  },
  {
    "Nome do Proprietário": "Marcelo Santos",
    "Razão Social": "Santos Gastronômica ",
    "CNPJ": "987.321.654/0001-07",
    "Email": "contato@saborinclusivo.com",
    "Endereço": {
      "Texto": "R. Araújo Lima, 38, Rio de Janeiro - RJ, 20541-050, Brasil",
      "Latitude": "-22.9233354",
      "Longitude": "-43.2405696"
    },
    "Telefone": "(66) 87654-3210",
    "Senha": "inclusivo456",
    "Confirmar senha": "inclusivo456",
    "Tipos de deficiência": ["Acessibilidade para pessoas com deficiência auditiva, Acessibilidade para pessoas com mobilidade reduzida,  Acessibilidade para pessoas com deficiência visual"],
    "Descrição": "O Sabor Inclusivo oferece cardápios com QR Code para tradução em Libras, instalações adaptadas para mobilidade reduzida e atendimento especializado para pessoas com deficiência visual.",
    "Foto": "img/loca2-unsplash.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 3,
      "usuário": "vanessa.costa@email.com",
      "texto": "O restaurante oferece uma experiência inclusiva, mas o ambiente poderia ser mais espaçoso. A comida é boa, e a atenção à acessibilidade é louvável. "
    }]
  },
  
  {
    "Nome do Proprietário": "João Silva",
    "Razão Social": "Silva & Cia. Gastronomia ",
    "CNPJ": "123.456.789/0001-01",
    "Email": "contato@sabordelicia.com",
    "Endereço": {
      "Texto": "R. Gastronômica, 123, São Paulo - SP, 01234-567, Brasil",
      "Latitude": "-23.550520",
      "Longitude": "-46.633308"
    },
    "Telefone": "(11) 98765-4321",
    "Senha": "restaurante123",
    "Confirmar senha": "restaurante123",
    "Tipos de deficiência": ["Acessibilidade para cadeirantes"],
    "Descrição": "O Restaurante Sabor Delícia possui rampas de acesso, banheiros adaptados e espaço amplo para a circulação de cadeiras de rodas.",
    "Foto": "img/local4.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 4,
      "usuário": "antonio.oliveira@email.com",
      "texto": "Adorei a comida no Silva & Cia.! A acessibilidade para cadeirantes facilita muito, e o atendimento é excelente. Voltarei com certeza!",
    },
    {
      "nota": 3,
      "usuário": "camila.rodrigues@email.com",
      "texto": "Excelente opção gastronômica! As rampas e banheiros adaptados fazem toda a diferença. Recomendo para todos, inclusive para famílias com cadeirantes."
    }]
  },
  {
    "Nome do Proprietário": "Maria Oliveira",
    "Razão Social": "Oliveira & Filhos Alimentação ",
    "CNPJ": "987.654.321/0001-02",
    "Email": "contato@cantinhodosabor.com",
    "Endereço": {
      "Texto": "Av. dos Sabores, 456, Rio de Janeiro - RJ, 20020-080, Brasil",
      "Latitude": " -22.906846",
      "Longitude": "-43.172896"
    },
    "Telefone": "(21) 87654-3210",
    "Senha": "inclusiva789",
    "Confirmar senha": "inclusiva789",
    "Tipos de deficiência": ["Acessibilidade para pessoas com deficiência auditiva"],
    "Descrição": "A Gastronomia Inclusiva oferece cardápios com QR Code para tradução de texto para Libras, além de treinamento especializado para a equipe em atendimento a pessoas com deficiência auditiva.",
    "Foto": "img/local8.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 5,
      "usuário": "isabela.santos@email.com",
      "texto": "O Cantinho do Sabor é incrível! Os cardápios em Braille e o atendimento para deficientes visuais são louváveis. Uma experiência realmente inclusiva.",
    },

    {
      "nota": 4,
      "usuário": "lucas.ferreira@email.com",
      "texto": "Fiquei encantado com a atenção aos detalhes para pessoas com deficiência visual. O sabor da comida é excepcional. Recomendo a todos!"
    }]
  },
  {
    "Nome do Proprietário": "Ana Santos",
    "Razão Social": " Gastronomia com Amor ",
    "CNPJ": "456.789.012/0001-03",
    "Email": "contato@gastronomiainclusiva.com",
    "Endereço": {
      "Texto": "R. da Inclusão, 789, Belo Horizonte - MG, 30140-110, Brasil",
      "Latitude": " -19.922764",
      "Longitude": "-43.941343"
    },
    "Telefone": "(31) 76543-2109",
    "Senha": "cantinho456",
    "Confirmar senha": "cantinho456",
    "Tipos de deficiência": ["Acessibilidade para pessoas com deficiência visual"],
    "Descrição": "O Cantinho do Sabor conta com cardápios em Braille, piso tátil e atendimento especializado para pessoas com deficiência visual.",
    "Foto": "img/local6.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 4,
      "usuário": "pedro.oliveira@email.com",
      "texto": "A Gastronomia Inclusiva é um exemplo! O QR Code para tradução em Libras facilita a comunicação. Um ambiente muito acolhedor."
    },
    {
      "nota": 3,
      "usuário": "larissa.mendes@email.com",
      "texto": "Maravilhoso! A atenção aos clientes com deficiência auditiva é notável. O treinamento da equipe faz toda a diferença. Parabéns!"
    },
    {
      "nota": 5,
      "usuário": "thiago.costa@email.com",
      "texto": "Experiência única! A Gastronomia Inclusiva vai além das expectativas. O cuidado com a acessibilidade auditiva é digno de elogios."
    }]
  },
  {
    "Nome do Proprietário": "Mariana Costa",
    "Razão Social": "Aromas Mediterrâneos",
    "CNPJ": " 654.321.098/0001-08",
    "Email": "contato@aromasmediterraneos.com",
    "Endereço": {
      "Texto": "R. das Especiarias, 234, São Paulo - SP, 01234-567, Brasil",
      "Latitude": " -23.550342",
      "Longitude": "-46.633382"
    },
    "Telefone": " (55) 98765-4321",
    "Senha": "mediterraneo123",
    "Confirmar senha": "mediterraneo123",
    "Tipos de deficiência": ["Acessibilidade para cadeirantes, Acessibilidade para pessoas com deficiência visual"],
    "Descrição": "O Aromas Mediterrâneos oferece espaços adaptados para cadeirantes, cardápios em Braille e uma atmosfera única inspirada no Mediterrâneo.",
    "Foto": "img/local7.jpg",
    "Sobre": "lorem ipsum",
    "Avaliações": [{
      "nota": 3,
      "usuário": "rodrigo.oliveira@email.com",
      "texto": "O ambiente é agradável, mas a acessibilidade poderia ser melhor. A comida também ficou no meio-termo. Uma experiência mais ou menos, esperava um pouco mais de destaque."
    },
    {
      "nota": 3,
      "usuário": "larissa.mendes@email.com",
      "texto": "O Aromas Mediterrâneos tem uma proposta interessante, mas a execução dos pratos deixou a desejar. Ainda assim, a experiência foi mais ou menos, sem grandes surpresas."
    },
    ]
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

const addFeedbackForStore = (feedback, emailLocal) => {
  let locais = getStores();
  let currentLocal = locais?.find(local => local["Email"] === emailLocal)
  
  if(!currentLocal) {
    return
  }

  let avaliacoesAtuais = currentLocal["Avaliações"];
  let avaliacoesAtualizadas = [...avaliacoesAtuais, feedback]

  currentLocal["Avaliações"] = avaliacoesAtualizadas

  saveStores(currentLocal)

  console.log(currentLocal)
}

const saveStores = (store) => {
  let currentStores = getStores() || [];
  let hasCurrentStores = currentStores.length > 0;
  let baseStores = hasCurrentStores ? currentStores : BASE_STORES
  
  let newStores = [...baseStores, store].reduce((accumulator, currentObject) => {
    const email = currentObject["Email"];

    accumulator[email] = currentObject;
  
    return accumulator;
  }, {})
  setStoreItem(LOCAL_STORES_KEY, { locais: Object.values(newStores) })

  console.log(newStores)

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
  window.addFeedbackForStore = addFeedbackForStore // Adiciona avaliação nova

  window.saveStores({})
  window.saveUsers({})
  
  let meusLocais = window.getStores()
  window?.renderLocaisList(meusLocais)
  window?.renderCurrentLocal(meusLocais)

  let loggedUser = getSessionUser();
  let loggedStore = getSessionStore();

  let isLogin = window.location.href?.includes('login.html')
  let isLocal = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1');
  let url = isLocal ? window.location.origin : `${window.location.origin}/pmv-si-2023-2-pe1-t3-acessibilidade`

  if(isLogin) {
    if(!!loggedUser) {
      return window.location = `${url}/src/mundoInclusivo/perfilUser.html`
    } else if (!!loggedStore) {
      return window.location = `${url}/src/mundoInclusivo/perfilEstab.html`
    }
  }
}
