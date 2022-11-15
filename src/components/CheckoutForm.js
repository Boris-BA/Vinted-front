import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

import { useLocation } from "react-router-dom";

const CheckoutForm = ({ token }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { title, price } = location.state;

  //
  console.log("t", title);
  console.log(price);
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "JxWTTxUVChFmi0wEr11trmQe0LHcB3IbEGyEFP22aA7JGwsRcfwSdDd0nZOwaBqf",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://site--backend-vinted--2qgmjpqnw8yp.code.run/payment",
        // "http://localhost:4000/payment",
        {
          stripeToken: stripeToken,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      } else {
        alert("Une erreur est survenue");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
    }
  };
  //
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {isLoading ? (
        <p>Loading...</p>
      ) : completed ? (
        <p>Paiement effectué</p>
      ) : (
        <input type="submit" />
      )}
    </form>
  );
};

export default CheckoutForm;
