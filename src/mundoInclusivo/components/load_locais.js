const renderLocalCard = (local) => {
  const foto = local["Foto"];
  const nome = local["Razão Social"];
  const endereço = local["Endereço"]?.["Texto"];
  const descrição = local["Descrição"];
  const avaliacoes = local["Avaliações"]?.map(item => item['nota']);
  const totalEstrelas = avaliacoes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mediaEstrelas = Math.round(totalEstrelas / avaliacoes.length)

  console.log(mediaEstrelas)

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
        <a class="btn btn-primary btn-smal" href="avaliar.html" role="button">Saiba Mais</a>
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
    cardsContainer.appendChild(localItem)
  })
}

window.renderLocaisList = renderLocaisList