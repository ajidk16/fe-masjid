import { writable } from 'svelte/store';

type NextPrayer = {
	name: string;
	time: string;
};

// Generic helper functions
const getStoredItem = <T>(key: string): T | null => {
	if (typeof localStorage === 'undefined') return null;
	const stored = localStorage.getItem(key);
	return stored ? JSON.parse(stored) : null;
};

const createStorageStore = <T>(key: string) => {
	const store = writable<T | null>(getStoredItem<T>(key));

	const set = (data: T | null) => {
		if (data === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(data));
		}
		store.set(data);
	};

	return { ...store, set };
};

// Stores
export const prayersStore = createStorageStore<NextPrayer[]>('prayerSchedule');
export const nextPrayerStore = createStorageStore<NextPrayer>('nextPrayer');

// Backward compatibility
export const setPrayerSchedule = prayersStore.set;
export const setNextPrayer = nextPrayerStore.set;
