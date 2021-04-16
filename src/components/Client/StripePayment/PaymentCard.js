import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentCard = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null)
      handlePayment(paymentMethod.id);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className='text-secondary'>Use this example card number to payment Successfully <br/> - 4242 4242 4242 4242</p>
        <CardElement className='form-control' />
        {
          paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        {
          paymentSuccess && <p style={{color: 'green'}}>Your Payment Was Successful</p>
        } <br/>
        <button className='btn btn-success' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentCard;