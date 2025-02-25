import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig";
import { CheckOutForm } from "../../components/Stripe/CheckOutForm";



export function CheckOut() {
    const {
        state: { clientSecret },
    } = useLocation();

   if(!clientSecret){
    return <div>Error - try it again please </div>
   }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckOutForm />
        </Elements>
    )
}