/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#10b981",
          "secondary": "#0284c7",
          "accent": "#12181B",
          "neutral": "#faf9fb", 
          "base-100": "#f2f2f3",
          "base-200": "#e7e5e4",
          "base-300": "#fafafa",
          "info": "#2563eb",
          "success": "#4ADE80",
          "warning": "#facc15",
          "error": "#e11d48",
        },
        dark: {
          "primary": "#22c55e",
          "secondary": "#2563eb",
          "accent": "#f2f2f3",
          "neutral": "#0a0a0a", 
          "base-100": "#18181b",
          "base-200": "#1f2937",
          "base-300": "#404040",
          "info": "#2775C3",
          "success": "#4ADE80",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
      },
    ],
  },
}

