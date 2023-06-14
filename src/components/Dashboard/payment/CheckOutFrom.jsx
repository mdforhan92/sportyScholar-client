import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';



const CheckOutForm = ({ price, enrolledClass }) => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.error('Error fetching client secret:', error);
                });
        }
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
            return;
        }

        setCardError(null);
        setProcessing(true);

        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                date: new Date,
                price: price,
                enrolledClass:{...enrolledClass},
            };

            axiosSecure
                .post('/enrolled', payment)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.paymentResult.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful',
                            text: 'You have successfully enrolled in this class',
                            confirmButtonText: 'Ok',
                        });
                        console.log('Payment added successfully');
                        navigate('/dashboard/payment-history');
                    }
                })
                .catch((error) => {
                    console.error('Error adding payment:', error);
                });
        }
    };


    return (
        <div>
            <form className="w-2/3 mx-auto m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-info btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-800">Transaction completed with transaction Id: <span className="text-black">{transactionId}</span></p>
            }
        </div>
    );
};

export default CheckOutForm;