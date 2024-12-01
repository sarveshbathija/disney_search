/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "disney-blue": "#054553",
                "light-blue": "#F1F2F3",
                secondary: "#5B6873",
                "border-secondary": "#C2CCDA",
            },
            fontSize: {
                11: "11px",
                15: "15px",
            },
            textColor: {
                primary: "#222222",
            },
        },
    },
    plugins: [],
};
