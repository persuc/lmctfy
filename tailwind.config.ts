import type { Config } from "tailwindcss"
import { themeVariants, prefersLight, prefersDark } from "tailwindcss-theme-variants"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['__copernicus_669e4a', '__copernicus_Fallback_669e4a', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'body': ['__styreneB_5d855b', '__styreneB_Fallback_5d855b', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    extend: {
      boxShadow: {
        'soft': 'var(--shadow)',
      }
    },
    colors: {
      transparent: 'transparent',
      primary: 'var(--primary)',
      'primary-light': 'var(--primary-light)',
      focusFrom: 'var(--focus-from)',
      focusTo: 'var(--focus-to)',
      fgFrom: 'var(--fg-from)',
      fgTo: 'var(--fg-to)',
      bgFrom: 'var(--bg-from)',
      bgTo: 'var(--bg-to)',
      border: 'var(--border)',
      focusBorder: 'rgba(var(--focus-border))',
      text: 'var(--text)',
      placeholder: 'var(--placeholder)',
      white: "#FFF",
    },
  },
  plugins: [
    themeVariants({
      themes: {
        light: {
          mediaQuery: prefersLight /* "@media (prefers-color-scheme: light)" */,
        },
        dark: {
          mediaQuery: prefersDark /* "@media (prefers-color-scheme: dark)" */,
        },
      },
    }),
  ],
} satisfies Config

