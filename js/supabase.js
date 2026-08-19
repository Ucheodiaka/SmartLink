import {
    createClient
} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";


const supabaseUrl =
    "https://bzyexadqnooxgmiwyywy.supabase.co";


const supabaseKey =
    "sb_publishable_JX-LYtubFydHUTh9vWivFw_kLjNqTJ0";


export const supabase =
    createClient(
        supabaseUrl,
        supabaseKey
    );