const body = document.getElementById('body');
const button_thema = document.querySelector('.button_thema');

button_thema.addEventListener('mouseenter', ()=>{
    button_thema.style.cursor = 'pointer';
})

button_thema.addEventListener('click', thema);
function thema(){
    if(body.getAttribute('class') == 'thema_light'){
        body.setAttribute('class', 'thema_dark');
        button_thema.innerHTML = "Light Thema";
    } else {
        body.setAttribute('class', 'thema_light');
        button_thema.innerHTML = "Dark Thema";
    }
}





