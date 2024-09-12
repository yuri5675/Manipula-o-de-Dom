const containercor = document.getElementById('container_cor')
const buttonmudar = document.querySelector('.button_mudar')


buttonmudar.addEventListener('click',()=>{
    if(buttonmudar.classList.contains('button_mudar')){
        buttonmudar.classList.remove('button_mudar');
        buttonmudar.classList.add('verde');
       buttonmudar.innerHTML="verde";
       containercor.classList.add('verde')

    } else if(buttonmudar.classList.contains('verde')){
        buttonmudar.classList.remove('verde');
        buttonmudar.classList.add('vermelho');
       buttonmudar.innerHTML="vermelho";
       containercor.classList.add('vermelho')
    
    }else if(buttonmudar.classList.contains('vermelho')){
        buttonmudar.classList.remove('vermelho');
        buttonmudar.classList.add('azul');
       buttonmudar.innerHTML="azul";
       containercor.classList.add('azul')
    } else if(buttonmudar.classList.contains('azul')){
        buttonmudar.classList.remove('azul')
        buttonmudar.classList.add('roxo')
        buttonmudar.innerHTML='roxo'
        containercor.classList.add('roxo')
    }


})

//codificção de mudança de tema 

const body=document.querySelector('.light')
const buttonthema = document.getElementById('button_tema')


buttonthema.addEventListener('click',()=>{
    body.classList.toggle('dark')
    body.classList.toggle('light')


})

