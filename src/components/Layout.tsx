import React from "react";
import {Box} from "./Box";
import Nav from "@/components/navbar/Navbar";
import styles from "@/styles/Home.module.scss";

export const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({children}) => (
    <Box css={{maxW: "100%"}}>
        <Nav />
        <main className={styles.main}>{children}</main>
        {/*<Footer />*/}
    </Box>
);
