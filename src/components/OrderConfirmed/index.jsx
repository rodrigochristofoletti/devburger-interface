import { Banner, Button, Container, Content, Message, Text, Title } from "./styles";
import Logo from "../../assets/Logo.svg";
import Checked from "../../assets/checked.svg";
import { useNavigate  } from "react-router-dom";
import { Footer } from "../Footer";


 export function CompletePayment() {

    const navigate = useNavigate();
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="DevBurger Logo"/>
            </Banner>
            <Title>Order confirmed</Title>

            <Content>
                <img src={Checked} alt="checked logo"/>
                <Message>Thanks</Message>
                <Text>Your order in being prepared and will be with you soon. Thank you
                </Text>

                <Button
                 onClick={()=> {
                    navigate(
                        {
                            pathname: "/",
                        },
)}}
                >Home page
                </Button>
            </Content>

            <Footer></Footer>
        </Container>

        
        
    )
 }