<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { Prayers, type Prayer } from '$lib/utils/prayers';

	let { data, children } = $props();

	// let prayers: Prayer[] = $state([]);
	// let nextPrayer: Prayer | null = $state(null);

	// const loadPrayers = async () => {
	// 	const result = await Prayers(data.jadwal);
	// 	prayers = result.prayers;
	// 	nextPrayer = result.nextPrayer;
	// };

	// // suara adzan logic
	// let audio: HTMLAudioElement | null = null;
	// const playAdzan = () => {
	// 	if (audio) {
	// 		try {
	// 			audio.currentTime = 0;
	// 			audio.play();
	// 		} catch (error) {
	// 			console.error('Error playing audio:', error);
	// 		}
	// 	}
	// };

	// const checkAdzanTime = () => {
	// 	if (!nextPrayer?.time) return;
	// 	const now = new Date();
	// 	const [hours, minutes] = nextPrayer.time.split(':').map(Number);
	// 	if (now.getHours() === hours && now.getMinutes() === minutes && now.getSeconds() === 0) {
	// 		playAdzan();
	// 	}
	// };

	// onMount(() => {
	// 	audio = new Audio('/audio/adzan_aqsha.mp3');
	// 	checkAdzanTime();
	// 	loadPrayers();
	// });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
