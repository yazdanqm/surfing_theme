// icons
import './assets/styles/style.css';

// swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
//AOS
import AOS from "aos"


// page load listener
document.addEventListener("DOMContentLoaded" , () => {

    AOS.init({
        disable: 'mobile',
        once: true

    });
})

// top slider configuration
const swiper = new Swiper('.top-slider', {
    spaceBetween: '100px',

    pagination: {
        el: '.pagination-nums',
        type: "fraction",
    },

    navigation: {
        nextEl: '.next-top-slide',
        prevEl: '.prev-top-slide',
    },
});

// surfboards slider configuration
const surfboardsSwiper = new Swiper('.surfboards-slider', {
    slidesPerView: 1,

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        },
    },

    pagination: {
        el: '.pagination-nums',
        type: "fraction",
    },

    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },
});

// video player
let video = document.getElementById("video")
let videoOverlay = document.getElementById("videoOverlay")
let playVideo = document.getElementById("playVideo")
let pauseVideo = document.getElementById("pauseVideo")
let pulse = document.getElementById("pulse")
let replay = document.getElementById("replay")


if (playVideo) {
    playVideo.addEventListener("click", () => {
        video.play()
        playVideo.classList.add("hidden")
        pauseVideo.classList.remove("hidden")
        pulse.classList.add("hidden")
    })
}

if (pauseVideo) {
    pauseVideo.addEventListener("click", () => {
        video.pause();
        playVideo.classList.remove("hidden")
        pauseVideo.classList.add("hidden")
        pulse.classList.remove("hidden")
    })
}

if (video) {
    video.addEventListener("ended", () => {
        if (!playVideo.classList.contains("hidden")) {
            playVideo.classList.add("hidden")
        }
        if (!pauseVideo.classList.contains("hidden")) {
            pauseVideo.classList.add("hidden")
        }
        replay.classList.remove("hidden")
    })
}

if (replay) {
    replay.addEventListener("click", () => {
        video.play()
        replay.classList.add("hidden")
        pauseVideo.classList.remove("hidden")
    })
}

// navbar
let navbar = document.getElementById("navbar")
let overlay = document.getElementById("overlay")
let openMenu = document.getElementById("openMenu")

if (openMenu) {
    openMenu.addEventListener("click", () => {
        navbar.classList.add("active-navbar")
        overlay.classList.remove("hidden")
    })
}

if (overlay) {
    overlay.addEventListener("click", () => {
        navbar.classList.remove("active-navbar")
        overlay.classList.add("hidden")
    })
}