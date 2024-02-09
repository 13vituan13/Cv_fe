<template>
    <div id="loading">
        <div class="loader">Loading...</div>
    </div>
 </template>

 <script>
 export default {
   name: 'Loading',
 };
 </script>

<style scoped>
/* loader */
#loading {
	width: 100vw;
	height: 100vh;
	transition: all 1s;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.5);
}

.loader {
	color: #ffffff;
	font-size: 15px;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	position: relative;
	text-indent: -9999em;
	margin: 50vh auto;
	animation: mulShdSpin 1.3s infinite linear;
	transform: translateZ(0);
}

@keyframes mulShdSpin {

	0%,
	100% {
		box-shadow: 0 -3em 0 0.2em,
			2em -2em 0 0em, 3em 0 0 -1em,
			2em 2em 0 -1em, 0 3em 0 -1em,
			-2em 2em 0 -1em, -3em 0 0 -1em,
			-2em -2em 0 0;
	}

	12.5% {
		box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em,
			3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
			-2em 2em 0 -1em, -3em 0 0 -1em,
			-2em -2em 0 -1em;
	}

	25% {
		box-shadow: 0 -3em 0 -0.5em,
			2em -2em 0 0, 3em 0 0 0.2em,
			2em 2em 0 0, 0 3em 0 -1em,
			-2em 2em 0 -1em, -3em 0 0 -1em,
			-2em -2em 0 -1em;
	}

	37.5% {
		box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
			3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
			-2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
	}

	50% {
		box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
			3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
			-2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
	}

	62.5% {
		box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
			3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
			-2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
	}

	75% {
		box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em,
			3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
			-2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
	}

	87.5% {
		box-shadow: 0em -3em 0 0, 2em -2em 0 -1em,
			3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
			-2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
	}
}

/* end loader */
</style>