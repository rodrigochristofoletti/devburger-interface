import Logo from "../../assets/Logo.svg"
import { CartSummary } from "../../components"
import { CartItems } from "../../components/CartItems"
import { Banner, Container, Content, Title } from "./style"

 export function Cart() {

    return (
        <Container>
            <Banner>
                <img src={Logo} alt="DevBurger Logo"/>
            </Banner>
            <Title>Checkout</Title>

            <Content>
                <CartItems />
                <CartSummary />
            </Content>
        </Container>
    )
 }