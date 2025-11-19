/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

type ResultStore =
	| {
			type: string;
			status: number;
			data: {
				field: string;
				message: string;
			};
	  }
	| any;

export const resultStore = writable<ResultStore | null>(null);

export const setResult = (data: ResultStore) => {
	resultStore.set(data);
};

export const resetResult = () => {
	resultStore.set(null);
};
