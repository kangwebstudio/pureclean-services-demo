/* ==================================================
   PURECLEAN SERVICES
   JAVASCRIPT
================================================== */


/* ==================================================
   MOBILE MENU
================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close menu" : "Open menu"
    );

});


/* ==================================================
   CLOSE MENU AFTER CLICKING A LINK
================================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


/* ==================================================
   ACTIVE NAVIGATION LINK
================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);

updateActiveLink();


/* ==================================================
   QUOTE FORM
================================================== */

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const serviceSelect =
        document.querySelector("#service");

    const service =
        serviceSelect.value;

    const serviceName =
        serviceSelect.options[
            serviceSelect.selectedIndex
        ].text;

    const message =
        document.querySelector("#message").value.trim();


    /* ----------------------------------------------
       VALIDATION
    ---------------------------------------------- */

    if (!name) {

        alert("Please enter your name.");

        return;

    }

    if (!phone) {

        alert("Please enter your phone number.");

        return;

    }

    if (!service) {

        alert("Please select a service.");

        return;

    }


    /* ----------------------------------------------
       CREATE WHATSAPP MESSAGE
    ---------------------------------------------- */

    let whatsappMessage =
        `Hello PureClean Services!\n\n` +
        `I'd like to request a quote.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${serviceName}`;

    if (message) {

        whatsappMessage +=
            `\n\nDetails:\n${message}`;

    }


    /* ----------------------------------------------
       WHATSAPP NUMBER
    ---------------------------------------------- */

    const whatsappNumber =
        "27000000000";


    /* ----------------------------------------------
       OPEN WHATSAPP
    ---------------------------------------------- */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}` +
        `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
        whatsappURL,
        "_blank"
    );


    /* ----------------------------------------------
       RESET FORM
    ---------------------------------------------- */

    contactForm.reset();

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(
    ".service-card, " +
    ".feature, " +
    ".gallery-item, " +
    ".about-content, " +
    ".about-image, " +
    ".contact-content, " +
    ".contact-form"
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ==================================================
   FOOTER YEAR
================================================== */

const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.textContent =
        `© ${year} PureClean Services. ` +
        `All rights reserved.`;

                  }
