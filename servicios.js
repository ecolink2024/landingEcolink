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
  




//serviciosparticulares
let botonUnoP = document.getElementById('botonunop');
let masUnoP = document.getElementById('masunop');
let menosUnoP = document.getElementById('menosunop');
let servicioUnoP = document.getElementById('serviciounop');
let tamanoUnoP = document.getElementById('conbotunop')
function toggleTextUnoP() {
  
  masUnoP.classList.toggle('ocultar')
  menosUnoP.classList.toggle('ocultar')
  servicioUnoP.classList.toggle('ocultar')
  window.location.href = '#botonunop';
  tamanoUnoP.classList.toggle('ancho')
}
botonUnoP.addEventListener('click',toggleTextUnoP)








let botonDosP = document.getElementById('botondosp');
let masDosP = document.getElementById('masdosp');
let menosDosP = document.getElementById('menosdosp');
let servicioDosP = document.getElementById('serviciodosp');
let tamanoDosP = document.getElementById('conbotdosp')
function toggleTextDosP() {
  masDosP.classList.toggle('ocultar')
  menosDosP.classList.toggle('ocultar')
  servicioDosP.classList.toggle('ocultar')
  window.location.href = '#botondosp';
  tamanoDosP.classList.toggle('ancho')
}
botonDosP.addEventListener('click',toggleTextDosP)



let botonTresP = document.getElementById('botontresp');
let masTresP = document.getElementById('mastresp');
let menosTresP = document.getElementById('menostresp');
let servicioTresP = document.getElementById('serviciotresp');
let tamanoTresP = document.getElementById('conbottresp')
function toggleTextTresP() {
  masTresP.classList.toggle('ocultar')
  menosTresP.classList.toggle('ocultar')
  servicioTresP.classList.toggle('ocultar')
  window.location.href = '#botontresp';
  tamanoTresP.classList.toggle('ancho')
}
botonTresP.addEventListener('click',toggleTextTresP)





//serviciosempresas
let botonUnoE = document.getElementById('botonunoe');
let masUnoE = document.getElementById('masunoe');
let menosUnoE = document.getElementById('menosunoe');
let servicioUnoE = document.getElementById('serviciounoe');
let tamanoUno = document.getElementById('conbotuno')
function toggleTextUno() {
  
  masUnoE.classList.toggle('ocultar')
  menosUnoE.classList.toggle('ocultar')
  servicioUnoE.classList.toggle('ocultar')
  window.location.href = '#botonunoe';
  tamanoUno.classList.toggle('ancho')
}
botonUnoE.addEventListener('click',toggleTextUno)



let botonDosE = document.getElementById('botondose');
let masDosE = document.getElementById('masdose');
let menosDosE = document.getElementById('menosdose');
let servicioDosE = document.getElementById('serviciodose');
let tamanoDos = document.getElementById('conbotdos')
function toggleTextDos() {
  masDosE.classList.toggle('ocultar')
  menosDosE.classList.toggle('ocultar')
  servicioDosE.classList.toggle('ocultar')
  window.location.href = '#botondose';
  tamanoDos.classList.toggle('ancho')
}
botonDosE.addEventListener('click',toggleTextDos)


let botonTresE = document.getElementById('botontrese');
let masTresE = document.getElementById('mastrese');
let menosTresE = document.getElementById('menostrese');
let servicioTresE = document.getElementById('serviciotrese');
let tamanoTres = document.getElementById('conbottres')
function toggleTextTres() {
  masTresE.classList.toggle('ocultar')
  menosTresE.classList.toggle('ocultar')
  servicioTresE.classList.toggle('ocultar')
  window.location.href = '#botontrese';
  tamanoTres.classList.toggle('ancho')

}
botonTresE.addEventListener('click',toggleTextTres)


let botonCuatroE = document.getElementById('botoncuatroe');
let masCuatroE = document.getElementById('mascuatroe');
let menosCuatroE = document.getElementById('menoscuatroe');
let servicioCuatroE = document.getElementById('serviciocuatroe');
let tamanoCuatro = document.getElementById('conbotcuatro')
function toggleTextCuatro() {
  masCuatroE.classList.toggle('ocultar')
  menosCuatroE.classList.toggle('ocultar')
  servicioCuatroE.classList.toggle('ocultar')
  window.location.href = '#botoncuatroe';
  tamanoCuatro.classList.toggle('ancho')

}
botonCuatroE.addEventListener('click',toggleTextCuatro)


let botonCincoE = document.getElementById('botoncincoe');
let masCincoE = document.getElementById('mascincoe');
let menosCincoE = document.getElementById('menoscincoe');
let servicioCincoE = document.getElementById('serviciocincoe');
let tamanoCinco = document.getElementById('conbotcinco')
function toggleTextCinco() {
  masCincoE.classList.toggle('ocultar')
  menosCincoE.classList.toggle('ocultar')
  servicioCincoE.classList.toggle('ocultar')
  window.location.href = '#botoncincoe';
  tamanoCinco.classList.toggle('ancho')

}
botonCincoE.addEventListener('click',toggleTextCinco)


