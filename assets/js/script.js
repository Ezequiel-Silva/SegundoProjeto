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

arrayBtn.forEach(function(value){
    value.onclick = function() {
        modal.style.display = "flex";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}