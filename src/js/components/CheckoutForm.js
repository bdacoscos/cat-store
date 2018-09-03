import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }


  handleCouponValidation = (evt) => {
    const secretCode = 'HIREBRI';
    let codeEntered = evt.target.value;
    if (codeEntered) {
      // check if code equals secret code
      if (codeEntered.toUpperCase() === secretCode) {
        console.log('Nice, you got the coupon.');
        // decrement 50% off of order total
      }
    }
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="payment">
        <p>Ready to buy these cats? GIVE US YOUR MONEY.</p>
        <CardElement />
        <div>
          <label>Coupon Code:</label>
          <input
            type="text"
            placeholder="Enter coupon code."
            value={this.state.code}
            onChange={this.handleCouponValidation}
          />
        </div>

        <button onClick={this.submit}>Submit Payment</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);