import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { existInFavorite, toggleFavorite } from '../../utils/localFavorites';
import { getPokemonInfo } from '../../utils/getPokemonInfo';



interface Props {
    pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon: { name, sprites, id } }) => {
    const [isInFavorite, setIsInFavorite] = useState<boolean>(existInFavorite(id));
    console.log(name);


    const onToggleFavorite = () => {
        toggleFavorite(id);
        setIsInFavorite(!isInFavorite);

        if (isInFavorite) return;

        confetti({
            zIndex: 9999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }

        });
    }

    return (
        <Layout title={name}>
            <Grid.Container css={{ marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: '60px' }}>
                        <Card.Body>
                            <Card.Image src={sprites.other?.dream_world.front_default || '/no-image.png'} alt={name} width="100%" height={350} />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1>{name}</Text>
                            <Button color="gradient" ghost={!isInFavorite} onClick={onToggleFavorite}>
                                {isInFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites: </Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image src={sprites.front_default} alt={name} width={100} height={100} />
                                <Image src={sprites.back_default} alt={name} width={100} height={100} />
                                <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
                                <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
    const pokeNames: string[] = data.results.map(({ name }) => name);

    return {
        paths: pokeNames.map(name => ({ params: { name } })),
        fallback: false,
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };

    return {
        props: {
            pokemon: await getPokemonInfo(name),
        },

    }
}



export default PokemonByName;