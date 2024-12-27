/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export const darkMode = ['class'];
export const content = [
	'./pages/**/*.{js,jsx}',
	'./components/**/*.{js,jsx}',
	'./app/**/*.{js,jsx}',
	'./src/**/*.{js,jsx}',
];
export const prefix = '';
export const theme = {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px',
		},
	},
	colors: {
		gray: colors.gray,
		white: colors.white,
		blue: {
			50: '#e9eef2',
			100: '#a1bcd4',
			200: '#d4dee8',
			400: '#205583',
		},
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		ring: 'hsl(var(--ring))',
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		},
		secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		},
		destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		},
		accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		},
	},
	extend: {
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
	},
};

export const plugins = [
	require('tailwindcss-animate'),
	require('tailwind-scrollbar'),
];
