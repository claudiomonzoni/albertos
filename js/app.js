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

// import producto from './joyas'
const detalle = document.getElementById("detalles");
const producto = document.getElementsByClassName("producto");
const productoGrid = document.getElementById("productosGrid");
const filtro = document.getElementById("filtro");

//obtengo los datos
//  import url from "../datos/rings.json"
//  console.log(url)

// const url = "https://api.npoint.io/e4f205f4adc7bb5a842a"

// import imas from '../ima/*.png';
const imas = require("../ima/*.png");
import("../datos/rings.json")
  .then((res) => {
    return res;
  })
  .then((joyas) => {
    //llamo funcion para generar los thumbs
    thumbs(joyas);
  });

const thumbs = (data) => {
  data.forEach((element) => {
    productoGrid.innerHTML += `
  <div class="producto">
   <a href="#">
   <img src="${imas[element.imagen]}" alt="${element.titulo}" />
   <span>${element.titulo}</span>
   </a>
  </div>`;
  });
};

//   <div class="producto">
//   <a href="#">
//     <img src="ima/anilloPre.png" alt="Ring 12" />
//     <span>Ring 12</span>
//   </a>
// </div>
