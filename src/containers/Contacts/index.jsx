import { Container, Content, Email } from "./styles";

export function Contacts() {
    return (
        <Container>
           <Content>
                <h1>Contacts</h1>
                <p>For inquiries, please reach out to us at:</p>
                <Email>admin@devburger.com</Email>
            </Content>
        </Container>
    )
}