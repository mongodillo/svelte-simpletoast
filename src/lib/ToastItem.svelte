<script>
	/**
	 * Importing toast store, tweened from Svelte motion and Svelte lifecycle methods
	 */
	import { toasts } from './ToastStore.js';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';

	/**
	 * @property {string} position Position of the toast item on the screen.
	 */
	export let position;

	export let toast;

	const { autoClose, duration, id, status, message, title, toastTime } = toast;

	let progress,
		unsubscribe = () => {};

	if (autoClose) {
		/**
		 * Tweened progress value from 1 to 0 over specified duration if autoClose is true.
		 */
		progress = tweened(1, { duration: duration, easing: linear });

		/**
		 * Subscription to progress. If progress reaches 0, the toast is removed.
		 */
		unsubscribe = progress.subscribe(($progress) => {
			if ($progress <= 0) {
				toasts.removeToast(id);
			}
		});

		/**
		 * Begin progress when the component is mounted.
		 */
		onMount(async () => {
			await progress.set(0);
		});
	}

	/**
	 * Clean up subscription and remove the toast when the component is destroyed.
	 */
	onDestroy(() => {
		unsubscribe();
		toasts.removeToast(id);
	});
</script>

<div class="toast {position} {status}">
	<div class="toast-content-container">
		{#if status === 'processing'}
			<div class="lds-dual-ring" />
		{/if}
		{#if status && status !== 'none' && status !== 'processing'}
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
				{#if status === 'info'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				{/if}
				{#if status === 'success'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				{/if}
				{#if status === 'error'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				{/if}
				{#if status === 'warning'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				{/if}
			</svg>
		{/if}
		<div class="toast-content">
			<div class="toast-title-row">
				<h1>{@html title}</h1>

				<span>{toastTime}</span>
			</div>
			<p class="toast-message">{@html message}</p>
		</div>
	</div>

	<button class="close-container-btn" on:click={() => toasts.removeToast(id)}>✕</button>
	<!-- Add a progress bar that reflects the current progress -->
	{#if autoClose}
		<div class="progress {status}" style="width: {$progress * 100}%" />
	{/if}
</div>

<style>
	.toast {
		position: relative;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		border: 1px solid transparent;
		border-radius: 0.375rem;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		margin-right: 0;
		margin-left: 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: var(--toastNeutral-color, #111827);
		background-color: var(--toastNeutral-bg, #f3f4f6);
	}
	.toast.error {
		color: var(--toastError-color, #dc2626);
		background-color: var(--toastError-bg, #fed7d7);
		/* Add your custom styles */
	}
	.toast.success {
		color: var(--toastSuccess-color, #059669);
		background-color: var(--toastSuccess-bg, #c6f6d5);
		/* Add your custom styles */
	}

	.toast.info {
		color: var(--toastInfo-color, #065d9d);
		background-color: var(--toastInfo-bg, #bfdbfe);
		/* Add your custom styles */
	}
	.toast.warning {
		color: var(--toastWarning-color, #d97706);
		background-color: var(--toastWarning-bg, #fef3c7);
		/* Add your custom styles */
	}

	.toast-content-container {
		display: flex;
		flex-direction: row;
		width: 91.67%;
		align-items: center;
	}
	.toast-content-container svg {
		fill: none;
		stroke: currentColor;
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.5rem;
	}

	.toast-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.toast-content p {
		font-size: 1rem;
		margin-top: 0rem;
		margin-bottom: 0.5rem;
		word-break: break-word;
	}
	
	.toast-message {
		margin-left: 0.1rem;
	}

	.toast-title-row {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.toast-title-row h1 {
		font-size: 1.2rem;
		font-weight: bolder;
		text-transform: capitalize;
		margin-top: 0;
		margin-bottom: 0;
		padding: 0;
	}
	.toast-title-row span {
		margin-left: auto;
		margin-top: 0;
		margin-bottom: 0;
		padding: 0;
	}

	.close-container-btn {
		display: inline-block;
		font-weight: bold;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		font-size: 1.25rem;
		border: none;
		background-color: transparent;
		color: inherit;
	}
	.close-container-btn:hover {
		transform: scale(1.25);
	}

	.progress {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 5px;
		border-bottom-left-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
		background-color: var(--toastNeutral-color, #111827);
	}
	.progress.success {
		background-color: var(--toastSuccess-color, #059669);
	}

	.progress.error {
		background-color: var(--toastError-color, #dc2626);
	}
	.progress.info {
		background-color: var(--toastInfo-color, #065d9d);
	}
	.progress.warning {
		background-color: var(--toastWarning-color, #d97706);
	}

	/* Small devices (greater than 640px) */
	@media (min-width: 640px) {
		.toast.top-right,
		.toast.bottom-right {
			margin-right: 1.5rem;
		}

		.toast.top-left,
		.toast.bottom-left {
			margin-left: 1.5rem;
		}
	}

	/*Spinner*/
	.lds-dual-ring {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.5rem;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		border: 4px solid var(--toastNeutral-color, #111827);
		border-color: var(--toastNeutral-color, #111827) transparent var(--toastNeutral-color, #111827)
			transparent;
		animation: lds-dual-ring 1s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
