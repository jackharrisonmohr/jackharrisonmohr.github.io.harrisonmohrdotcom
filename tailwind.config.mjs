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
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-light": "rgb(var(--color-accent-light) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--color-text))",
            "--tw-prose-headings": "rgb(var(--color-text))",
            "--tw-prose-links": "rgb(var(--color-accent))",
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
          },
        },
      },
    },
  },
  plugins: [typography],
};
