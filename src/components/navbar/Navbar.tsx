import {Navbar, Text, Link, Image} from "@nextui-org/react";
import {useTheme} from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import {DarkModeSwitch} from "react-toggle-dark-mode";

export default function Nav() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (
        <Navbar isCompact isBordered variant="floating">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    <Link color="inherit" href="/"><Image height={50} src={"./same_dlonie.png"} alt={"logo"} objectFit={"cover"}/>TSD</Link>
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="underline">
                <Navbar.Link href="blog">Aktualności</Navbar.Link>
                <Navbar.Link href="start-play">Zacznij Grać</Navbar.Link>
                <Navbar.Link href="rules">Zasady Gry</Navbar.Link>
                <Navbar.Link href="foundation">Fundacja</Navbar.Link>
                <Navbar.Link href="contact">Kontakt</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <div>{type === "dark" ? 'Jasny' : 'Ciemny'}</div>
                <Navbar.Item>
                    <DarkModeSwitch
                        checked={isDark as boolean}
                        onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    />
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
