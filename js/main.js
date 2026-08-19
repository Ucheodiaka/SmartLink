/* =========================================================
   SMARTLINK LIMITED
   Global JavaScript
   File: js/main.js
========================================================= */


/* =========================================================
   1. COMPANY SETTINGS
========================================================= */

/*
    Replace the number below with the actual
    SmartLink WhatsApp number.

    IMPORTANT:

    Use:
    2348012345678

    Do NOT use:
    +234 801 234 5678
*/


const smartLinkWhatsAppNumber = "234XXXXXXXXXX";


/*
    This is the warm message visitors will see
    when WhatsApp opens.
*/

const smartLinkWhatsAppMessage = `
Hello SmartLink,

I came across your website and would like to discuss how SmartLink can help improve the way my organisation works.

I’m interested in exploring better systems, processes or technology for my business.

Thank you.
`.trim();



/* =========================================================
   2. CREATE GLOBAL FLOATING ACTIONS
========================================================= */

function createFloatingActions() {

    const floatingContainer =
        document.createElement("div");


    floatingContainer.className =
        "floating-actions";


    /* =============================
       WHATSAPP BUTTON
    ============================== */

    const whatsappButton =
        document.createElement("a");


    const encodedMessage =
        encodeURIComponent(
            smartLinkWhatsAppMessage
        );


    whatsappButton.href =
        `https://wa.me/${smartLinkWhatsAppNumber}?text=${encodedMessage}`;


    whatsappButton.target =
        "_blank";


    whatsappButton.rel =
        "noopener noreferrer";


    whatsappButton.className =
        "floating-action whatsapp-button";


    whatsappButton.setAttribute(
        "aria-label",
        "Chat with SmartLink on WhatsApp"
    );


    whatsappButton.setAttribute(
        "title",
        "Chat with SmartLink"
    );


    whatsappButton.innerHTML = `

        <span class="whatsapp-icon">

            <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
            >

                <path
                    fill="currentColor"
                    d="
                    M16.04 3
                    C8.85 3 3 8.69 3 15.69
                    c0 2.76.94 5.45 2.65 7.62
                    L3.9 29l5.89-1.72
                    a13.2 13.2 0 0 0 6.24 1.57
                    h.01
                    C23.23 28.85 29 23.16 29 16.16
                    C29 9.16 23.23 3 16.04 3
                    z

                    M16.04 26.64
                    c-1.93 0-3.82-.52-5.47-1.49
                    l-.39-.23-3.5 1.02
                    1.05-3.35-.25-.4
                    a10.45 10.45 0 0 1-1.68-5.68
                    c0-5.78 4.67-10.49 10.42-10.49
                    5.75 0 10.42 4.71 10.42 10.49
                    0 5.78-4.67 10.13-10.6 10.13
                    z
                    "
                />

            </svg>

        </span>


        <span class="whatsapp-text">

            <small>
                Need help?
            </small>

            <strong>
                Chat with SmartLink
            </strong>

        </span>

    `;



    /* =============================
       SCROLL TO TOP BUTTON
    ============================== */

    const scrollTopButton =
        document.createElement("button");


    scrollTopButton.type =
        "button";


    scrollTopButton.id =
        "scrollToTop";


    scrollTopButton.className =
        "floating-action scroll-top-button";


    scrollTopButton.setAttribute(
        "aria-label",
        "Back to top"
    );


    scrollTopButton.setAttribute(
        "title",
        "Back to top"
    );


    scrollTopButton.innerHTML = `

        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >

            <path
                d="M12 19V5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            />


            <path
                d="M5 12L12 5L19 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

        </svg>

    `;



    /* =============================
       ADD BUTTONS TO CONTAINER
    ============================== */

    floatingContainer.appendChild(
        whatsappButton
    );


    floatingContainer.appendChild(
        scrollTopButton
    );


    /* =============================
       ADD TO WEBSITE
    ============================== */

    document.body.appendChild(
        floatingContainer
    );



    /* =============================
       ACTIVATE SCROLL TO TOP
    ============================== */

    initialiseScrollToTop(
        scrollTopButton
    );

}



/* =========================================================
   3. SCROLL TO TOP
========================================================= */

function initialiseScrollToTop(button) {

    /*
        Show the button after the visitor
        scrolls 500 pixels.
    */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                button.classList.add(
                    "show"
                );

            }

            else {

                button.classList.remove(
                    "show"
                );

            }

        },
        {
            passive: true
        }
    );


    /*
        When clicked, smoothly return
        to the top.
    */

    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =========================================================
   4. MOBILE MENU
========================================================= */

function initialiseMobileNavigation() {

    const menuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const navigation =
        document.getElementById(
            "mainNavigation"
        );


    if (
        !menuButton ||
        !navigation
    ) {

        return;

    }


    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "nav-open"
            );


            const isOpen =
                navigation.classList.contains(
                    "nav-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}



/* =========================================================
   5. CURRENT YEAR
========================================================= */

function initialiseCurrentYear() {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}



/* =========================================================
   6. INITIALISE GLOBAL FEATURES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createFloatingActions();

        initialiseMobileNavigation();

        initialiseCurrentYear();

    }
);