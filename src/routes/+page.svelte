<script>
	import { ToastContainer, toasts } from '../lib/index.js';

	let isToastContainerVisible = true;
	let toastConfig = {
		duration: 5000,
		autoClose: true,
		position: toasts.positionOptions.BOTTOM_RIGHT,
		smPosition: toasts.positionOptions.BOTTOM_MIDDLE,
		maxToasts: 4,
		colorScheme: {
			error: { color: '#dc2626', bg: '#fed7d7' },
			success: { color: '#059669', bg: '#c6f6d5' },
			info: { color: '#065d9d', bg: '#bfdbfe' },
			warning: { color: '#d97706', bg: '#fef3c7' },
			neutral: { color: '#111827', bg: '#f3f4f6' }
		}
	};

	function showToast(type, title, message, duration, autoClose) {
		toasts[type](title, message, duration, autoClose);
	}

	function initToastConfig() {
		$toasts.forEach((toast) => toasts.removeToast(toast.id));
		toasts.init(toastConfig);

		isToastContainerVisible = false;
		isToastContainerVisible = true;
		// Manually trigger the resize event
		const resizeEvent = new Event('resize');
		window.dispatchEvent(resizeEvent);
	}
</script>

<div class="container">
	<div class="config-section">
		<h2>Toast Configuration</h2>
		<div class="config-field">
			<label for="duration"> Max Toasts:</label>
			<input type="number" id="maxtoasts" bind:value={toastConfig.maxToasts} />
		</div>
		<div class="config-field">
			<label for="duration">Duration (ms):</label>
			<input type="number" id="duration" bind:value={toastConfig.duration} />
		</div>
		<div class="config-field">
			<label for="autoClose">Auto Close:</label>
			<input type="checkbox" id="autoClose" bind:checked={toastConfig.autoClose} />
		</div>
		<div class="config-field">
			<label for="position">Position:</label>
			<select id="position" bind:value={toastConfig.position}>
				<option value={toasts.positionOptions.TOP_RIGHT}>Top Right</option>
				<option value={toasts.positionOptions.TOP_LEFT}>Top Left</option>
				<option value={toasts.positionOptions.TOP_MIDDLE}>Top Middle</option>
				<option value={toasts.positionOptions.BOTTOM_RIGHT}>Bottom Right</option>
				<option value={toasts.positionOptions.BOTTOM_LEFT}>Bottom Left</option>
				<option value={toasts.positionOptions.BOTTOM_MIDDLE}>Bottom Middle</option>
			</select>
		</div>
		<div class="config-field">
			<label for="smPosition">Small Screen Position:</label>
			<select id="smPosition" bind:value={toastConfig.smPosition}>
				<option value={toasts.positionOptions.TOP_RIGHT}>Top Right</option>
				<option value={toasts.positionOptions.TOP_LEFT}>Top Left</option>
				<option value={toasts.positionOptions.TOP_MIDDLE}>Top Middle</option>
				<option value={toasts.positionOptions.BOTTOM_RIGHT}>Bottom Right</option>
				<option value={toasts.positionOptions.BOTTOM_LEFT}>Bottom Left</option>
				<option value={toasts.positionOptions.BOTTOM_MIDDLE}>Bottom Middle</option>
			</select>
		</div>
	</div>
	<div class="toasts-section">
		<button on:click={initToastConfig}>Load New Config (Affects new toasts only)</button>
		<h2>Toast Types</h2>
		<div class="toast-buttons">
			<button on:click={() => showToast('success', 'Success', 'This is a success toast.')}
				>Success Toast</button
			>
			<button on:click={() => showToast('error', 'Error', 'This is an error toast.')}
				>Error Toast</button
			>
			<button on:click={() => showToast('info', 'Info', 'This is an info toast.')}
				>Info Toast</button
			>
			<button on:click={() => showToast('warning', 'Warning', 'This is a warning toast.')}
				>Warning Toast</button
			>
			<button on:click={() => showToast('processing', 'Processing', 'This is a processing toast.')}
				>Processing Toast</button
			>
			<button on:click={() => showToast('neutral', 'Neutral', 'This is a neutral toast.')}
				>Neutral Toast</button
			>
		</div>
	</div>
</div>

{#if isToastContainerVisible}
	<ToastContainer {toastConfig} />
{/if}

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

	.config-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.config-field {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.toasts-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.toast-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.container button {
		height: 5rem;
		font-weight: bolder;
	}
</style>
