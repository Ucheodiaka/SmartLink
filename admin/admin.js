/* =========================================
   SMARTLINK ADMIN
========================================= */


import {
    supabase
} from "../js/supabase.js";

/* =========================================
   PROTECT ADMIN PAGE
========================================= */

async function protectAdminPage() {

    const {
        data,
        error
    } = await supabase.auth.getSession();


    if (
        error ||
        !data.session
    ) {

        window.location.href =
            "login.html";

        return false;

    }


    return true;

}


/* =========================================
   ELEMENTS
========================================= */

const companyNameInput =
    document.getElementById(
        "companyName"
    );


const taglineInput =
    document.getElementById(
        "tagline"
    );


const saveButton =
    document.getElementById(
        "saveButton"
    );


const message =
    document.getElementById(
        "message"
    );



/* =========================================
   LOAD EXISTING SETTINGS
========================================= */

async function loadSettings() {

    const {
        data,
        error
    } = await supabase
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();


    if (error) {

        console.error(error);

        message.textContent =
            "Unable to load settings.";

        return;

    }


    companyNameInput.value =
        data.company_name || "";


    taglineInput.value =
        data.tagline || "";

}



/* =========================================
   SAVE TAGLINE
========================================= */

async function saveSettings() {

    const newTagline =
        taglineInput.value.trim();


    if (!newTagline) {

        message.textContent =
            "Please enter a tagline.";

        return;

    }


    message.textContent =
        "Saving...";


    const {
        error
    } = await supabase
        .from("site_settings")
        .update({

            tagline: newTagline

        })
        .eq("id", 1);


    if (error) {

        console.error(error);

        message.textContent =
            "The change could not be saved.";

        return;

    }


    message.textContent =
        "Changes saved successfully.";

}



/* =========================================
   SAVE BUTTON
========================================= */

saveButton.addEventListener(
    "click",
    saveSettings
);



/* =========================================
   START
========================================= */

async function initialiseAdmin() {

    const allowed =
        await protectAdminPage();


    if (!allowed) {
        return;
    }


    loadSettings();

}


initialiseAdmin();

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async () => {

            await supabase.auth.signOut();


            window.location.href =
                "login.html";

        }
    );

}