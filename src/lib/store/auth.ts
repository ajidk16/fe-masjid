import { writable } from 'svelte/store';

const storedToken = localStorage.getItem('jwt') || null;

export const jwt = writable<string | null>(storedToken);

jwt.subscribe((value) => {
	if (value) {
		localStorage.setItem('jwt', value);
	} else {
		localStorage.removeItem('jwt');
	}
});
