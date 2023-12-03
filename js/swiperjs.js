var swiper = new Swiper(".bannerswiper", {
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    simulateTouch: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    loop: true,
});