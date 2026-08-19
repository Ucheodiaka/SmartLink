import {
    supabase
} from "./supabase.js";


export async function getSiteSettings() {

    const {
        data,
        error
    } = await supabase
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();


    if (error) {

        console.error(
            "Error loading SmartLink settings:",
            error
        );

        return null;
    }


    return data;
}