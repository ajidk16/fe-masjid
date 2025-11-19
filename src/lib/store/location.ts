import type { LocationData } from '$lib/utils/get-location';
import { writable } from 'svelte/store';

const getStoredLocation = (): LocationData | null => {
	if (typeof localStorage === 'undefined') return null;
	const stored = localStorage.getItem('location');
	return stored ? JSON.parse(stored) : null;
};

export const locationStore = writable<LocationData | null>(getStoredLocation());

export const setLocation = (data: LocationData | null) => {
	if (data === null) {
		localStorage.removeItem('location');
	} else {
		localStorage.setItem('location', JSON.stringify(data));
	}
	locationStore.set(data);
};
