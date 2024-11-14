import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/flowbite/**/*.js",
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'p1': "url('/resources/js/Assets/p/p1.jpg')",
                'p2': "url('/resources/js/Assets/p/p2.jpg')",
                'p3': "url('/resources/js/Assets/p/p3.jpg')",
                'p4': "url('/resources/js/Assets/p/p4.jpg')",
                'p5': "url('/resources/js/Assets/p/p5.jpg')",
                'p6': "url('/resources/js/Assets/p/p6.jpg')",
                'p7': "url('/resources/js/Assets/p/p7.jpg')",
                'p8': "url('/resources/js/Assets/p/p8.jpg')",
                'p9': "url('/resources/js/Assets/p/p9.jpg')",
            },
            plugins: [
                require('flowbite/plugin'),
                flowbite.plugin(),
             ],
        },
    },

    plugins: [forms],
};
