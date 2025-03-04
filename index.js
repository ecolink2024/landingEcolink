




//heroslider

const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};


nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);




startSlide();











//navsticky




let lastScrollTop = 0;
let navbar = document.getElementById("arriba");

window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document
      .documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-5em";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
})






//navslide


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const lin1 = document.querySelector('.lin1');
    const lin2 = document.querySelector('.lin2');
    const lin3 = document.querySelector('.lin3');
    const intro = document.querySelector('.contenido');


    burger .addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    })

    burger .addEventListener('click',()=>{
        lin1.classList.toggle('lin1-act')
    })

    burger .addEventListener('click',()=>{
        lin2.classList.toggle('lin2-act')
    })

    burger .addEventListener('click',()=>{
        lin3.classList.toggle('lin3-act')
    })

    intro .addEventListener('click',()=>{
        lin3.classList.remove('lin3-act')
        lin2.classList.remove('lin2-act')
        lin1.classList.remove('lin1-act')
        nav.classList.remove('nav-active')
    })


}



navSlide();




 //up
 function scrollFunction() {


  var up = document.querySelector('.up');


  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    up.classList.add('mostrar')
  } else {
      up.classList.remove('mostrar')
  }


  
}

window.addEventListener('scroll',scrollFunction)




//serviciosss
let unoP = document.getElementById('unop')
function activarUnoP() {
    localStorage.setItem('activarLeerMasUnoP', 'true');
window.location.href = 'servicios.html#botonunop';
}
unoP.addEventListener('click', activarUnoP);




let dosP = document.getElementById('dosp')
function activarDosP() {
    localStorage.setItem('activarLeerMasDosP', 'true');
window.location.href = 'servicios.html#botondosp';
}
dosP.addEventListener('click', activarDosP);



let tresP = document.getElementById('tresp')
function activarTresP() {
    localStorage.setItem('activarLeerMasTresP', 'true');
window.location.href = 'servicios.html#botontresp';
}
tresP.addEventListener('click', activarTresP);




let unoE = document.getElementById('unoe')
function activarUnoE() {
    localStorage.setItem('activarLeerMasUnoE', 'true');
window.location.href = 'servicios.html#botonunoe';
}
unoE.addEventListener('click', activarUnoE);



let dosE = document.getElementById('dose')
function activarDosE() {
    localStorage.setItem('activarLeerMasDosE', 'true');
window.location.href = 'servicios.html#botondose';
}
dosE.addEventListener('click', activarDosE);




let tresE = document.getElementById('trese')
function activarTresE() {
    localStorage.setItem('activarLeerMasTresE', 'true');
window.location.href = 'servicios.html#botontrese';
}
tresE.addEventListener('click', activarTresE);




let cuatroE = document.getElementById('cuatroe')
function activarCuatroE() {
    localStorage.setItem('activarLeerMasCuatroE', 'true');
window.location.href = 'servicios.html#botoncuatroe';
}
cuatroE.addEventListener('click', activarCuatroE);



let cincoE = document.getElementById('cincoe')
function activarCincoE() {
    localStorage.setItem('activarLeerMasCincoE', 'true');
window.location.href = 'servicios.html#botoncincoe';
}
cincoE.addEventListener('click', activarCincoE);



let seisE = document.getElementById('seise')
function activarSeisE() {
    localStorage.setItem('activarLeerMasSeisE', 'true');
window.location.href = 'servicios.html#botonseise';
}
seisE.addEventListener('click', activarSeisE);



let sieteE = document.getElementById('sietee')
function activarSieteE() {
    localStorage.setItem('activarLeerMasSieteE', 'true');
window.location.href = 'servicios.html#botonsietee';
}
sieteE.addEventListener('click', activarSieteE);
