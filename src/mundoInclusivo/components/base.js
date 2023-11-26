const estabForm = document.getElementById('estabForm');
const estabFormModal = document.getElementById('estabFormModal');


const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;




estabForm.addEventListener('submit', ev => {
    ev.preventDefault(); 
    const data = new FormData(estabForm);
    const email = document.getElementById('estabEmail');
    const pass = document.getElementById('estabPass');
    const obj = {
        "Email Estabelecimento":email.value,
        "Senha Estabelecimento":pass.value
    }

    Object.keys(obj).forEach((str)=>{
        switch(str){
            case "Email Estabelecimento":
            localStorage.setItem(str,obj);

            case "Senha Estabelecimento":
            localStorage.setItem(str,obj);
           
        }
    })
})
estabFormModal.addEventListener('submit',ev=>{
    ev.preventDefault();

    const modalData = new FormData(estabFormModal);

    const gaps = estabFormModal.getElementsByClassName('form-control');

    const modalObj = {
        "Nome do Proprietário":gaps[0].value,
        "Razão Social":gaps[1].value,
        "CNPJ":gaps[2].value,
        "Email Estabelecimento":gaps[3].value,
        "Endereço":gaps[4].value,
        "Telefone":gaps[5].value,
        "Senha":gaps[6].value,
        "Confirmar senha":gaps[7].value
    }
    
    Object.keys(modalObj).forEach((str,index)=>{
      if(str === "Senha" || str === "Confirmar senha" ){
        localStorage.setItem(str,modalObj[str]);
        localStorage.getItem(str);
      }
      else{
        localStorage.setItem(str,JSON.stringify(modalObj[str]));
        localStorage.getItem(str);
      }
    })
})
