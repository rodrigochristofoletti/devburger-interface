import {  Route, Routes } from "react-router-dom";
import {  Cart, EditProducts, Home, Login, Menu, NewProduct, Orders, Products, SignUp } from "../containers";
import { CheckOut } from "../containers/Checkout";
import { CompletePage } from "../containers/CompletePayment";
import { UserLayout } from "../layouts/userLayout";
import { AdminLayout } from "../layouts/adminLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/completedPayment" element={<CompletePage />} />
            <Route path="/checkOut" element={<CheckOut />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
            < Route path="/admin/orders" element={<Orders />}/>
            < Route path="/admin/new-product" element={<NewProduct />}/>
            < Route path="/admin/edit-product" element={<EditProducts />}/>
            < Route path="/admin/products" element={<Products />}/>
        </Route>
       
<Route path="/login" element={<Login />} />
<Route path="/signUp" element={<SignUp />} />

</Routes>
    )
}

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: (
//             <>
//         <Header />
//         <Home />
//         <Footer />
//         </>)
//     },
//     {
//         path: '/login',
//         element: <Login />
//     }, 
//     {
//         path: '/signUp',
//         element: <SignUp />
//     },
//     {
//         path: '/menu',
//         element: (
//             <>
//         <Header />
//         <Menu />
//         <Footer />
//         </>)
//     },
//     {
//         path: '/cart',
//         element: <Cart />
//     },
//     {
//         path: '/checkOut',
//         element: <CheckOut />
//     },
//     {
//         path: '/completedPayment',
//         element: <CompletePage />
//     },
// ])