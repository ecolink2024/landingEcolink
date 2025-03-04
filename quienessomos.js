
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



