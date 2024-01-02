/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Sapphire: "#0C023E",
				MidnightBlue: "#1D2570",
				ResolutionBlue: "#2F387B",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark"],
	},
};
