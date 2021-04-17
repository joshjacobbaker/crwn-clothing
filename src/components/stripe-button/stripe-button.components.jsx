import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51IhJ4DIw5gzPMA7qDXMGkd78O0FiYI3eiK8BRGt7qJAOXd3NjX4t4ONUrbgfNX08zEl0uTfeacAtZeJ5qpZyMOYr00cirigvjD'

  //Pass token to backend to create the charge
  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken} 
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton