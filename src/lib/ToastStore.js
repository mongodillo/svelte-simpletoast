import { writable } from 'svelte/store';

/**
 * @typedef {Object} ToastItem - Object containing information for each Toast to be displayed
 * @property {string} title Toast title to be displayed. Default is 'Title'.
 * @property {string} message Toast message to be displayed. Default is 'Hello, world!'.
 * @property {number} duration Duration for which toast is displayed in ms.
 * @property {number} id Unique identifier for the toast item.
 * @property {boolean} autoClose Indicates whether the toast should close automatically. Default is true.
 * @property {string} status The default status of the toast item which affects colour
 * @property {string} toastTime time the toast was generated in local time.
 */

/**
 * @typedef {ToastItem[]} ToastArray - An array of ToastItem objects containing all toasts.
 */

/**
 * @typedef {Object} ToastConfig - options for each ToastItem.
 * @property {number} [duration] - The default duration for which the toast is displayed in milliseconds.
 * @property {boolean} [autoClose] - The default setting for whether the toast should close automatically after duration.
 * @property {string} [status] - The default status of the toast item which affects colour
 * @property {number} [maxToasts] - total number of toasts you can display at any point.
 */

const createToast = () => {
	const { subscribe, update } = writable([]);

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

	/** @type {ToastConfig} */
	let toastConfig = {
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
	) => {
		if (!Object.values(statusOptions).includes(status)) {
			throw new Error(
				`Invalid status: ${status}. Valid options are ${Object.values(statusOptions).join(', ')}`
			);
		}

		update((/** @type {ToastArray} */ toasts) => {
			let updatedToasts = [...toasts];

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
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) =>
		addToast(
			title,
			message,
			statusOptions.SUCCESS,
			duration ?? toastConfig.duration,
			autoClose ?? toastConfig.autoClose
		);

	const error = (
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) =>
		addToast(
			title,
			message,
			statusOptions.ERROR,
			duration ?? toastConfig.duration,
			autoClose ?? toastConfig.autoClose
		);

	const warning = (
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) =>
		addToast(
			title,
			message,
			statusOptions.WARNING,
			duration ?? toastConfig.duration,
			autoClose ?? toastConfig.autoClose
		);

	const info = (
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) =>
		addToast(
			title,
			message,
			statusOptions.INFO,
			duration ?? toastConfig.duration,
			autoClose ?? toastConfig.autoClose
		);

	const processing = (
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) => addToast(title, message, statusOptions.PROCESSING, duration ?? 0, autoClose ?? false);

	const neutral = (
		/** @type {string} */ title,
		/** @type {string} */ message,
		/** @type {number} */ duration,
		/** @type {boolean} */ autoClose
	) =>
		addToast(
			title,
			message,
			statusOptions.NONE,
			duration ?? toastConfig.duration,
			autoClose ?? toastConfig.autoClose
		);

	/**
	 * Removes a Toast
	 * @function
	 * @param {number} id - id of toast to be removed
	 */
	const removeToast = (id) =>
		update((/** @type {ToastArray} */ toasts) => toasts.filter((t) => t.id !== id));

	/**
	 * Initialize the toast configuration.
	 * @function
	 * @param {ToastConfig} newConfig - The new configuration to be set.
	 */
	const init = (newConfig) => {
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
