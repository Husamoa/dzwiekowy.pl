import {Button, Grid, Image, Spacer, Link} from "@nextui-org/react";
import styles from "@/styles/HomePage.module.scss";
import {IHomePageData} from "@/pages";

const HomePage = ({homePageData}: IHomePageData) => {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid md={6} xs={12}>
                <Image className={styles.image} src={homePageData?.featuredImage?.node.sourceUrl}/>
            </Grid>
            <Grid md={6} xs={12}>
                <div>
                    <h1>{homePageData?.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: homePageData?.content}} />
                    <Spacer y={1} />
                    <Link href={"/start-play"}><Button color="success" flat>Zacznij grać</Button></Link>
                </div>
            </Grid>
        </Grid.Container>
    )
}

export default HomePage;
