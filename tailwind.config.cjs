/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "footer-green": "#91D3C5",
            "graphic-design-text": "#25564b",
            "photography-text": "#19536b",
            "footer-text": "#458c7e",
            "white-main": "#FFFBF8",
            'test-color': "#24303B",
            'underline-yellow': "#fad400",
            'underline-red': "#fe7867",
            'second-text': "#5a636c",
            'gray-main': "#a7abae"
        },
        fontFamily: {
            'first-font': 'Barlow, sans-serif',
            'second-font': 'Fraunces, serif'
        },
        extend: {
            backgroundImage: {
                'main': "url('images/mobile/image-header.jpg')",
                'main-desktop': "url('images/desktop/image-header.jpg')",
                'photography': "url('./images/mobile/image-photography.jpg')"
            }
        },
    },
    plugins: [],
}