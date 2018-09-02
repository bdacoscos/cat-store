import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";

class Order extends React.Component {

  renderOrder = key => {
    const cat = this.props.cats[key];
    const count = this.props.order[key];

    if (!cat) return null;

    // render order on page
    return (
      <li>
        <span>{count}</span> x
        {cat.name}
        {cat.price}
      </li>
    )

  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const cat = this.props.cats[key];
      const count = this.props.order[key];
      return prevTotal + count * cat.price;
    }, 0);

    return (
      <div className="order column is-one-third">
        <div>Your Cart</div>
        {orderIds.map(this.renderOrder)}
        <div>
          Total: {total}
        </div>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Order;
