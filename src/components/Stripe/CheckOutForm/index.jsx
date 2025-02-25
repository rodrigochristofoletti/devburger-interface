import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { useCart } from "../../../hooks/cartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";



export function CheckOutForm() {
  const stripe = useStripe();
  const elements = useElements();

    const { cartProducts, clearCart} = useCart();
    const navigate = useNavigate();


  const {
    state: { dpmCheckerLink },
} = useLocation();


  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        console.error("Stripe or Elements contain any error, try it again")
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
        try {
            const products = cartProducts.map( (product) => {
                return { 
                  id: product.id, 
                  quantity: product.quantity, 
                  price: product.price, 
                };
            });
                    const {status} = 
                      await api.post('/orders',{ products },
                    {
                      validateStatus: () => true,
                    });
                      
                    if (status === 200 || status === 201) {
                      setTimeout(() => {
                      navigate(`/completedPayment?payment_intent_client_secret=${paymentIntent.client_secret}`)
                        clearCart()
                      }, 2000);
                      toast.success('Order complete :)')
                                                                                                       
                    } else if ( status === 400 || status === 409) {
                      toast.error('Order unsuccessful')
                    } else {
                      navigate(`/completedPayment?payment_intent_client_secret=${paymentIntent.client_secret}`)
                    }
                  } catch (error) {
                  toast.error( `'Ops, something went wrong, try it again' ${error}`)
                  }
    } else {
        setMessage("An unexpected error occurred.");
        toast.error(setMessage);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </div>
  );
}