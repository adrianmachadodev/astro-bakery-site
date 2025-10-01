import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { Pagination } from "swiper/modules";



window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // habilitamos transición
    loader.style.transition = "opacity 0.5s ease";

    // Forzamos que empiece visible
    loader.style.opacity = "1";

    // Pequeño delay para que se note el fade
    setTimeout(() => {
      loader.style.opacity = "0";

      // Esperar a que termine la transición antes de removerlo
      loader.addEventListener("transitionend", () => loader.remove());
    }, 3000); // se empieza a ocultar al instante, podés ajustar
  }
});


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop:true,

  // pagination:{
  //   el:'.swiper-pagination'
  // }
})