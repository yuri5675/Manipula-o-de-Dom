const titulo = document.getElementById('titulo');
const input = document.querySelector('input');
const button = document.querySelector('button');

titulo.innerText ="Manipulaçao de Atributos"; 
button.innerText = "Mostar senha";


//adicionando evento ao botão

button.addEventListener('click',()=>{
    if(input.getAttribute('type')=='password'){
        input.setAttribute('type','text');
        button.innerText="Ocultar senha"
    }else{
        input.setAttribute('type','password')
       button.innerText ="Mostar senha";
    }
    



})