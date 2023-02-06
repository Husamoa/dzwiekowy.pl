import {Card, Grid, Row, Text} from "@nextui-org/react";

const Footer = () => {
    return (
        <Grid.Container gap={2}>
            <Card variant="bordered">
                <Card.Body>
                    <Row justify={"center"} align={"center"}>
                        <Text b>Copyright Tenis Stołowy Dźwiękowy &copy;</Text>
                    </Row>
                </Card.Body>
            </Card>
        </Grid.Container>

    )
}

export default Footer;
