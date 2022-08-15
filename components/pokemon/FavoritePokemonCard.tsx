import { Card } from "@nextui-org/react"
import { useRouter } from "next/router";

export const FavoritePokemonCard = ({ id }: { id: number }) => {

    const router = useRouter();

    const onFavoriteCard = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteCard} >
            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={140} />
        </Card>
    )
}
