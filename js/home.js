import {
    getSiteSettings
} from "./site-data.js";


async function loadHomepage() {

    const settings =
        await getSiteSettings();


    if (!settings) {
        return;
    }


    const tagline =
        document.getElementById(
            "companyTagline"
        );


    if (tagline) {

        tagline.textContent =
            settings.tagline;

    }

}


loadHomepage();