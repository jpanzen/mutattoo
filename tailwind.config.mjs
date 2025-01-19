/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
				  nunito: ["Nunito", "sans-serif"],
				  unifraktur: ["Cloister Black", "sans-serif"]
			  },
			  colors: {
				  dark: "#1A1A1A",
				  dark60: "#1a1a1a99",
				  dark20: "#1a1a1a33",
				  white20: "#ffffff33",
				  white10: "#ffffff1a",
				  white40: "#ffffff66",
			  },
			  backgroundImage: {
				  headerGradient: "radial-gradient(circle at top, rgba(52,127,182,1) 0%, rgba(25,69,132,1) 100%);",
				  darkGradient: "linear-gradient(rgba(0,0,0,0), rgba(26,26,26,1))",
				  lightGradient: "linear-gradient(rgba(26,26,26,0), rgba(255,255,255,0.05))",
				  featureCard: "url('/feature-bg.webp')",

				  tattoo1: "url('/kerky/tattoo01.webp')",
				  tattoo2: "url('/kerky/new/tattoo02.webp')",
				  tattoo3: "url('/kerky/new/tattoo03.webp')",
				  tattoo4: "url('/kerky/new/tattoo04.webp')",
				  tattoo5: "url('/kerky/new/tattoo05.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
				  tattoo6: "url('/kerky/new/tattoo06.webp')",
			  }
	  },
	},
	plugins: [
		require('daisyui')
	],
  }
  
  