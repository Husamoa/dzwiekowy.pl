import Head from 'next/head'
import HomePage from "@/components/HomePage";

interface IHomePageData {
    homePageData: {
        topbar: { email: string, phoneNumber: string }
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Tenis Stołowy Dźwiękowy</title>
                <meta name="description" content="Stworzony z myślą o osobach niewidomych..."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.png"/>
            </Head>
            <HomePage/>
        </>
    )
}

