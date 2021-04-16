import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie0YiCybs1eYJ8ib7G2nWe5LNKoXoDoQZaLKs4ZBsBtVf8VTmAhWXwba7ANYUgMWyE0kaj0a5p3Wqv4zENrgsOZ001MKQdHXm');

const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            {/* <SplitCardForm></SplitCardForm> */}
            <PaymentCard handlePayment={handlePayment}></PaymentCard>
        </Elements>
    );
};

export default StripePayment;