# svelte-simpletoast

> Simple toast notifications for Svelte

A simple and effective toast notification library for Svelte apps.

## Usage

Install the package:

```bash
$ npm i svelte-simpletoast
```

The following are exported:

- `ToastContainer` as the toast container;
- `toasts` as the toast controller.

### Svelte

Import the toast container and place it in your root layout/page

`+layout.svelte`:

<!-- prettier-ignore -->
```html
<script>
  import { ToastContainer } from 'svelte-simpletoast'

  // You may override various options here
  const toastConfig = {
        duration: 5000, //if you want to override the default duration
		autoClose: true // if you want to override the default "autoClose" boolean
		position: toasts.positionOptions.TOP_RIGHT, //override default for positioning of Toasts (>640px)
		smPosition: toasts.positionOptions.BOTTOM_MIDDLE // override default for positioning of Toasts (<640px screen size) - Recommended BOTTOM
		maxToasts: 4, //limits the number of toasts so avoid clogging up the screen.
		// Add your own color scheme if you do not want to use the default colours.
		colorScheme: {
			neutral: { color: '', bg: '' },
			error: { color: '#123fff', bg: '#000000' },
			success: { color: 'green', bg: 'red' },
			info: { color: '', bg: '' },
			warning: { color: '', bg: '' }
		}
		
  }
</script>

...
<ToastContainer {toastConfig} />
```

Use anywhere in your app - just import the toast controller.

`MyComponent.svelte`:

```html
<script>
  import { toasts } from 'svelte-simpletoast'
</script>

<button on:click={() => toast.success('Success Title','Hello world!')}>SHOW TOAST</button>
```

## Toast Methods

```js
//Each of the "send toast" functions returns the toastId just in case you want to remove the toast manually via removeToast(id)
// Sends a Success Toast
toast.success(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose
);

// Sends an Error Toast
toast.Error(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose
);

// Sends an Info Toast
toast.Info(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose
);

// Sends a Warning Toast
toast.Warning(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose
);

// Sends a Processing Toast
toast.processing(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose // Default of False for Processing as you would be expected to close upon completion of whatever function you are running.
);

// Sends a Neutral Toast
toast.neutral(
	/** @type {string} */ title,
	/** @type {string} */ message,
	/** @type {number} */ duration,
	/** @type {boolean} */ autoClose
);

/**
 * Removes a Toast
 * @function
 * @param {number} id - id of toast to be removed
 */
const removeToast = (id) =>
	update((/** @type {ToastArray} */ toasts) => toasts.filter((t) => t.id !== id));
```

## Development

Packaging is through [SvelteKit](https://kit.svelte.dev/docs/packaging). Standard Github
[contribution workflow](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
applies.

## License

MIT
