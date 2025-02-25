import { NavLinks } from "./navLinks"
import Logo from "../../assets/Logo.svg"
import { SignOut } from "@phosphor-icons/react"
import { Container, Footer, NavLinksContainer, NavLink, } from "./styles"
import { useUser } from "../../hooks/userContext"
import { useResolvedPath } from "react-router-dom"

export function NavAdminMenu() {

      const { logOut } = useUser();
      const { pathname } = useResolvedPath();

    return (
       <Container>
            <img src={Logo} alt="devburger logo"/>
            <NavLinksContainer>
                {NavLinks.map( link => (
                    <NavLink key={link.id}
                     to={link.path}
                     $isActive={pathname === link.path }
                     >
                        {link.icon}
                        <span>{link.label}</span>        
                    </NavLink>
                ))}
            </NavLinksContainer>
            <Footer>
                <NavLink to="/login" onClick={logOut}>
                    <SignOut />
                    <span>Exit</span>
                </NavLink>
            </Footer>
       </Container>
    )
}