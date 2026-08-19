import { createRequire } from "module";
const require = createRequire(import.meta.url);

import forms from "@tailwindcss/forms";
import { createThemes } from "tw-colors";
const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./resources/js/**/*.ts",
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1224px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "0px",
            },
        },
        fontFamily: {
            siyamrupali: ["Siyam Rupali", "Shurjo Unicode", "sans-serif"],
            shurjo: ["Shurjo Unicode", "Siyam Rupali", "sans-serif"],
            roboto: ["Roboto"],
            lato: ["Lato"],
            sora: ["Sora"],
            poppins: ["Poppins"],
            raleway: ["Raleway"],
            oswlad: ["Oswald"],
            anton: ["Anton"],
            archivo: ["Archivo"],
            epilogue: ["Epilogue"],
            san: ["Montserrat Alternates", "Encode Sans", "Work Sans"],
            tiro_bangla: "Tiro Bangla",
            serif: [
                "Lora",
                "Andada Pro",
                "Hahmlet",
                "Cormorant",
                "Old Standard TT",
                "Playfair Display",
                "Anton",
                "Archivo",
            ],
            monospace: ["JetBrains Mono", "Source Code Pro"],
            bangla_uni: ["Noto Serif Bengali", "Baloo Da 2"],
            galada: ["Galada"],
            mrs_saint_delafield: ["Mrs Saint Delafield"],
            amita: ["Amita"],
            cookie: ["Cookie"],
            rock_salt: ["Rock Salt"],
            sacramento: ["Sacramento"],
            hurricane: ["Hurricane"],
            stalemate: ["Stalemate"],
            ms_madi: ["Ms Madi"],
            kolker: ["Kolker Brush"],
        },
    },
    plugins: [
        forms,
        typography,
        createThemes(
            {
                light: {
                    // ─────────────────────────────────────
                    // PRIMARY — Federation Green
                    // ─────────────────────────────────────
                    primary: "#146B3A",
                    onPrimary: "#FFFFFF",

                    primaryVariant: "#0D4F2A",
                    onPrimaryVariant: "#FFFFFF",

                    // ─────────────────────────────────────
                    // SECONDARY — Ochre / Earth
                    // ─────────────────────────────────────
                    secondary: "#C58A2B",
                    onSecondary: "#FFFFFF",

                    secondaryVariant: "#8F641E",
                    onSecondaryVariant: "#FFFFFF",

                    // ─────────────────────────────────────
                    // BACKGROUND
                    // ─────────────────────────────────────
                    background: "#F4F7F2",
                    onBackground: "#243129",

                    // ─────────────────────────────────────
                    // SURFACE
                    // ─────────────────────────────────────
                    surface: "#FFFFFF",
                    onSurface: "#243129",

                    // ─────────────────────────────────────
                    // ERROR
                    // ─────────────────────────────────────
                    error: "#B42318",
                    onError: "#FFFFFF",

                    // ─────────────────────────────────────
                    // BRAND
                    // ─────────────────────────────────────
                    brand: "#0F6B3C",
                    onBrand: "#FFFFFF",

                    // ─────────────────────────────────────
                    // DISABLED
                    // ─────────────────────────────────────
                    disabled: "#9AA69E",
                    onDisabled: "#6B746E",

                    // ─────────────────────────────────────
                    // BORDER
                    // ─────────────────────────────────────
                    borderColor: "#DCE5DE",
                },

                // ═════════════════════════════════════════
                // DARK THEME
                // ═════════════════════════════════════════
                dark: {
                    // ─────────────────────────────────────
                    // PRIMARY — Bright Federation Green
                    // ─────────────────────────────────────
                    primary: "#3FAF6B",
                    onPrimary: "#07140C",

                    primaryVariant: "#24894D",
                    onPrimaryVariant: "#FFFFFF",

                    // ─────────────────────────────────────
                    // SECONDARY — Ochre
                    // ─────────────────────────────────────
                    secondary: "#D4A343",
                    onSecondary: "#111711",

                    secondaryVariant: "#9D752B",
                    onSecondaryVariant: "#FFFFFF",

                    // ─────────────────────────────────────
                    // BACKGROUND
                    // ─────────────────────────────────────
                    background: "#101A14",
                    onBackground: "#DCE7DF",

                    // ─────────────────────────────────────
                    // SURFACE
                    // ─────────────────────────────────────
                    surface: "#18241C",
                    onSurface: "#E3ECE5",

                    // ─────────────────────────────────────
                    // ERROR
                    // ─────────────────────────────────────
                    error: "#F04438",
                    onError: "#FFFFFF",

                    // ─────────────────────────────────────
                    // BRAND
                    // ─────────────────────────────────────
                    brand: "#3FAF6B",
                    onBrand: "#07140C",

                    // ─────────────────────────────────────
                    // DISABLED
                    // ─────────────────────────────────────
                    disabled: "#59655D",
                    onDisabled: "#9AA69E",

                    // ─────────────────────────────────────
                    // BORDER
                    // ─────────────────────────────────────
                    borderColor: "#304037",
                },

                // ═════════════════════════════════════════
                // HALLOWEEN / SPECIAL THEME
                // ═════════════════════════════════════════
                halloween: {
                    primary: "#3FAF6B",
                    onPrimary: "#07140C",

                    primaryVariant: "#24894D",
                    onPrimaryVariant: "#FFFFFF",

                    secondary: "#D4A343",
                    onSecondary: "#111711",

                    secondaryVariant: "#9D752B",
                    onSecondaryVariant: "#FFFFFF",

                    background: "#101A14",
                    onBackground: "#DCE7DF",

                    surface: "#18241C",
                    onSurface: "#E3ECE5",

                    error: "#F04438",
                    onError: "#FFFFFF",

                    brand: "#3FAF6B",
                    onBrand: "#07140C",

                    disabled: "#59655D",
                    onDisabled: "#9AA69E",

                    borderColor: "#304037",
                },
            },
            {
                defaultTheme: "light",
            },
        ),
    ],
};
