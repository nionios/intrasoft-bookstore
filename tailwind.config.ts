import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'kariera-lightblue': {
                    light: "#FBFAFF",
                    DEFAULT: "#FBFAFF",
                    dark: "#585275"
                },
                'kariera-darkblue': {
                    light: "#FFFFFF",
                    DEFAULT: "#FFFFFF",
                    dark: "#282f54"
                },
                'kariera-white': {
                    light: "#FFFFFF",
                    DEFAULT: "#FFFFFF",
                    dark: "#333852"
                },
                'kariera-gray': {
                    light: "#3E4B5E",
                    DEFAULT: "#3E4B5E",
                    dark: "#91aed9"
                },
                'kariera-lightgray': {
                    light: "#F0EDFF",
                    DEFAULT: "#F0EDFF",
                    dark: "#535357"
                },
                'kariera-accent': {
                    light: "#FBFAFF",
                    DEFAULT: "#FBFAFF",
                    dark: "#585275"
                },
            },
            animation: {
                fade: 'fade 500ms ease-in-out',
            },
            keyframes: theme => ({
                fade: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
export default config;
