import { writable } from 'svelte/store';

export const windowSize = writable({
	width: 0,
	height: 0
});

if (typeof window !== 'undefined') {
	function updateSize() {
		windowSize.set({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	window.addEventListener('resize', updateSize);

	updateSize();
}
