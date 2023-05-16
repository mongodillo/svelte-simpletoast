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

	function allToasts() {
		toasts.error('ERROR Toast', 'ERROR MESSAGE HERE', 10000);
		toasts.success('Success Title', 'Success message');
		toasts.processing('Data Downloading', 'Processing message');
		toasts.neutral('NONE', 'Neutral', 500, true);
		toasts.info('Info sending...', 'Info', 7500);
		toasts.warning('WARNING', 'Warning Message!', 1000, true);


	}
</script>

<button id="trigger-toast-button" on:click|preventDefault={allToasts}>Add All Toasts</button>

<ToastContainer {toastConfig} />
