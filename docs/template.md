# Template padrão do site

Para o nosso template padrão do site, utilizaremos `html`, `css`e `bootstrap`. Além disso, nos preocupamos com uma interface responsiva e otimizada para acessibilidade com o uso de [aria attributes](https://www.w3.org/TR/wai-aria-1.1/).

### Navbar

Menu de navegação utilizado pelo usuário em todas as páginas

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
    <div>
      <img src="icone" alt="Logo da Mundo Inclusivo" />
      <a class="navbar-brand" href="/">Mundo inclusivo</a>
    </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudo-navbar" aria-controls="conteudo-navbar" aria-expanded="false" aria-label="Expandir conteúdo">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="conteudo-navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" role="menuitem">
        <img src="icone">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item" role="menuitem">
        <img src="icone" alt="Listagem de locais" />
        <a class="nav-link" href="#">Lista de locais</a>
      </li>
      <li class="nav-item" role="menuitem">
        <img src="icone" alt="Cadastro de locais" />
        <a class="nav-link" href="#">Cadastrar local</a>
      </li>
      <li class="nav-item" role="menuitem">
        <img src="icone" alt="Quem somos" />
        <a class="nav-link" href="#">Quem somos</a>
      </li>
      <li class="nav-item" role="menuitem">
        <img src="icone" alt="Íconce de informações" />
        <a class="nav-link" href="#">Informação</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
```

### Banner

Banner da home

```html
<div id="controleCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselIndicadores" data-slide-to="0" class="active"></li>
    <li data-target="#carouselIndicadores" data-slide-to="1"></li>
    <li data-target="#carouselIndicadores" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/imagem" alt="Descrição da primeira imagem">
      <div class="carousel-caption d-none d-md-block">
        <h5>Acesse também a listagem de locais</h5>
        <a class="nav-link" href="#">Lista de locais</a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/imagem"  alt="Descrição da segunda imagem">
      <div class="carousel-caption d-none d-md-block">
        <h5>Acesse também a listagem de locais</h5>
        <a class="nav-link" href="#">Lista de locais</a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/imagem"  alt="Descrição da terceira imagem">
      <div class="carousel-caption d-none d-md-block">
        <h5>Acesse também a listagem de locais</h5>
        <a class="nav-link" href="#">Lista de locais</a>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#controleCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Anterior</span>
  </a>
  <a class="carousel-control-next" href="#controleCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Próximo</span>
  </a>
</div>
```
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mundo inclusivo</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">


</head>

<body>
  <header>
    <nav class="navbar navbar-expand-lg  m-2 mb-5 ">
      <div class="container-fluid">

        <a class="navbar-brand" href="/">Mundo inclusivo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100">
            <li class="nav-item  d-flex justify-items-center align-items-center " role="menuitem">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-details" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 5h8"></path>
                <path d="M13 9h5"></path>
                <path d="M13 15h8"></path>
                <path d="M13 19h5"></path>
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
                </path>
                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
                </path>
              </svg>
              <a class="nav-link" href="#">Lista de locais</a>
            </li>
            <li class="nav-item  d-flex justify-items-center align-items-center" role="menuitem">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              <a class="nav-link" href="#">Entrar/Cadastrar </a>
            </li>
            <li class="nav-item d-flex justify-items-center align-items-center" role="menuitem">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-minus" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v11"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v8"></path>
                <path d="M16 19h6"></path>
              </svg>
              <a class="nav-link" href="#">Cadastrar local</a>
            </li>
            <li class="nav-item d-flex justify-items-center align-items-center" role="menuitem">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
              </svg>
              <a class="nav-link" href="#">Quem somos</a>
            </li>
            <li class="nav-item d-flex justify-items-center align-items-center" role="menuitem">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
              <a class="nav-link" href="#">Informação</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section class="sessao1">
      <div class="container text-center">
        <div class="row row-cols-12">
          <div class="col">
            <h1>
             
              Acessibilidade e inclusão

            </h1>
            <h5>Porque devomos falar sobre isso</h5>
            <p class="text-justify">
              A inclusão social é um dos pilares fundamentais de uma sociedade. Contudo, apesar dos
              progressos nas
              políticas de acessibilidade e da conscientização crescente sobre a necessidade de inclusão, as pessoas com
              deficiência ainda enfrentam grandes dificuldades no que diz respeito à interação com o ambiente e à
              acessibilidade a locais públicos. Essas dificuldades não apenas afetam a qualidade de vida desses
              indivíduos, mas também perpetuam a exclusão social . Além de uma obrigatoriedade legal, a
              acessibilidade é sinônimo do alcance de um grupo e segmento de mercado que precisa de produtos
              contemplando suas dores.

              Nesse contexto, surge a necessidade de encontrar soluções que facilitem a interação e a acessibilidade
              para pessoas com deficiência. A proposta é criar um site para registrar e divulgar lugares comerciais e
              eventos com informações sobre acessibilidade. Este projeto visa abordar essa problemática, fornecendo uma
              ferramenta que promove uma sociedade mais inclusiva e igualitária.</p>
          </div>

          <div class="col-sm-12 col-md-6 ">
            <div class="container-fluid d-flex justify-content-center">

              <div id="carouselExampleDark" class="carousel carousel-dark slide w-100">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/homem-de-alto-angulo-em-cadeira-de-rodas-ao-ar-livre.jpg" class="d-block w-100"
                      alt="...">

                  </div>
                  <div class="carousel-item">
                    <img src="img/casal-completo-com-binoculos.jpg" class="d-block w-100" alt="...">

                  </div>
                  <div class="carousel-item">
                    <img src="img/amigos-felizes-de-tiro-completo-conversando-la-fora.jpg" class="d-block w-100"
                      alt="...">

                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
    </section>

    <section>
      <div class="col-lg-6 col-md-8 mx-auto d-flex flex-column">
        <h1 class="fw-light text-center">Quem somos</h1>
        <img class="mx-auto" src="img/logo 2.png">
        <p class="lead text-body-secondary">Somos um grupo dedicado a promover a inclusão e acessibilidade para pessoas
          com deficiência, através
          da conectividade e da colaboração. Acreditamos que a conscientização, a informação e a cooperação
          podem criar um impacto significativo na vida dessas pessoas</p>

      </div>



      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1>Nossos Pilares</h1>
          </div>
        </div>

        <div class="container text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="/img/vista-lateral-homem-com-deficiencia-esperando-o-onibus.jpg" class="card-img-top"
                  alt="...">
                <div class="card-body">
                  <p class="card-text">Economizar o tempo de busca</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="img/amigos-se-divertindo-juntos.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Promover a conscientização social</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="/img/homem-com-deficiencia-de-tiro-completo-fazendo-esporte.jpg" class="card-img-top"
                  alt="...">
                <div class="card-body">
                  <p class="card-text">Reforçar a inclusão e a acessibilidade</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="img/homem-cego-de-tiro-completo-usando-marcas.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text"> Reduzir a frustação pela busca de lugares com acessibilidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>

    <div class="container text-center">
      <div class="row row-cols-12">

        
  
        <div class="container py-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contate-nos</h2>
          
          <p class="text-center w-responsive mx-auto mb-5">Você tem alguma pergunta? Por favor, não hesite a entrar em contato
            nós diretamente. Nossa equipe retornará para você dentro
            questão de horas para ajudá-lo.</p>

          <form id="contactForm">

        
            <div class="mb-3">
              <label class="form-label" for="name">Name</label>
              <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            </div>

 
            <div class="mb-3">
              <label class="form-label" for="emailAddress">Email Address</label>
              <input class="form-control" id="emailAddress" type="email" placeholder="Email Address"
                data-sb-validations="required, email" />
            </div>

         
            <div class="mb-3">
              <label class="form-label" for="message">Message</label>
              <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"
                data-sb-validations="required"></textarea>
            </div>

            
            <div class="d-grid">
              <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>

          </form>

        </div>
      </div>

    </div>
    </div>

  </main>

  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"> Lista de locais</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Cadastro</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"> Sobre</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 MundoInclusivo</p>
  </footer>



  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
</body>

</html>
```

## Design

Detalhe os layouts que serão utilizados. Apresente onde será colocado o logo do sistema. Defina os menus padrões, entre outras coisas.


## Cores

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/2e132514-35b8-4e2f-a38b-cf3fc63cb04a)

