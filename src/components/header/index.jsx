import { Container, Content, HeaderLink, LinkContainer, LogOut, Navigation, Options, Profile } from "./style";
import { ShoppingCart, User} from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/userContext";

export function Header () {

    const navigate = useNavigate();
    const {pathname} = useResolvedPath();
    const { logOut, userInfo } = useUser();

    function logOutUser() {
            logOut();
            navigate('/login');     
    }

    return (

       <Container>
        <Content>
        <Navigation>
<div>
    <HeaderLink to="/" $isActive = {pathname === "/"}>
        Home
    </HeaderLink>
    <hr></hr>
    <HeaderLink>
        Contacts
    </HeaderLink>
    <hr></hr>
    <HeaderLink to="/menu" $isActive = {pathname === "/menu"}>
        Menu
    </HeaderLink>
</div>
        </Navigation>

        <Options>
            <Profile>
            <User color="#ffffff" size={24}/>
                <div>
                    <p>Hello, <span>{userInfo.name}</span></p>
                    <LogOut onClick={logOutUser}>Logout</LogOut>
                </div>
            </Profile>

            <LinkContainer>
        < ShoppingCart color="#ffffff" size={24}/>
            <HeaderLink to="/cart">
                Cart
            </HeaderLink>
        </LinkContainer>
        </Options>

       
        </Content>
       </Container>
    )
}