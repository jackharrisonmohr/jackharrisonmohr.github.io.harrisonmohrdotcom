import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        "muted-light": "rgb(var(--color-muted-light) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--color-text))",
            "--tw-prose-headings": "rgb(var(--color-text))",
            "--tw-prose-links": "rgb(var(--color-text))",
            "--tw-prose-code": "rgb(var(--color-text))",
            "--tw-prose-bold": "rgb(var(--color-text))",
            "--tw-prose-counters": "rgb(var(--color-muted))",
            "--tw-prose-bullets": "rgb(var(--color-muted))",
            "--tw-prose-hr": "rgb(var(--color-border))",
            "--tw-prose-quotes": "rgb(var(--color-text))",
            "--tw-prose-quote-borders": "rgb(var(--color-border))",
            "--tw-prose-th-borders": "rgb(var(--color-border))",
            "--tw-prose-td-borders": "rgb(var(--color-border))",
            maxWidth: "none",
            a: {
              textDecoration: "underline",
              textDecorationColor: "rgb(var(--color-border))",
              textUnderlineOffset: "3px",
              transition: "text-decoration-color 0.3s ease",
              "&:hover": {
                textDecorationColor: "rgb(var(--color-text))",
              },
            },
            h1: {
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: "600",
            },
            h2: {
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: "600",
            },
            h3: {
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
