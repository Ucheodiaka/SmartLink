import {
    supabase
} from "../js/supabase.js";


const loginForm =
    document.getElementById(
        "loginForm"
    );


const emailInput =
    document.getElementById(
        "email"
    );


const passwordInput =
    document.getElementById(
        "password"
    );


const loginButton =
    document.getElementById(
        "loginButton"
    );


const loginMessage =
    document.getElementById(
        "loginMessage"
    );



/* =========================================
   CHECK IF ALREADY LOGGED IN
========================================= */

async function checkExistingSession() {

    const {
        data
    } = await supabase.auth.getSession();


    if (data.session) {

        window.location.href =
            "index.html";

    }

}


checkExistingSession();



/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const email =
            emailInput.value.trim();


        const password =
            passwordInput.value;


        loginButton.disabled = true;

        loginButton.textContent =
            "Signing In...";


        loginMessage.textContent =
            "";


        const {
            data,
            error
        } = await supabase.auth
            .signInWithPassword({

                email: email,

                password: password

            });


        if (error) {

            console.error(error);


            loginMessage.textContent =
                "Email or password is incorrect.";


            loginButton.disabled = false;

            loginButton.textContent =
                "Sign In";


            return;

        }


        if (data.session) {

            loginMessage.textContent =
                "Login successful.";


            window.location.href =
                "index.html";

        }

    }
);