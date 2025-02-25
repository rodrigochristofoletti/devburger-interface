import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { NavAdminMenu } from "../../components";
import { Container } from "./styles";

export function AdminLayout() {

    const userData = localStorage.getItem('devburger: userData');
    const { admin: isAdmin } = userData ? JSON.parse(userData) : {};

    return isAdmin ? (
        
        <Container>      
            <NavAdminMenu />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </Container>
            ) : (
            <Navigate to="/login" />
            );
}