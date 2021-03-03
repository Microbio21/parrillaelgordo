let boton = document.getElementById('burger');
let menu = document.getElementById('menu');
boton.addEventListener('click', ()=> {
    menu.classList.toggle('open');
})

let closeAlert = document.getElementById('closeAlert');
let contact = document.getElementById('contact');
let alert = document.getElementById('alertC');
contact.addEventListener('click', ()=>{
    alert.classList.toggle('openC');
})
closeAlert.addEventListener('click', ()=>{
    alert.classList.toggle('closeC');
})