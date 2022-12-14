import './assets/scss/style.scss';
import './db.json';

import "./image/Facebook.webp";
import "./image/instagram.webp";
import "./image/logo_simbolo_laranja.webp";
import "./image/oratoria_digital_logo.webp";
import "./image/retangulo.webp";
import "./image/seta.webp";
import "./image/Twitter.webp";
import "./image/Whatsapp.webp";

//Slider
let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("main__feedback__item");
    let dots = document.getElementsByClassName("main__feedback__navItem");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" main__feedback--white", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " main__feedback--white";
}

// Modal
let modal = document.getElementsByClassName('main__modal')[0];
let arrayBtn = [];
arrayBtn.push(document.getElementsByClassName('main__home__btnOne')[0]);
arrayBtn.push(document.getElementsByClassName('main__client__btnOne')[0]);
arrayBtn.push(document.getElementsByClassName('main__accordion__btnOne')[0]);
arrayBtn.push(document.getElementsByClassName('main__team__btnOne')[0]);
arrayBtn.push(document.getElementsByClassName('main__target__btnOne')[0])
arrayBtn.push(document.getElementsByClassName('main__methodology__btnOne')[0]);;
let span = document.getElementsByClassName('main__modal__close')[0];

function clearFields(){
    let fields = document.querySelectorAll('.main__modal__group > input');
    fields.forEach(function(item){
        item.value = '';
    });
}

function closeModal(){
    modal.style.display = "none";
    clearFields();
}

arrayBtn.forEach(function(value){
    value.onclick = function() {
        modal.style.display = "flex";
    }
});

span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.querySelector('.main__modal__button').addEventListener('click', validateData);

function validateData(){
    let nome = document.querySelector('#nome');
    let tel = document.querySelector('#telefone');
    let email = document.querySelector('#email');
    let job = document.querySelector('#profissao');
    let terms = document.querySelector('#terms');
    if(nome.value == ''){
        alert('Nome vazio! \nPreencha e envie novamente');
        // nome.focus();
    }else if(tel.value == ''){
        alert('Telefone vazio! \nPreencha e envie novamente');
        // tel.focus();
    }else if(email.value == ''){
        alert('Email vazio! \nPreencha e envie novamente');
        // email.focus();
    }else if(job.value == ''){
        alert('Profissão vazia! \nPreencha e envie novamente');
        // job.focus();
    }else if(terms.checked == false){
        alert('Para continuar é preciso aceitar os termos de uso! \nPreencha e envie novamente');
        terms.focus();
    }else{
        alert('Dados enviados com sucesso!');
        sendData();
        closeModal();
    }
};

// Mask tel
const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value;
}

// Valid email
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    let label = document.querySelector('[for="email"]');
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        console.log("E-mail valido");
        field.style.outlineColor = "var(--color-orange)";
        label.style.color = "var(--color-orange)";
    }
    else {
        console.log("E-mail invalido");
        field.style.outlineColor = "#F22";
        label.style.color = "#F22";
        field.focus();
    }
}

// npm run build

// AJAX
function sendData(){
    let URL = 'http://localhost:3000';
    let name = document.querySelector('#nome').value;
    let tel = document.querySelector('#telefone').value;
    let email = document.querySelector('#email').value;
    let job = document.querySelector('#profissao').value;
    fetch(`${URL}/usuarios`, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            job: job
        }),
    })
        .then(response => response.json())
        .then(json => console.log(json));
}

//Ga 4