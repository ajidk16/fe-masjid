export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('id-ID', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
};

export const formatDateISO = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toISOString().split('T')[0];
};

export const formatDateTime = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleString('id-ID', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
};

export const formatDay = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('id-ID', {
		weekday: 'long'
	});
}
