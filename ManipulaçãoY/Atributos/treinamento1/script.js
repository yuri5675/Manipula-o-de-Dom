const input = document.querySelector('input');
const image = document.querySelector('.image');
const body = document.querySelector('body');
const div = document.querySelector('div')




image.addEventListener('mouseenter',()=>{
    image.style.cursor = 'pointer';



});

// evento que ocorre a partir do momento q o úsuario digita 
input.addEventListener('keydown', ()=>{

    image.style.display = 'inline-block';



})


// evento que ocorre quando desfocamos o elemento clicando fora do elemento

body.addEventListener('mouseenter',()=>{
    image.style.display = 'none';



})





image.addEventListener('click',imageclick);
function imageclick(){

    if(input.getAttribute('type')== 'password'){
        input.setAttribute('type','text');
        image.setAttribute('src','imagens mani/hide.png')
    }else{
        input.setAttribute('type','password')
        image.setAttribute('src','imagens mani/icons8-ponto-de-interrogação-24.png')
    }
}


