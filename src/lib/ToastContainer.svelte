<script>
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';
	import { toasts } from './ToastStore.js';
	import ToastItem from './ToastItem.svelte';

	export let toastConfig = {};

	/**
	 * Position of the toast messages for larger screens (screen width > 640px).
	 * @type {string}
	 */
	let position = toasts.positionOptions.TOP_RIGHT; //default for larger screens. > 640px

	/**
	 * Position of the toast messages for smaller screens (screen width < 640px).
	 * @type {string}
	 */
	let smPosition = toasts.positionOptions.BOTTOM_RIGHT; // default for smaller screens <640px

	/**
	 * Position of the toast messages based on screen size.
	 * @type {string}
	 */
	let toastPosition;

	/**
	 * Determines the direction of the fly animation based on the position of the toast.
	 * @returns {Object} Object with x or y property determining the direction of the fly animation.
	 */
	const flyDirection = () => {
		if (toastPosition.includes('left')) return { x: -300 };
		if (toastPosition.includes('right')) return { x: 300 };
		if (toastPosition === 'bottom-middle') return { y: 300 };
		if (toastPosition === 'top-middle') return { y: -300 };
	};

	/** Function to capitalize the first letter of a string
	 * @param {string} string
	 */
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	/**
	 * Sets the color scheme for the toast messages based on the provided configuration.
	 *
	 * @param {HTMLElement} node - The HTML element to apply the color scheme to.
	 */
	const setColorScheme = (node) => {
		// Update the color scheme for the toast messages
		const defaultColorScheme = {
			error: { color: '#dc2626', bg: '#fed7d7' },
			success: { color: '#059669', bg: '#c6f6d5' },
			info: { color: '#065d9d', bg: '#bfdbfe' },
			warning: { color: '#d97706', bg: '#fef3c7' },
			neutral: { color: '#111827', bg: '#f3f4f6' }
		};
		// Merge the user-provided color scheme with the default one
		const colorScheme = { ...defaultColorScheme, ...toastConfig.colorScheme };

		let toastElement = node;
		for (const [key, value] of Object.entries(colorScheme)) {
			toastElement.style.setProperty(`--toast${capitalizeFirstLetter(key)}-color`, value.color);
			toastElement.style.setProperty(`--toast${capitalizeFirstLetter(key)}-bg`, value.bg);
		}
	};

	onMount(() => {
		// Initialize the toasts if toastConfig is populated
		toasts.init(toastConfig);

		// Update the toast positions if they were provided in the configuration
		if (toastConfig.position) position = toastConfig.position;
		if (toastConfig.smPosition) smPosition = toastConfig.smPosition;

		/**
		 * Handles the resizing of the window.
		 * Sets the position of the toast messages based on the window's inner width.
		 */
		const handleResize = () => {
			toastPosition =
				window.innerWidth > 640
					? toastConfig.position || position
					: toastConfig.smPosition || smPosition;
		};
		// Listen for window resize events
		window.addEventListener('resize', handleResize);

		// Ensure the position is set correctly when the component first loads
		handleResize();

		return () => {
			// cleanup function to be run when component is destroyed
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<ul class="toast-container {toastPosition}" use:setColorScheme>
	{#each $toasts as toast (toast.id)}
		<li out:fade={{ duration: 200 }} in:fly={flyDirection()} animate:flip={{ duration: 200 }}>
			<ToastItem {toast} {position} />
		</li>
	{/each}
</ul>

<style>
	.toast-container {
		/*Colour template*/
		--toastError-color: #dc2626;
		--toastError-bg: #fed7d7;
		--toastSuccess-color: #059669;
		--toastSuccess-bg: #c6f6d5;
		--toastInfo-color: #065d9d;
		--toastInfo-bg: #bfdbfe;
		--toastWarning-color: #d97706;
		--toastWarning-bg: #fef3c7;
		--toastNeutral-color: #111827;
		--toastNeutral-bg: #f3f4f6;

		/*CSS Styling*/

		position: fixed;
		display: flex;
		list-style-type: none;
		align-items: stretch;
		flex-direction: column;
		margin: 0;
		padding: 0;
		z-index: 9999;
		width: 100%;
	}
	.toast-container.top-right {
		top: 0;
		right: 0;
		flex-direction: column-reverse;
	}

	.toast-container.top-left {
		top: 0;
		left: 0;
		flex-direction: column-reverse;
	}

	.toast-container.bottom-right {
		bottom: 0;
		right: 0;
		flex-direction: column;
	}

	.toast-container.bottom-left {
		bottom: 0;
		left: 0;
		flex-direction: column;
	}

	.toast-container.top-middle {
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-direction: column-reverse;
	}

	.toast-container.bottom-middle {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-direction: column;
	}

	/* Small devices (greater than 640px) */
	@media (min-width: 640px) {
		.toast-container {
			width: 50%;
		}
	}

	/* Medium devices (greater than 768px) */
	@media (min-width: 768px) {
		.toast-container {
			width: 40%;
		}
	}

	/* Extra large devices (greater than 1536px) */
	@media (min-width: 1536px) {
		.toast-container {
			width: 25%;
		}
	}
</style>
