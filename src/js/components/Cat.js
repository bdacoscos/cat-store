import React from "react";
import "../../css/style.css";
import { formatPrice } from "../../helpers";

class Cat extends React.Component {

  render() {
    const { image, name, price } = this.props.details;

    return (
      <div className="column">

        <li className="cat">
          <img src={image} alt={name} />
          <h3>
            {name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
          <button onClick={() => this.props.addToOrder(this.props.index)}>
            Add Cat
          </button>
        </li>
      </div>
    );
  }
}

export default Cat;
