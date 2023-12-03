const baseImports = `
  <link rel="stylesheet" href="css/base_style.css">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.18.0/font/bootstrap-icons.css" rel="stylesheet">
  <script src="load_locais.js"></script>
  <script src="set-login.js"></script>
  <script src="leitor-de-tela.js"></script>
  <script src="local-storage.js"></script>
  <script src="base.js"></script>
`
document.getElementById('head-imports').innerHTML = baseImports