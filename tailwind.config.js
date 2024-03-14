/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "5px 108px 59px 70px rgba(60,150,72,1)",
            },
        },
    },
    plugins: [],
};
