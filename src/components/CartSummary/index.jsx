import { Button } from "../Button";
import { Container } from "./style";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cartContext";
import {api} from "../../services/api"
import { FormatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function CartSummary() {

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryFee] = useState(300);

    const navigate = useNavigate();

    const { cartProducts, clearCart} = useCart();

    useEffect(() => {
        const sumOfAllItems = cartProducts.reduce( (acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumOfAllItems);
    }, [cartProducts]); 

    const submitOrder = async () => {
        const products = cartProducts.map( (product) => {
            return { 
              id: product.id, 
              quantity: product.quantity, 
              price: product.price, 
            };
        });

        try {
          const { data } = await api.post("/create-payment-intent", {products});
          
          navigate("/checkOut", {
            state: data,
          });
        } catch (err) {
          toast.error('Error, try it again', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }

        
    }

    return (
    <div>  
        <Container>
            <div className="container-top">
                <h2 className="title">Order Summary</h2>
                <p className="items">Items</p>
                <p className="items-price">{FormatPrice(finalPrice)}</p>
                <p className="delivery">Delivery Fee</p>
                <p className="delivery-fee">{FormatPrice(deliveryFee)}</p>
            </div>

            <div className="container-bottom">
                <p className="total">Total</p>
                <p className="amount">{FormatPrice(finalPrice + deliveryFee)}</p>
            </div>
        </Container>

            <Button onClick={submitOrder}>Order now</Button>
    </div> 
    )
}