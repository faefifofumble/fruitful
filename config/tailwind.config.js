/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {

    // add daisyUI plugin
    plugins: [require("daisyui")],

    content: [],
    theme: ["light", "dark"],
      extend: {},

    // daisyUI config (optional)
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",

    },

  }
