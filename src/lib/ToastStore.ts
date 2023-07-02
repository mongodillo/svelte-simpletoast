import { writable } from 'svelte/store';
import type { ToastArray, ToastConfig } from './ToastTypes.js';

const createToast = () => {
	const { subscribe, update } = writable<ToastArray>([]);

	const positionOptions = {
		TOP_LEFT: 'top-left',
		TOP_RIGHT: 'top-right',
		TOP_MIDDLE: 'top-middle',
		BOTTOM_LEFT: 'bottom-left',
		BOTTOM_RIGHT: 'bottom-right',
		BOTTOM_MIDDLE: 'bottom-middle'
	};

	const statusOptions = {
		NONE: 'none',
		SUCCESS: 'success',
		ERROR: 'error',
		INFO: 'info',
		WARNING: 'warning',
		PROCESSING: 'processing'
	};

	/**
	 * @property {number} id Unique identifier for the toast item.
	 */
	let id = 0;

	let toastConfig: ToastConfig = {
		duration: 5000,
		autoClose: true,
		status: statusOptions.NONE,
		maxToasts: 7
	};

	/**
	 * Add a new toast to the toast store.
	 *
	 * @function
	 *
	 * @param {string} [title] - The title to be displayed on the toast.
	 * @param {string} [message] - The message to be displayed on the toast.
	 * @param {string} [status] - The status of the toast item.
	 * @param {number} [duration] - The duration for which the toast is displayed in milliseconds.
	 * @param {boolean} [autoClose] - Indicates whether the toast should close automatically.
	 * @returns {number} - returns the toastId after updating store
	 */

	const addToast = (
		title = 'Title',
		message = 'Hello, world!',
		status = toastConfig.status,
		duration = toastConfig.duration,
		autoClose = toastConfig.autoClose
	): number => {
		if (!Object.values(statusOptions).includes(status)) {
			throw new Error(
				`Invalid status: ${status}. Valid options are ${Object.values(statusOptions).join(', ')}`
			);
		}

		update((toasts: ToastArray) => {
			const updatedToasts = [...toasts];

			if (updatedToasts.length >= toastConfig.maxToasts) {
				updatedToasts.shift(); // Remove the oldest toast
			}
			updatedToasts.push({
				title,
				message,
				duration,
				id: id++,
				autoClose,
				status,
				toastTime: new Date(Date.now()).toLocaleTimeString()
			});
			return updatedToasts;
		});

		return id - 1;
	};

	const success = (
		title: string,
		message: string,
		duration: number = toastConfig.duration,
		autoClose: boolean = toastConfig.autoClose
	) => {
		addToast(title, message, statusOptions.SUCCESS, duration, autoClose);
	};

	const error = (
		title: string,
		message: string,
		duration: number = toastConfig.duration,
		autoClose: boolean = toastConfig.autoClose
	) => addToast(title, message, statusOptions.ERROR, duration, autoClose);

	const warning = (
		title: string,
		message: string,
		duration: number = toastConfig.duration,
		autoClose: boolean = toastConfig.autoClose
	) => addToast(title, message, statusOptions.WARNING, duration, autoClose);

	const info = (
		title: string,
		message: string,
		duration: number = toastConfig.duration,
		autoClose: boolean = toastConfig.autoClose
	) => addToast(title, message, statusOptions.INFO, duration, autoClose);

	const processing = (title: string, message: string, duration = 0, autoClose = false) =>
		addToast(title, message, statusOptions.PROCESSING, duration, autoClose);

	const neutral = (
		title: string,
		message: string,
		duration: number = toastConfig.duration,
		autoClose: boolean = toastConfig.autoClose
	) => addToast(title, message, statusOptions.NONE, duration, autoClose);

	/**
	 * Removes a Toast
	 * @function
	 * @param {number} id - id of toast to be removed
	 */
	const removeToast = (id: number) =>
		update((toasts: ToastArray) => toasts.filter((t) => t.id !== id));

	/**
	 * Initialize the toast configuration.
	 * @function
	 * @param {ToastConfig} newConfig - The new configuration to be set.
	 */
	const init = (newConfig: ToastConfig) => {
		toastConfig = { ...toastConfig, ...newConfig };
	};

	return {
		subscribe,
		update,
		removeToast,
		init,
		positionOptions,
		statusOptions,
		success,
		warning,
		error,
		info,
		processing,
		neutral
	};
};

export const toasts = createToast();
