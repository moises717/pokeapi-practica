import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NavLink from 'next/link'
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme();


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '0px 20px',
            backgroundColor: theme?.colors?.gray900.value,
        }}>
            <Image width={50} height={50} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Icono de la aplicación" />

            <NavLink href={'/'} passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>ekémon</Text>
                </Link>
            </NavLink>
            <Spacer css={{ flex: 1 }} />
            <NavLink href="/favorites" passHref>
                <Link css={{ marginRight: 10 }}>
                    <Text color="white" >Favoritos</Text>
                </Link>
            </NavLink>

        </div>
    )
}

