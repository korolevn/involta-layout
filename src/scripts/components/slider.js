import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const bullets = Array.from(
    document.querySelectorAll(
        ".swiper-pagination-hover-wrap .swiper-pagination-bullet",
    ),
);

bullets.map((bullet) =>
    bullet.addEventListener("mouseover", () => {
        bullet.click();
    }),
);
