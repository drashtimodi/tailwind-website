/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            colors: {
                "color-primary": "#ddc7c7",
                "color-primary-light": "#f3dbdb",
                "color-primary-dark": "#ece9e9",
                "color-secondary": "#FF7d3b",
                "color-gray": "#333",
                "color-blob": "#A427DF",
                "color-navbar": "#e9b1b1",
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                md: "50px"
            }
        }
    },
    plugins: [],
}