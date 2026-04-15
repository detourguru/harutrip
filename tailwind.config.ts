import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B705C",
          dark: "#525840",
        },
        bg: "#F0EDE8",
        surface: "#FFFFFF",
        stay: "#C4956A",
        moving: "#6B705C",
        text: {
          primary: "#33362C",
          secondary: "#8A8A8A",
        },
        border: "#E0DCD5",
      },
      borderRadius: {
        nav: "16px",
        sm: "10px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.05)",
        fab: "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
