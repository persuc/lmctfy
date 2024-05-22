import type { Config } from "tailwindcss"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        light: "#ba5b38",
        dark: '#ae5630',
      },
      focusFrom: { // focus linear stop from
        light: '#f8f8f7',
        dark: '#393937',
      },
      focusTo: { // focus linear stop to
        light: '#f8f8f7',
        dark: 'rgba(57, 57, 55, 0.8)',
      },
      fgFrom: { // foreground linear stop from
        light: '#f5f4ef',
        dark: '#2f2f2c',
      },
      fgTo: { // foreground linear stop to
        light: 'rgba(245, 244, 239, 0.3)',
        dark: 'rgba(47, 47, 44, 0.3)',
      },
      bgFrom: { // background linear stop from
        light: '#f0eee5',
        dark: '#2b2a27',
      },
      bgTo: { // background linear stop to
        light: '#f5f4ef',
        dark: '#2f2f2c',
      },
      border: {
        light: '#D6D5D0',
        dark: '#6c6a60',
      },
      focusBorder: {
        light: 'rgba(112, 107, 87, 0.25)',
        dark: 'rgba(108, 106, 96, 0.25)',
      },
      text: {
        light: '#29261b',
        dark: '#f5f4ef',
      },
      placeholder: {
        light: '#737164',
        dark: '#a5a39b',
      }
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