let botonSeisE = document.getElementById('botonseise');
let masSeisE = document.getElementById('masseise');
let menosSeisE = document.getElementById('menosseise');
let servicioSeisE = document.getElementById('servicioseise');
let tamanoSeis = document.getElementById('conbotseis')
function toggleTextSeis() {
  masSeisE.classList.toggle('ocultar')
  menosSeisE.classList.toggle('ocultar')
  servicioSeisE.classList.toggle('ocultar')
  window.location.href = '#botonseise';
  tamanoSeis.classList.toggle('ancho')

}
botonSeisE.addEventListener('click',toggleTextSeis)


let botonSieteE = document.getElementById('botonsietee');
let masSieteE = document.getElementById('massietee');
let menosSieteE = document.getElementById('menossietee');
let servicioSieteE = document.getElementById('serviciosietee');
let tamanoSiete = document.getElementById('conbotsiete')
function toggleTextSiete() {
  masSieteE.classList.toggle('ocultar')
  menosSieteE.classList.toggle('ocultar')
  servicioSieteE.classList.toggle('ocultar')
  window.location.href = '#botonsietee';
  tamanoSiete.classList.toggle('ancho')

}
botonSieteE.addEventListener('click',toggleTextSiete)



//para conectar servicios con index
//personas
var activarLeerMasUnoP = localStorage.getItem('activarLeerMasUnoP');
    if (activarLeerMasUnoP === 'true') {
      let botonUnoP = document.getElementById('botonunop');
      if (botonUnoP) {
        botonUnoP.click();
      }
      localStorage.removeItem('activarLeerMasUnoP');
    }





    var activarLeerMasDosP = localStorage.getItem('activarLeerMasDosP');
    if (activarLeerMasDosP === 'true') {
      let botonDosP = document.getElementById('botondosp');
      if (botonDosP) {
        botonDosP.click();
      }
      localStorage.removeItem('activarLeerMasDosP');
    }



    
    var activarLeerMasTresP = localStorage.getItem('activarLeerMasTresP');
    if (activarLeerMasTresP === 'true') {
      let botonTresP = document.getElementById('botontresp');
      if (botonTresP) {
        botonTresP.click();
      }
      localStorage.removeItem('activarLeerMasTresP');
    }


//empresas

    var activarLeerMasUnoE = localStorage.getItem('activarLeerMasUnoE');
    if (activarLeerMasUnoE === 'true') {
      let botonUnoE = document.getElementById('botonunoe');
      if (botonUnoE) {
        botonUnoE.click();
      }
      localStorage.removeItem('activarLeerMasUnoE');
    }




    var activarLeerMasDosE = localStorage.getItem('activarLeerMasDosE');
    if (activarLeerMasDosE === 'true') {
      let botonDosE = document.getElementById('botondose');
      if (botonDosE) {
        botonDosE.click();
      }
      localStorage.removeItem('activarLeerMasDosE');
    }



    
    var activarLeerMasTresE = localStorage.getItem('activarLeerMasTresE');
    if (activarLeerMasTresE === 'true') {
      let botonTresE = document.getElementById('botontrese');
      if (botonTresE) {
        botonTresE.click();
      }
      localStorage.removeItem('activarLeerMasTresE');
    }



    
    var activarLeerMasCuatroE = localStorage.getItem('activarLeerMasCuatroE');
    if (activarLeerMasCuatroE === 'true') {
      let botonCuatroE = document.getElementById('botoncuatroe');
      if (botonCuatroE) {
        botonCuatroE.click();
      }
      localStorage.removeItem('activarLeerMasCuatroE');
    }



    
    var activarLeerMasCincoE = localStorage.getItem('activarLeerMasCincoE');
    if (activarLeerMasCincoE === 'true') {
      let botonCincoE = document.getElementById('botoncincoe');
      if (botonCincoE) {
        botonCincoE.click();
      }
      localStorage.removeItem('activarLeerMasCincoE');
    }



    
    var activarLeerMasSeisE = localStorage.getItem('activarLeerMasSeisE');
    if (activarLeerMasSeisE === 'true') {
      let botonSeisE = document.getElementById('botonseise');
      if (botonSeisE) {
        botonSeisE.click();
      }
      localStorage.removeItem('activarLeerMasSeisE');
    }



    
    var activarLeerMasSieteE = localStorage.getItem('activarLeerMasSieteE');
    if (activarLeerMasSieteE === 'true') {
      let botonSieteE = document.getElementById('botonsietee');
      if (botonSieteE) {
        botonSieteE.click();
      }
      localStorage.removeItem('activarLeerMasSieteE');
    }
