/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#15201a",
          "200": "#1b1b1b",
          "300": "#161616",
          "400": "#121212",
          "500": "rgba(0, 0, 0, 0.44)",
          "600": "rgba(255, 255, 255, 0.08)",
          "700": "rgba(0, 0, 0, 0.6)",
          "800": "rgba(255, 255, 255, 0.2)",
          "900": "rgba(255, 255, 255, 0.15)",
          "1000": "rgba(255, 255, 255, 0.4)",
          "1100": "rgba(255, 255, 255, 0.8)",
          "1200": "rgba(255, 255, 255, 0.04)",
          "1300": "rgba(255, 255, 255, 0.7)",
        },
        darkslategray: "#3d3d3d",
        white: "#fff",
        springgreen: "#36fa74",
      },
      spacing: {},
      fontFamily: {
        lexend: "Lexend",
        "bebas-neue": "'Bebas Neue'",
        poppins: "Poppins",
      },
      borderRadius: {
        "13xl": "32px",
        "980xl": "999px",
      },
    },
    fontSize: {
      "lg-3": "18.3px",
      "base-6": "16.6px",
      "base-9": "15.9px",
      "base-5": "16.5px",
      "lg-8": "18.8px",
      "61xl": "80px",
      "21xl": "40px",
      "5xl": "24px",
      lg: "18px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "39xl": "58px",
      "27xl": "46px",
      "16xl": "35px",
      lgi: "19px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
