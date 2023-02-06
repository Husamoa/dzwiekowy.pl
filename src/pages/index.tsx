import Head from 'next/head'
import HomePage from "@/components/HomePage";
import {getHomePageData} from "@/wp-cms/api";
import {IDataFromWP} from "@/types";

export interface IHomePageData {
    homePageData: IDataFromWP
}

export default function Home({homePageData}: IHomePageData) {
    return (
        <>
            <Head>
                <title>Tenis Stołowy Dźwiękowy</title>
                <meta name="description" content="Stworzony z myślą o osobach niewidomych..."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.png"/>
            </Head>
            <HomePage homePageData={homePageData}/>
        </>
    )
}

export const getStaticProps = async () => {
    const homePageData = await getHomePageData();
    return {
        props: {
            homePageData
        }
    };
};

