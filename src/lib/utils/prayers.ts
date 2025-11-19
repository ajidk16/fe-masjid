export interface Schedule {
	id?: number;
	lokasi?: string;
	daerah?: string;
	jadwal?: {
		tanggal?: string;
		imsak?: string;
		subuh?: string;
		terbit?: string;
		dhuha?: string;
		dzuhur?: string;
		ashar?: string;
		maghrib?: string;
		isya?: string;
		date?: string;
	};
}

export type Prayer = {
	name: string;
	time?: string;
};

const now = new Date();
const currentTime = now.getHours() * 60 + now.getMinutes();

export const Prayers = (schedule: Schedule): Promise<{ prayers: Prayer[]; nextPrayer: Prayer }> => {
	const prayers = [
		{ name: 'Subuh', time: schedule?.jadwal?.subuh },
		{ name: 'Dhuha', time: schedule?.jadwal?.dhuha },
		{ name: 'Dzuhur', time: schedule?.jadwal?.dzuhur },
		{ name: 'Ashar', time: schedule?.jadwal?.ashar },
		{ name: 'Maghrib', time: schedule?.jadwal?.maghrib },
		{ name: 'Isya', time: schedule?.jadwal?.isya }
	];

	const nextPrayer =
		prayers?.find((prayer) => {
			const [hours, minutes] = (prayer?.time?.split(':') || []).map(Number);
			const prayerTime = hours * 60 + minutes;
			return prayerTime > currentTime;
		}) || prayers[0];

	return Promise.resolve({ prayers, nextPrayer });
};

export const UpdateCountdown = ({
	nextPrayer,
	countdown,
	infoMessage
}: {
	nextPrayer: Prayer | null;
	countdown: string;
	infoMessage: string;
}): Promise<{ countdown: string; infoMessage: string }> => {
	const now = new Date();
	if (!nextPrayer?.time) return Promise.resolve({ countdown: '', infoMessage: '' });
	const [hours, minutes] = nextPrayer.time.split(':').map(Number);
	const prayerDate = new Date();
	prayerDate.setHours(hours, minutes, 0, 0);

	if (prayerDate <= now) {
		prayerDate.setDate(prayerDate.getDate() + 1);
	}

	const diff = prayerDate.getTime() - now.getTime();

	const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
	const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

	// info message 5 menit sebelum sholat dan 1 menit setelah adzan serta saat waktu sholat tiba
	switch (true) {
		case diff <= 0:
			infoMessage = `Waktu Salat ${nextPrayer.name} Telah Tiba`;
			break;
		case diff <= 300000:
			infoMessage = `Waktu Salat ${nextPrayer.name} Dalam 5 Menit`;
			break;
		default:
			infoMessage = '';
	}

	switch (true) {
		case hoursLeft === 0:
			countdown = `${minutesLeft > 9 ? minutesLeft : '0' + minutesLeft}:${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft}`;
			break;
		case minutesLeft === 0:
			countdown = `${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft} detik`;
			break;
		default:
			countdown = `${hoursLeft > 9 ? hoursLeft : '0' + hoursLeft}:${minutesLeft > 9 ? minutesLeft : '0' + minutesLeft}:${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft}`;
	}

	return Promise.resolve({ countdown, infoMessage });
};
