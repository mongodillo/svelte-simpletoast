# svelte-simpletoast

A lightweight, customizable toast notification library for Svelte applications.

Demo: [https://mongodillo.github.io/svelte-simpletoast/](https://mongodillo.github.io/svelte-simpletoast/)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install svelte-simpletoast:

```bash
$ npm i svelte-simpletoast
```

## Usage

The following are exported:

To use `svelte-simpletoast`, you'll need to import and utilize both the `ToastContainer` component and the `toasts` controller.

### Svelte

Place the `ToastContainer` in your root layout/page and optionally override various options for customization:

`+layout.svelte`:

```html
<script>
	import { ToastContainer } from 'svelte-simpletoast';

	// Optional configurations
	const toastConfig = {
		duration: 5000, // Override the default duration
		autoClose: true, // Override the default "autoClose" boolean
		position: toasts.positionOptions.TOP_RIGHT, // Override default positioning of toasts for screens larger than 640px
		smPosition: toasts.positionOptions.BOTTOM_MIDDLE, // Override default positioning of toasts for screens smaller than 640px
		maxToasts: 4, // Limit the number of toasts to avoid cluttering the screen
		// Customize the color scheme
		colorScheme: {
			neutral: { color: '#111827', bg: '#f3f4f6' },
			error: { color: '#dc2626', bg: '#fed7d7' },
			success: { color: '#059669', bg: '#c6f6d5' },
			info: { color: '#065d9d', bg: '#bfdbfe' },
			warning: { color: '#d97706', bg: '#fef3c7' }
		}
	};
</script>

...
<ToastContainer {toastConfig} />
```

The `toasts` controller can be used anywhere in your application to display toast notifications:

`MyComponent.svelte`:

```html
<script>
	import { toasts } from 'svelte-simpletoast';

	function showAllToasts() {
		toasts.error('Error Title', 'Error message', 10000);
		toasts.success('Success Title', 'Success message');
		toasts.processing('Data Downloading', 'Processing message');
		toasts.neutral('Neutral Title', 'Neutral message', 500, true);
		toasts.info('Info Title', 'Info message', 7500);
		toasts.warning('Warning Title', 'Warning message', 1000, true);
	}
</script>

<button on:click="{showAllToasts}">Show Toasts</button>
```

### Vanilla JS

You can import the `ToastContainer` and `toasts` controller from the `svelte-simpletoast/dist-js`

```js
import { ToastContainer, toasts } from 'svelte-simpletoast/dist-js';
const toastContainer = new ToastContainer({
	target: document.body,
	props: {
		toastConfig: {
			duration: 5000, // Duration (in milliseconds) for which a toast is displayed
			autoClose: true, // If true, the toast will automatically close after the duration
			position: toasts.positionOptions.TOP_RIGHT, // Positioning of toasts for screens larger than 640px
			smPosition: toasts.positionOptions.BOTTOM_RIGHT, // Positioning of toasts for screens smaller than 640px
			maxToasts: 7, // Maximum number of toasts that can be displayed at a time
			colorScheme: {
				neutral: { color: '#111827', bg: '#f3f4f6' },
				error: { color: '#dc2626', bg: '#fed7d7' },
				success: { color: '#059669', bg: '#c6f6d5' },
				info: { color: '#065d9d', bg: '#bfdbfe' },
				warning: { color: '#d97706', bg: '#fef3c7' }
			}
		}
	}
});
```

## Default Configuration

The library comes with a set of default configurations for toast notifications. Here's what the default configuration looks like:

```js
{
	duration: 5000, // Duration (in milliseconds) for which a toast is displayed
	autoClose: true, // If true, the toast will automatically close after the duration
	position: toasts.positionOptions.TOP_RIGHT, // Positioning of toasts for screens larger than 640px
	smPosition: toasts.positionOptions.BOTTOM_RIGHT, // Positioning of toasts for screens smaller than 640px
	maxToasts: 7, // Maximum number of toasts that can be displayed at a time
	colorScheme: {
		neutral: { color: '#111827', bg: '#f3f4f6' },
		error: { color: '#dc2626', bg: '#fed7d7' },
		success: { color: '#059669', bg: '#c6f6d5' },
		info: { color: '#065d9d', bg: '#bfdbfe' },
		warning: { color: '#d97706', bg: '#fef3c7' }
	}
};
```

You can override these defaults by passing your own configuration to the `ToastContainer` as shown in the `Usage` section.

Note: the default config for a `processing` toast is to not close automatically - i.e. you should be manually closing the toast via toasts.removeToast(id) given its meant to reflect a processing task such as "fetch"

Please note, the color scheme is used to define the background and text color for each type of toast. The keys are the toast types, and the values are objects containing the `color` (text color) and `bg` (background color) properties.

Remember, these default values are subject to change based on updates to the library. Always refer to the source code or official documentation for the most accurate information.

## Position Options

The library provides a number of options for positioning toast notifications on the screen - `toasts.positionOptions.[variable]`. The positioning options are particularly useful for ensuring the toasts appear exactly where you want them to on different screen sizes.

Here are the available position options:

- `TOP_RIGHT`: Positions the toasts at the top-right corner of the screen.
- `TOP_LEFT`: Positions the toasts at the top-left corner of the screen.
- `TOP_MIDDLE`: Positions the toasts at the top-center of the screen.
- `BOTTOM_RIGHT`: Positions the toasts at the bottom-right corner of the screen.
- `BOTTOM_LEFT`: Positions the toasts at the bottom-left corner of the screen.
- `BOTTOM_MIDDLE`: Positions the toasts at the bottom-center of the screen.

To set the position of the toasts, you can use the `position` and `smPosition` properties in your configuration. `position` sets the position of the toasts for larger screens (screen width > 640px), while `smPosition` sets the position of the toasts for smaller screens (screen width < 640px).

Here's how you can set these properties in your configuration:

```js
const toastConfig = {
	// ...
	position: toasts.positionOptions.TOP_RIGHT, // For larger screens
	smPosition: toasts.positionOptions.BOTTOM_MIDDLE // For smaller screens
	// ...
};
```

This configuration will position the toasts at the top-right corner of the screen for larger screens, and at the bottom-center of the screen for smaller screens.

You can use any combination of the position options based on your design preferences and requirements.

## Toast Methods

The `toasts` controller provides several methods for displaying different types of toast notifications. Each method returns a `toastId` that can be used to manually remove the toast.

Note: duration (ms) and autoClose (boolean) are optional parameters.

```js
// Success toast
toast.success(title, message, duration?, autoClose?);

// Error toast
toast.error(title, message, duration?, autoClose?);

// Info toast
toast.info(title, message, duration?, autoClose?);

// Warning toast
toast.warning(title, message, duration?, autoClose?);

// Processing toast
toast.processing(title, message, duration?, autoClose?);

// Neutral toast
toast.neutral(title, message, duration?, autoClose?);

// Remove a toast
toasts.removeToast(id);
```

## Development

The package is bundled with [SvelteKit](https://kit.svelte.dev/docs/packaging). Contributions are welcomed following the standard Github [contribution workflow](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## License

`svelte-simpletoast` is [MIT Licensed](https://chat.openai.com/LICENSE)
