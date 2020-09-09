import React from 'react';
import ReactDOM from 'react-dom';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ModalComponent from './ModalComponent';

import './css/CheckoutCardStyles.css';

/*
- import CheckoutForm into file using the form
- call loadStripe outside of components render to avoid recreating the Stripe obj on
  every render
    const stripePromise = loadStripe("pkey");
        - pkey = Publishable Key (found on Stripe user account API keys)
return (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
)
*/
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

class CheckoutCardForm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.movieTitle);
        this.state = {
            show: false,
            title: "",
            body: "",
            data: []
          };
    }

    getToken = () => {
        const token = document.cookie.split('; ')
            .find(row => row.startsWith('token')).split('=')[1];
        return token;
    }

    handleSubmit = async (event) => {
        console.log("Submit button here");
        event.preventDefault(); // stop page refresh and submission

        const { stripe, elements } = this.props;

        if (!stripe || !elements) {
            // Stripe.js not yet loaded
            // disable form submission until loaded
            return;
        }

        // Check if movie, passed from props, exists first

        const concession = document.getElementById("concession").value;

        const token = this.getToken();
        fetch('http://35.230.151.148:8000/payment', {
            method: "POST",
            mode: "cors",
            // credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                concession: concession
            })
        }).then((response) => response.json())
            .then((response) => {
                console.log(`Request success to /payment`);
                return response;
            })
            .then(({ client_secret, username }) => {
                stripe.confirmCardPayment(client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: username
                        }
                    }
                }).then((result) => {
                    console.log(`Request success to confirmCardPayment`);
                    if (result.error) {
                        console.log(result.error.message);
                        this.setState({
                            show: true,
                            title: 'Oh snap!',
                            body: 'Payment unuccessful'
                          });
                    } else {
                        // Payment processed
                        if (result.paymentIntent.status === 'succeeded') {
                            // Show success message to user
                            console.log("success");  
                            this.setState({
                                show: true,
                                title: 'Brilliant!',
                                body: 'Payment successful!',
                                
                              });

                            // Create a ticket !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                            fetch('http://35.230.151.148:8000/ticket', {
                                method: "POST",
                                mode: "cors",
                                // credentials: "include",
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + token
                                },
                                body: JSON.stringify({
                                    movieTitle: this.props.movieTitle,
                                    concession: concession,
                                    transId: result.paymentIntent.payment_method
                                })
                            }).then((response) => response.json())
                                .then((result) => {
                                    console.log(result);
                                });
                            // Send request to ticket route
                            // console.log(result);
                        }
                    }
                });
            }).catch(error => console.log(error));
    };

    handleClose = () => {
    
        this.setState({
          show: false
        });
      };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='container'>
                <div className="form-group row">
                <div class="col-sm-7">
                <label className='w-100'>
                    Card details
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </label>
                </div>
                </div>
                <div className="form-group row">
                <div class="col-sm-4">
                <label className='w-100'>
                    Concession
                    <select className='custom-select d-block w-100' id='concession'>
                        <option value='Child'>Child</option>
                        <option value='Adult'>Adult</option>
                        <option value='Senior'>Senior</option>
                        <option value='Student'>Student</option>
                    </select>
                </label>
                </div>
                </div>
                <button className='btn btn-qacinema' disabled={!this.props.stripe} >Confirm order</button>
                <ModalComponent
                    show={this.state.show}
                    title={this.state.title}
                    body={this.state.body}
                    data={this.state.data}
                    onClick={this.handleClose}
                    onHide={this.handleClose} />
            </form>
        )
    }
}

export default function CheckoutForm(props) {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => {
                return <CheckoutCardForm stripe={stripe} elements={elements} movieTitle={props.movieTitle} />
            }}
        </ElementsConsumer>
    );
}