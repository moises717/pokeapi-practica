import type { GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'


import { pokeApi } from '../api'
import { Layout } from '../components/layouts/layout'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const Home = ({ pokemons }: Props) => {

  return (
    <>
      <Layout title='home'>
        <Grid.Container gap={2} justify="flex-start">

          {
            pokemons.map((poke) => (
              <PokemonCard key={poke.id} pokemon={poke} />
            ))
          }

        </Grid.Container>
      </Layout>
    </>
  )
}

/// solo se ejecuta en el servidor, una unica vez
export const getStaticProps: GetStaticProps = async (ctx) => {

  const resp = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150')
  const { results } = resp.data

  const list = results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }))

  return {
    props: {
      pokemons: list,
    },
  }
}


export default Home
