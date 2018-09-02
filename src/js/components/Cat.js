import React from "react";

class Cat extends React.Component {

  render() {
    const { image, name, price } = this.props.details;

    return (
      <div className="column">

        <li className="cat">
          <img src={image} alt={name} />
          <h3>
            {name}
            <span className="price">{price}</span>
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
