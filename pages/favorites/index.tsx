import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritesPokemons } from "../../components/ui/FavoritesPokemons";
import { getFavorites } from "../../utils/localFavorites";

const Favorites = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(getFavorites());
    }, [])

    return (
        <Layout title="Favorites Pokemon's">
            {
                favoritesPokemons.length === 0 ? (<NoFavorites />) : (
                    <FavoritesPokemons pokemons={favoritesPokemons} />
                )
            }
        </Layout>
    )
}

export default Favorites;
