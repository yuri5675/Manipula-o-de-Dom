const input=document.querySelector('input');
const buttoninserir=document.querySelector('.button_inserir');
const buttonremove=document.querySelector('.button_remove');
const buttonremovetodos = document.querySelector('.buttom_remove_todos');
const ol = document.querySelector('ol');
const button = document. querySelectorAll('button')


button.forEach((itembutton,indice)=>{
    itembutton.addEventListener('mouseenter',()=>{
        itembutton.style.cursor='pointer'
    })

    if(indice == 0){
        itembutton.style.backgroundColor="blue"
        itembutton.style.color="#fff"
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding="5px"
        itembutton.style.borderRadius="7px"
    } else if(indice == 1){
        itembutton.style.backgroundColor="red"
        itembutton.style.color="#fff"
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding="5px"
        itembutton.style.borderRadius="7px"
    }

    if(indice == 2){
        itembutton.style.backgroundColor="green"
        itembutton.style.color="#fff"
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding="5px"
        itembutton.style.borderRadius="7px"
    }
})

//aplicando evento de teclado para inserir os dados 

input.addEventListener('keyup', teclado);
function teclado(evento){
    
    if(input.value == ""){
        alert('erro, digite algo')
    
    
    }else{
        if(evento.key === 'Enter'){
            const li= document.createElement('li');
            li.append(input.value);
            ol.appendChild(li);
    }

    

}
}

//aplicando button para inserir 






//aplicando o evento click no botão remover
buttonremove.addEventListener('click',remove);
function remove(){
    const removeli = document.querySelectorAll('li')
    ol.removeChild(removeli[removeli.length-1])
}


//aplicando remover todos
buttonremovetodos.addEventListener('click',removetodos);
function removetodos(){
const removeli=document.querySelectorAll('li');
ol.remove(removeli[removeli.length]);

}
