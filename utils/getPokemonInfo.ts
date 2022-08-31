import {pokeApi} from '../api';
import {Pokemon} from '../interfaces';

export const getPokemonInfo = async (param: string) => {
	try {
		const {data} = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

		return {
			name: data.name,
			sprites: data.sprites,
			id: data.id,
		};
	} catch (error) {
		return null;
	}
};
