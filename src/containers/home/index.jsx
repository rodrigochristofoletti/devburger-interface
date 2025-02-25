import { OffersCarousel, CategorriesCarousel } from "../../components"
import { Banner, Container, Content } from "./styles"


export function Home() {
    return (
        <main>
            <Banner>
            <h1>Welcome!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategorriesCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
        </main>
    )
}

