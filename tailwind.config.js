module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            boxShadow: {
                DEFAULT: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
            },
            animation: {
                text: 'text 5s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}