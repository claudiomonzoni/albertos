//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#nav");
    // const anchor = document.querySelector(".anchor");
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    }

    menuIco.addEventListener("click", abrirMenuFull);
    //anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

//importo el carrusel
// import {slideIndex} from './glide'
// slideIndex()

// importo gsap
// import gsap from 'gsap'
// gsap.from(".logo, #nav>ul>li",
// {
//   stagger:0.1,
//   x:400,
//   opacity: 0,
//   duration: 1 //1 segundo
// })

const WOW = require("wowjs");

window.wow = new WOW.WOW({
  live: false,
});
window.wow.init();

// import { CLIENT_RENEG_WINDOW } from 'node:tls';
// cargar modulos solo por secciones
// switch (document.location.pathname)
// {
//   case '/seccion':
//   break

//   default:
// }
const divmapa = document.getElementById("mapa");
import { Mapa } from "./leaflet";
if (divmapa) {
  const mapa = new Mapa();
  document.addEventListener("DOMContentLoaded", () => {
    mapa.obtenerDatos();
  });
}


// seccion de joyas
const divAnillos = document.getElementById("anillos");
import {logicaJoya} from './joyas'
if(divAnillos){
logicaJoya()
}

