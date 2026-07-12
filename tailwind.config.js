/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0053c0",
          dark: "#00429c",
          light: "#e7f2ff",
        },
        cobalt: "#0053c0",
        azure: "#4294ff",
        sky: "#e7f2ff",
        ink: {
          95: "#131313",
          80: "#26292e",
          65: "#3a3d43",
          900: "#131313",
          800: "#1c1c1c",
          700: "#262626",
          600: "#333333",
        },
        muted: {
          DEFAULT: "#5c6169",
          2: "#8a8a8a",
        },
        page: "#f4f6f9",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 2px 6px rgba(0,0,0,.08)",
        elevated: "0 10px 30px rgba(0,0,0,.12)",
        header: "0 2px 8px rgba(0,0,0,.06)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        growX: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.16", transform: "scale(1)" },
          "50%": { opacity: "0.28", transform: "scale(1.08)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp .5s cubic-bezier(.16,1,.3,1) both",
        "grow-x": "growX .9s cubic-bezier(.16,1,.3,1) both",
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
