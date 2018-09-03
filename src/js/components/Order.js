import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import { formatPrice } from "../../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const cat = this.props.cats[key];
    const count = this.props.order[key];

    if (!cat) return null;

    // render order on page
    return (
      <li className="item">
        <span>{count}</span>
        <span>x</span>
        <span>{cat.name}</span>
        <span>{formatPrice(cat.price)}</span>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const cat = this.props.cats[key];
      const count = this.props.order[key];
      return prevTotal + count * cat.price;
    }, 0);

    return (
      <div className="order column is-one-third">
        <div className="cart subtitle">
          Your Cart
          <ul className="items">{orderIds.map(this.renderOrder)}</ul>
          <b>Total: {formatPrice(total)}</b>
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
