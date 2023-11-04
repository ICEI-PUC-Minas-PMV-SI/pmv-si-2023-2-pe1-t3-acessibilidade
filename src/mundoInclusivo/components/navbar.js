const navbarComponent = `
<header>
<nav class="navbar navbar-expand-lg   ">
<div class="container-fluid">
  <a class="navbar-brand" href="homePage.html"><span class="one-colors">Mundo</span><span
      class="two-colors">Inclusivo</span>
  </a>
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
        <a class="nav-link" href="listaLocais.html"><span id="nav-menu">Lista de locais</span></a>
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
        <a class="nav-link" href="#"><span id="nav-menu">Cadastrar local</span></a>
      </li>

      <li class="nav-item  d-flex justify-items-center align-items-center" role="menuitem">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
        <a class="nav-link" href="perfil.html"><span id="nav-menu">Entrar</span> </a>
      </li>
      <li class="nav-item dropdown ">
      <a class="d-flex justify-items-center align-items-center nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" class="me-2 icon icon-tabler icon-tabler-info-circle" width="24"
        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M12 9h.01"></path>
        <path d="M11 12h1v4h1"></path>
      </svg>
        Informação
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Sobre a iniciativa</a></li>
        <li><a class="dropdown-item" href="#">Sobre acessibilidade</a></li>
        <li><a class="dropdown-item" href="tiposDeficiencia.html">Tipos de deficiência</a></li>
        <li><a class="dropdown-item" href="#">Como funciona</a></li>
      </ul>
    </li>
  </ul>

    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Buscar</button>
    </form>
  </div>
</div>
</nav>
          
        
        
</header>
`
document.getElementById('navbar-component').innerHTML = navbarComponent