export const toggleFavorite = (id: number) => {
	const favorites = localStorage.getItem('favorites') || '[]';
	const favoritesArray = JSON.parse(favorites);
	const favoriteIndex = favoritesArray.findIndex((el: number) => el === id);
	if (favoriteIndex === -1) {
		favoritesArray.push(id);
	} else {
		favoritesArray.splice(favoriteIndex, 1);
	}
	localStorage.setItem('favorites', JSON.stringify(favoritesArray));
};

export const existInFavorite = (id: number): boolean => {
	if (typeof window === 'undefined') return false;

	const favorites = localStorage.getItem('favorites') || '[]';
	const favoritesArray = JSON.parse(favorites);
	return favoritesArray.find((el: number) => el === id) !== undefined;
};

export const getFavorites = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');
