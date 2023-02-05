import {Button, Grid, Image, Spacer, Link} from "@nextui-org/react";
import styles from "@/styles/HomePage.module.scss";

const HomePage = () => {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={6}>
                <div>
                    <h1>Tenis Stołowy Dźwiękowy</h1>
                    <h2>Z myślą o osobach niewidomych...</h2>
                    <p>Gra stworzona z myślą o osobach niewidomych. Jej twórcą jest wieloletni pedagog, nauczyciel
                        wychowania fizycznego i rehabilitant Specjalnego Ośrodka Szkolno-Wychowawczego dla Dzieci
                        Niewidomych w Owińskach, Leszek Szmaj.</p>
                    <Spacer y={1} />
                    <Link href={"/start-play"}><Button color="success" flat>Zacznij grać</Button></Link>
                </div>
            </Grid>
            <Grid xs={6}>
                <Image className={styles.image} src={"./images/zdjecie_glowna.jpg"}/>
            </Grid>
        </Grid.Container>
    )
}

export default HomePage;
