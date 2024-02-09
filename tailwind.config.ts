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
                'netcompany-blue': {
                    light: "#0f2147",
                    DEFAULT: "#0f2147",
                    dark: "#0f2147"
                },
                'netcompany-lightblue': {
                    light: "#FBFAFF",
                    DEFAULT: "#FBFAFF",
                    dark: "#585275"
                },
                'netcompany-darkblue': {
                    light: "#FFFFFF",
                    DEFAULT: "#FFFFFF",
                    dark: "#282f54"
                },
                'netcompany-white': {
                    light: "#FFFFFF",
                    DEFAULT: "#FFFFFF",
                    dark: "#333852"
                },
                'netcompany-gray': {
                    light: "#3E4B5E",
                    DEFAULT: "#3E4B5E",
                    dark: "#91aed9"
                },
                'netcompany-lightgray': {
                    light: "#F0EDFF",
                    DEFAULT: "#F0EDFF",
                    dark: "#535357"
                },
                'netcompany-accent': {
                    light: "#FBFAFF",
                    DEFAULT: "#FBFAFF",
                    dark: "#0f2147"
                },
            },
            animation: {
                fade: 'fade 500ms ease-in-out',
            },
            keyframes  : {
                fade: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
export default config;
