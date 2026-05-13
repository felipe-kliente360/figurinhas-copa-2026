/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'verde-campo': '#1a5c2e',
        'verde-claro': '#22c55e',
        'amarelo-ouro': '#fbbf24',
        'vermelho': '#ef4444',
        'azul-ceu': '#3b82f6',
        'branco-creme': '#fefce8',
        'card-escuro': '#0f2d1a',
        'card-medio': '#1a4029',
      },
      fontFamily: {
        display: ['Boogaloo', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
