const renderLocalCard = (local) => {
  const foto = local["Foto"];
  const nome = local["Razão Social"];
  const endereço = local["Endereço"]?.["Texto"];
  const descrição = local["Descrição"];
  const avaliacoes = local["Avaliações"]?.map(item => item['nota']) || [];
  const totalEstrelas = avaliacoes?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mediaEstrelas = Math.round(totalEstrelas / avaliacoes.length)
  const emailLocal = local["Email"]

  const localCard = `
    <div class="card">
      <img src="${foto}" class="card-img-top" alt="img1">
      <div class="card-body">
        <h5 class="card-title">${nome}</h5>
        <p class="card-text"><b><i>Sobre:</i></b> ${descrição} <br> <b><i>Endrereço:</i></b> ${endereço}</p>
        <ul class="avaliacao">
          <li class="star-icon ${mediaEstrelas >= 1 && "ativo"}" data-avaliacao="1"></li>
          <li class="star-icon ${mediaEstrelas >= 2 && "ativo"}" data-avaliacao="2"></li>
          <li class="star-icon ${mediaEstrelas >= 3 && "ativo"}" data-avaliacao="3"></li>
          <li class="star-icon ${mediaEstrelas >= 4 && "ativo"}" data-avaliacao="4"></li>
          <li class="star-icon ${mediaEstrelas >= 5 && "ativo"}" data-avaliacao="5"></li>
        </ul>
        <a class="btn btn-primary btn-smal" href="avaliar.html?local=${emailLocal}" role="button">Saiba Mais</a>
      </div>
    </div>
  `

  const card = document.createElement('div');
  card.className = "col-md-3"
  card.innerHTML = localCard

  return card
}

const renderLocaisList = (array) => {
  let cardsContainer = document.querySelector('#cards')

  array.map(local => {
    let localItem = renderLocalCard(local)
    cardsContainer?.appendChild(localItem)
  })
}

const renderLocal = (local) => {

  let localHtml = `
    <div class="col-sm-12 col-md-6">
      <h2 class="h1-responsive font-weight-bold w-100 mt-2 mb-4">
        ${local["Razão Social"]}
      </h2>
      <img class="w-100" src="${local["Foto"]}" alt="Imagem do local" />
      <p class="subtitulo mt-4"><b>Sobre este local:</b></p>
      <p class="texto-principal">
        ${local["Descrição"]}
      </p>
      ${local["Avaliações"]?.map(item => {
        return `
        <div class="card" style="margin-top: 12px">
          <div class="card-body">
          <p class="card-title"><b><i>Avaliador:</i></b> ${item['usuário']}</p>
          <p class="card-text"><b><i>Avaliação:</i></b> ${item['texto']}</p>
            <ul style="display: flex; padding: 0; margin-bottom: 0">
              <li class="star-icon ${item['nota'] >= 1 && "ativo"}" style="font-size: 28px" data-avaliacao="1"></li>
              <li class="star-icon ${item['nota'] >= 2 && "ativo"}" style="font-size: 28px"  data-avaliacao="2"></li>
              <li class="star-icon ${item['nota'] >= 3 && "ativo"}" style="font-size: 28px"  data-avaliacao="3"></li>
              <li class="star-icon ${item['nota'] >= 4 && "ativo"}" style="font-size: 28px"  data-avaliacao="4"></li>
              <li class="star-icon ${item['nota'] >= 5 && "ativo"}" style="font-size: 28px"  data-avaliacao="5"></li>
            </ul>
          </div>
        </div>
        `
      })}
    </div>
    <div class="col-sm-12 col-md-6" style="display: flex; flex-direction: column;">
      <div class="container-fluid d-flex justify-content-center w-100 h-100" style="min-height: 200px; margin-top: 20px">
        <gmp-map center="${local["Endereço"]?.["Latitude"]},${local["Endereço"]?.["Longitude"]}" zoom="17" map-id="DEMO_MAP_ID">
          <gmp-advanced-marker position="${local["Endereço"]?.["Latitude"]},${local["Endereço"]?.["Longitude"]}" title="My location">
          </gmp-advanced-marker>
        </gmp-map>
      </div>
      <div class="container-fluid d-flex flex-column justify-content-center">
        <h4 class="h1-responsive font-weight-bold w-100 mt-4 mb-2">
          Avalie
        </h4>
        <form id="avaliar">
          <div class="rating">
            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5"></label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4"></label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3"></label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2"></label>
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1"></label>
          </div>
          <div class="mb-3">
            <label class="form-label" for="feedback">Escreva sua avaliação aqui:</label>
            <textarea style="min-height: 150px;" class="form-control" id="feedback" type="text" placeholder="Digite sua opinião..." data-sb-validations="required">
            </textarea>
          </div>
          <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
          </div>
        </form>
      <div>
      </div>
    </div>
  `

  let localContainer = document.querySelector('#localAtual')
  localContainer.innerHTML = localHtml
}

const renderSingleLocal = (locais) => {
  let url = window.location.href
  let queryParams = new URLSearchParams(new URL(url).search);
  let email = queryParams.get("local");

  let currentLocal = locais.find(local => local["Email"] === email)

  renderLocal(currentLocal)
}

window.renderLocaisList = renderLocaisList
window.renderCurrentLocal = renderSingleLocal