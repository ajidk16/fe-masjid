export type LocationData = {
	display_name?: string;
	address?: {
		city_district?: string;
		town?: string;
		county?: string;
		state?: string;
		region?: string;
		country?: string;
	};
};
export const getLocation = async (): Promise<LocationData | null> => {
    if ('geolocation' in navigator) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
                        );

                        if (!response.ok) {
                            throw new Error('Failed to fetch location');
                        }
                        const data = await response.json() as LocationData;
                        resolve(data);
                        return data
                    } catch (error) {
                        reject(error);
                    }
                },
                (err) => {
                    console.error('Error getting location:', err);
                    reject(err);
                },
                { enableHighAccuracy: true }
            );
        });
    }
    return null;
};
