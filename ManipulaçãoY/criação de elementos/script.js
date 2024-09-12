const titulo = document.getElementById('titulo');
const buttonadd = document.getElementById('buttonadd')

titulo.innerText ="Criação de Elementos";
buttonadd.innerHTML ="Adicionar";

buttonadd.addEventListener('click',()=>{
    const ul = document.getElementById('inputs');

    const li = document.createElement('li');
    li.innerHTML="Novo campo:";


    ul.appendChild(li);

    const input= document.createElement('input')
    input.type ="text";
    input.placeholder=" Digite algo"

    li.appendChild(input)

    input.addEventListener('keyup',(tecla)=>{
       if(tecla.key === 'Enter'){
        li.appendChild(document.createElement('br'))
        li.append(input.value);

       }
        

    })


});

const body = document. querySelector('body');
body.appendChild(document.createElement('hr'));
const p = document.createElement('p')
p.innerText=`lorememmememe`
body.appendChild(p)

// adicionando uma classe ao elemento
p.classList.add('paragrafo');

const img =document.createElement('img');
img.src = "https://lncimg.lance.com.br/cdn-cgi/image/width=1214,height=560,quality=75,format=webp/uploads/2023/03/31/64275624de0fd.jpeg";
img.alt ="imagem do maior time do brasil"

body.append(p,img)

