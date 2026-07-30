/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — "Zam-Zam morning classroom" palette: bright,
        // clean, trustworthy (parents/teachers), with a water-drop motif
        // (Zam-Zam = pure spring water) and warm sunny accents for kids.
        aqua: {
          DEFAULT: "#0EA5B7",
          deep: "#0A7F8F",
          light: "#5FD4E3",
          pale: "#E3F9FB",
        },
        sun: {
          DEFAULT: "#FFB020",
          deep: "#F2942E",
        },
        coral: {
          DEFAULT: "#FF6F59",
          deep: "#E85A45",
        },
        ink: {
          DEFAULT: "#1E293B",
          soft: "#475569",
          faint: "#94A3B8",
        },
        cream: "#F5FBFB",
        leaf: {
          DEFAULT: "#3FBF7F",
          deep: "#2FA168",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(180deg, #E3F9FB 0%, #F5FBFB 55%, #FFFFFF 100%)",
        "aqua-gradient": "linear-gradient(135deg, #5FD4E3 0%, #0EA5B7 100%)",
        "sun-gradient": "linear-gradient(135deg, #FFC94D 0%, #FFB020 100%)",
        "coral-gradient": "linear-gradient(135deg, #FF8A73 0%, #FF6F59 100%)",
        "card-sheen": "linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(14,165,183,0.15)",
        card: "0 16px 40px rgba(30,41,59,0.10)",
        sunGlow: "0 0 24px rgba(255,176,32,0.45)",
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.92)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "correct-pulse": {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.05)", boxShadow: "0 0 0 8px rgba(63,191,127,0.25)" },
          "100%": { transform: "scale(1)" },
        },
        "wrong-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(-6px)" },
          "80%": { transform: "translateX(6px)" },
        },
        "bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "drop-rise": {
          "0%": { transform: "translateY(0)", opacity: "0.5" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.35s ease-out",
        "correct-pulse": "correct-pulse 0.5s ease-out",
        "wrong-shake": "wrong-shake 0.45s ease-in-out",
        "bob": "bob 3s ease-in-out infinite",
        "drop-rise": "drop-rise 8s linear infinite",
      },
    },
  },
  plugins: [],
};
