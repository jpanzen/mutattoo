import { animate, scroll } from "motion"

const animation7 = animate(
	".JS-animate7",
	{ transform: ["translateY(-300%)", "translateY(30%)"] },
	{ ease: "linear" }
)
const animation2 = animate(
	".JS-animate2",
	{ transform: ["translateY(-100%)", "translateY(140%)"] },
	{ ease: "linear" }
)
const animation3 = animate(
	".JS-animate3",
	{ transform: ["translateY(-100%)", "translateY(100%)"] },
	{ ease: "linear" }
)
const animation6 = animate(
	".JS-animate6",
	{ transform: ["translateY(300%)", "translateY(-30%)"] },
	{ ease: "linear" }
)
const animation9 = animate(
	".JS-animate9",
	{ transform: ["translateY(-30%)", "translateY(30%)"] },
	{ ease: "linear" }
)
const animation8 = animate(
	".JS-animate8",
	{ transform: ["translateY(35%)", "translateY(-35%)"] },
	{ ease: "linear" }
)
const animation1 = animate(
	".JS-animate1",
	{ transform: ["translateY(-20%)", "translateY(35%)"] },
	{ ease: "linear" }
)
const animation4 = animate(
	".JS-animate4",
	{ transform: ["translateY(200%)", "translateY(0%)"] },
	{ ease: "linear" }
)
const animation5 = animate(
	".JS-animate5",
	{ transform: ["translateY(35%)", "translateY(-35%)"] },
	{ ease: "linear" }
)

scroll(animation7)
scroll(animation6)
scroll(animation2)
scroll(animation3)
scroll(animation9)
scroll(animation8)
scroll(animation1)
scroll(animation4)
scroll(animation5)