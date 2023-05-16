<script>
	import { ToastContainer, toasts } from '../lib/index.js';

	let toastConfig = {
		//duration: 5000, //if you want to override the default duration
		//autoClose: true // if you want to override the default "autoClose" boolean
		//position: toasts.positionOptions.TOP_RIGHT, //override default for positioning of Toasts (>640px)
		//smPosition: toasts.positionOptions.BOTTOM_MIDDLE // override default for positioning of Toasts (<640px screen size) - Recommended BOTTOM
		//maxToasts: 4, //limits the number of toasts so avoid clogging up the screen.
		/* Add your own color scheme if you do not want to use the default colours.
		colorScheme: {
			neutral: { color: '', bg: '' },
			error: { color: '#123fff', bg: '#000000' },
			success: { color: 'green', bg: 'red' },
			info: { color: '', bg: '' },
			warning: { color: '', bg: '' }
		}
		*/
	};

	let processingIds = [];

	function showAllToasts() {
		toasts.error('Error Title', 'Error message', 10000);
		toasts.success('Success Title', 'Success message - Default close time');
		processingIds.push(toasts.processing('Data Downloading', 'Processing message'));
		toasts.neutral('Neutral Title', 'Neutral message', 4000, true);
		toasts.info('Info Title', 'Info message', 7500);
		toasts.warning('Warning Title', 'Warning message', 6000);
	}

	function closeProcessingToasts() {
		processingIds.forEach((id) => toasts.removeToast(id));
	}
</script>

<div class="container">
	<button on:click={showAllToasts}>Show Toasts</button>
	<button on:click={closeProcessingToasts}>Clear Processing Toasts</button>
</div>
<ToastContainer {toastConfig} />

<style>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.container button {
		height: 5rem;
		font-weight: bolder;
	}
</style>
