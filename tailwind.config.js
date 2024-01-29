const extendedSpacing = {
    spacing: {},
};

for (let i = 1; i <= 170; i++) {
    extendedSpacing.spacing[i] = `${i * 0.25}rem`;
}

for (let i = 1; i <= 11; i++) {
    const fraction = i / 12;
    extendedSpacing.spacing[`${i}/12`] = `${fraction * 100}%`;
}
/** @type {import('tailwindcss').Config}  */
module.exports = {
    content: ["./front/*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        fontFamily: {
            Vazir: ["Vazir"],
            Yekan: ["Yekan"],
            nastaliq: ["nastaliq"],
        },
        extend: extendedSpacing,
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
};
