/* =========================================
   MILLY SWEET AND FRESH
   JAVASCRIPT
========================================= */


/* =========================================
   MENÚ MÓVIL
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Cerrar menú al seleccionar una opción */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const elementsToAnimate = document.querySelectorAll(
    ".product-card, .about-text, .about-image, .gallery-grid img, .section-header"
);


/* Preparar elementos */

elementsToAnimate.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* Observer */

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


/* Activar observer */

elementsToAnimate.forEach(element => {

    observer.observe(element);

});


/* =========================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================= */

const footerYear = document.querySelector(".footer-info p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Milly Sweet and Fresh`;

}


/* =========================================
   EFECTO EN EL HEADER AL HACER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(70, 35, 80, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   BOTÓN DE PEDIDO
========================================= */

const orderButtons = document.querySelectorAll(
    'a[href="#contacto"]'
);

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log(
            "El cliente está interesado en hacer un pedido."
        );

    });

});


/* =========================================
   MENSAJE DE BIENVENIDA EN CONSOLA
========================================= */

console.log(
    "🍓 Bienvenido a Milly Sweet and Fresh 💜"
);
