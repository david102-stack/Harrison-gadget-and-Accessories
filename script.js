/* =========================================
   HARRISON GADGETS & ACCESSORIES
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(
        ".category-card, .product-card, .service-card, " +
        ".testimonial-card, .section-heading, .cta-content, " +
        ".hero-content"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* ================================
       MOBILE MENU
    ================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        const navLinks = navigation.querySelectorAll("a");

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });

    }


    /* ================================
       SMOOTH PAGE SCROLLING
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ================================
       SCROLL-TO-TOP BUTTON
    ================================= */

    const scrollTopButton = document.querySelector(".scroll-top");

    if (scrollTopButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                scrollTopButton.classList.add("show");
            } else {
                scrollTopButton.classList.remove("show");
            }

        });

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================================
       ACTIVE NAVIGATION
    ================================= */

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {

        const linkPage = link
            .getAttribute("href")
            ?.split("/")
            .pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });


    /* ================================
       CARD HOVER EFFECT
    ================================= */

    const cards = document.querySelectorAll(
        ".category-card, .product-card, .service-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("card-hover");
        });

    });


    /* ================================
       YEAR IN FOOTER
    ================================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ================================
       PAGE LOADED
    ================================= */

    document.body.classList.add("page-loaded");

});