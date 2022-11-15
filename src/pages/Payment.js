import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M4OD5EiIyleVT1b1SoYR5iixfud0mnVbZBT7p9c5e4UARMKG26flmgqMhNnptzD2jjCDnsWRM5QDRbCC2ma1F4300AcXg9x4A"
);
const Payment = ({ token }) => {
  return token ? (
    <div className="container">
      <Elements stripe={stripePromise}>
        <CheckoutForm token={token} />
      </Elements>
    </div>
  ) : (
    <Navigate to="/login" />
  );
  //   return (
  //     <div className="container">
  //       <Elements stripe={stripePromise}>
  //         <CheckoutForm />
  //       </Elements>
  //     </div>
  //   );
};

export default Payment;
