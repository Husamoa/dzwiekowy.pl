import {Navbar, Text, Link, Image, useTheme} from "@nextui-org/react";
import {useTheme as useNextTheme} from 'next-themes';
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useRouter} from "next/router";

export default function Nav() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const menuItems = [
        {
            label: "Aktualności",
            href: "/blog"
        },
        {
            label: "Zacznij grać",
            href: "/start-play"
        },
        {
            label: "Zasady gry",
            href: "/rules"
        },
        {
            label: "Fundacja",
            href: "/foundation"
        },
        {
            label: "Kontakt",
            href: "/contact"
        },
    ];

    const {setTheme} = useNextTheme();
    const {isDark, type} = useTheme();
    return (
        <Navbar isCompact isBordered variant="floating">
            <Navbar.Toggle showIn={"xs"}/>
            <Navbar.Brand>
                <Text b color="inherit">
                    <Link color="inherit" href="/"><Image height={50} src={"./same_dlonie.png"} alt={"logo"}
                                                          objectFit={"cover"}/>TSD</Link>
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                hideIn="xs"
                variant="underline">
                {menuItems.map((item, index) => {
                    return <Navbar.Link isActive={currentRoute === item.href} key={item.href} href={item.href}>{item.label}</Navbar.Link>
                })}
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                        display: "none"
                    },
                }}
            >
            </Navbar.Content>
            <Navbar.Collapse>
                {menuItems.map((item, index) => (
                    <Navbar.CollapseItem
                        disableAnimation
                        key={item.href}
                        isActive={currentRoute === item.href}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
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
