import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
    children: JSX.Element | JSX.Element[],
    title?: string,
}

const origin = (typeof window !== "undefined") ? window.location.origin : "";

export const Layout = ({ children, title }: Props) => {

    return (
        <>
            <Head>
                <title>{title ?? 'Pokemon App'}</title>
                <meta name="autor" content="Moises Barillas" />
                <meta name="description" content="Aplicación  de Pokemon's en el mundo" />
                <meta name="keywords" content="Pokemon's" />

                <meta property="og:title" content={`Información sobre el Pokemon ${title}`} />
                <meta property="og:description" content={`Información acerca del Pokemon ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
