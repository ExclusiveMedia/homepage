import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { charcoal: '#0b0f12', ink: '#12171b', bone: '#f7f3ea', mist: '#d8dfdf', teal: '#33d6c6', gold: '#c5a15a' }, fontFamily: { sans: ['Inter', 'Space Grotesk', 'Arial', 'sans-serif'] }, boxShadow: { glow: '0 0 80px rgba(51,214,198,.18)' } } }, plugins: [] };
export default config;