As tonalidades mais escuras de azul fazem referência à confiança, credibilidade e seriedade das informações. Traz, também, a ideia de comunicação eficaz. Enquanto a tonalidade mais clara de azul passa a imagem de serenidade e tranquilidade, acolhendo as pessoas que acessam o site, tornando o aspecto visual confortável. As cores amarelo e laranja transmitem calor, acessibilidade e um aspecto energético amigável. Dessa forma, as cores se comunicam, em conjunto, com o usuário, passando a ideia de um site seguro, confiável e acolhedor. Essas são as cores principais da plataforma. As outras tonalidades que acompanham funcionam como neutralizadoras, harmonizando as cores principais escolhidas.  



## Tipografia

Foi empregada uma fonte apenas para o desenvolvimento do trabalho, e essa escolha foi feita com o objetivo de padronizar e tornar o design geral mais limpo. A fonte utilizada foi a Microsoft Yahei. Esta fonte foi utilizada para todos os componentes da página, e em alguns momentos foi utilizado o recurso Bold, principalmente para os títulos e rótulos.

![bold](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141170035/81690f01-2e28-4c01-935d-56cf49ee72d0)

![bold2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141170035/65d7cc8c-e56f-4acc-88c7-34dc332ab40e)

Como pode-se verificar, o Bold é um fator para destacar a fonte e a enfatizar, e isto é feito através do aumento de espessura da fonte. No caso dos títulos, o incremento do tamanho das fontes juntamente ao uso do método citado favoreceram para chamar mais a atenção do receptor e prendê-lo na ideia da página, e acreditamos que isto facilita ainda mais a compreensão do PcD sobre as informações. No caso dos rótulos o Bold foi muito utilizado para acentuar a importância dos elementos relevantes para a página e consequentemente facilitar a visualização e identificação das funcionalidades presentes. Um forte exemplo pode ser citado a partir do login, já que, fora o título da seção, os elementos essenciais para o usuário proceder caso ainda não tenha o login estão em destaque, como "Esqueci minha senha" e "Ainda não tem uma conta? Registrar-se"

