var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

    
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

    
});

var swiper = new Swiper(".mySwiper-3", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

    
});

//Catalogo

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


//Carito
const carrito = document.getElementById('carrito');
const elemetos1 = document.getElementById('lista-1');
const elemetos2 = document.getElementById('lista-2');
const elemetos3 = document.getElementById('lista-3');
const elemetos4 = document.getElementById('lista-4');
const elemetos5 = document.getElementById('lista-5');
const elemetos6 = document.getElementById('lista-6');
const elemetos7 = document.getElementById('lista-7');
const elemetos8 = document.getElementById('lista-8');
const elemetos9 = document.getElementById('lista-9');
const elemetos10 = document.getElementById('lista-10');
const elemetos11 = document.getElementById('lista-11');
const elemetos12 = document.getElementById('lista-12');
const elemetos13 = document.getElementById('lista-13');
const elemetos14 = document.getElementById('lista-14');
const elemetos15 = document.getElementById('lista-15');
const elemetos16 = document.getElementById('lista-16');
const elemetos17 = document.getElementById('lista-17');
const elemetos18 = document.getElementById('lista-18');
const elemetos19 = document.getElementById('lista-19');
const lista= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('Vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){

  elemetos1.addEventListener('click',comprarElemento);
  elemetos2.addEventListener('click',comprarElemento);
  elemetos3.addEventListener('click',comprarElemento);
  elemetos4.addEventListener('click',comprarElemento);
  elemetos5.addEventListener('click',comprarElemento);
  elemetos6.addEventListener('click',comprarElemento);
  elemetos7.addEventListener('click',comprarElemento);
  elemetos8.addEventListener('click',comprarElemento);
  elemetos9.addEventListener('click',comprarElemento);
  elemetos10.addEventListener('click',comprarElemento);
  elemetos11.addEventListener('click',comprarElemento);
  elemetos12.addEventListener('click',comprarElemento);
  elemetos13.addEventListener('click',comprarElemento);
  elemetos14.addEventListener('click',comprarElemento);
  elemetos15.addEventListener('click',comprarElemento);
  elemetos16.addEventListener('click',comprarElemento);
  elemetos17.addEventListener('click',comprarElemento);
  elemetos18.addEventListener('click',comprarElemento);
  elemetos19.addEventListener('click',comprarElemento);
  carrito.addEventListener('click',eliminarElemento);
  vaciarCarritoBtn.addEventListener('click',vaciarCarrito); 
}


function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}


function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML =`
     
      <td>
           ${elemento.titulo} 
      </td>
     
      <td>
            ${elemento.precio} 
      </td>
     
      <td>
            <a href="#"  class="borrar" data-id="${elemento.id}">X</a>
      </td>
    `;

    lista.appendChild(row)
}



function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
 
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}