![login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141170035/62fb7ba3-d9dd-4b23-ba3e-b47c936f3111)

Tratando-se da fonte utilizada, a Microsoft Yahei é uma tipografia com traços suaves e sem serifa(elemento presente no terminal de uma letra, que é basicamente o fim de uma letra) e por isso seu visual é bem simplificado. Introduzindo um pouco sobre a fonte, esta fonte foi desenvolvida por padrão para os usuários que usavam como idioma de interface o chinês simplificado e visava melhorar a legibilidade, sendo desenvolvida pela Founder Electronics e Monotype em 2004, e encarregada pela Microsoft. Esta fonte foi desenvolvida com 3 versões de espessura, respectivamente em ordem crescente: Light, Regular, Bold. Portanto é possível constatar que a versão Light é a mais fina, enquanto que a Regular é mediana e a Bold é a considerada mais grossa. Vale dizer que pela Microsoft Yahei ser uma fonte uniforme, a diferença de espessura não entre as suas versões mas sim entre os elementos da letra é muito pequena ou quase nula(a espessura relativa não entre os níveis de espessura mas sim entre os elementos da letra é praticamente nula). A proposta do nosso projeto é de caráter limpo ou minimalista, e objetivo, e as características simples e com poucos detalhes dessa tipografia se encaixam bem no projeto, desempenhando uma função de melhorar a acessibilidade do usuário e fornecer-lhe informação com objetividade. Fora isso, a grossura Bold foi um grande destaque para o projeto, e a função do uso da mesma ao projeto foi o de proporcionar uma experiência mais objetiva paraa os PcDs e lhes fornecer uma melhor visualização da composição da página e o que cada componente significa, evitando provocar uma confusão visual pelo uso de uma mesma espessura para todos os componentes da página.

## Iconografia

Os seguintes ícones serão utilizados como logotipo, distriuídos pelas wireframes de diferentes maneiras, mas sempre visando registrar a marca do projeto. O terceiro, além de logotipo, recebe a funcionalidade de botão "home", que leva à página principal. Todos foram produzidos no apliativo Canva.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/f8c8b455-0549-4b06-b131-757384db7391)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/50dbf20e-114f-48c6-8843-190035fdedb0)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/83a99885-4fbb-4bce-ac6f-266d46db4c09) 


![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/27ead8ae-2a4d-41c7-adae-791cc76163cd)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t3-acessibilidade/assets/141369232/c20b75d7-c50b-4d27-8872-68e3097ff786)


Seguindo a lógica esquerda-direita, temos, em ordem:
1. ícone que representa a conta do usuário, onde ele poderá editar seus dados. Além disso, nesse local ficará a sua foto de perfil quando estiver logado no site. 
2. botão do assistente virtual
3. símbolo de busca que acomapanha e facilita o entendimento da barra de busca
4. ícone que acompanha o botão "leitor imersivo" para facilitar o entendimento do significado da funcionalidade
5. botão que direciona o usuário à listagem de locais
6. botão de enviar mensagem
7. botão de entrar ou cadastrar conta
8. este é um ícone provisório que substitui a foto do usuário em seu perfil, ou seja, ao adicionar uma foto, este ícone sumirá.
9. botão que leva ao cadastro de locais
10. ícone que acomapnha o botão que direciona às informações na home page
11. ícone que fica na parte de data de nascimento
12. ícone representando local. Fica na página de informações sobre o estabelecimento.
13. ícone que acompanha o botão de edição do perfil do usário, facilitando a compreensaão
14. botão de visualização de senha
15. ícone que acompanha o botão de lembrar senha
16. ícone que acompanha o botão de excluir perfil, facilitando o entendimento
17. botão de compartilhamento
18. ícone que representa a avaliação do estabelecimento
19. ícone que acomapanha o botão "quem somos" na navbar, direcionando o usuário para a parte "quem somos" na home page


As cores utilizadas para representar estes ícones é ilustrativa, elas variam no site de acordo com a funcionalidade e/ou objetivo. Todos os ícones servem para facilitar o máximo possível o entendimento das funcionalidades dos botões, tornando o site simplificado, de fácil compreensão; de maneira que qualquer pessoa conseguirá utilizá-lo. Todos foram encontrados no Mockplus.


Defina os ícones que serão utilizados e suas respectivas funções.

Apresente os estilos CSS criados para cada um dos elementos apresentados.
Outras seções podem ser adicionadas neste documento para apresentar padrões de componentes, de menus, etc.


> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
