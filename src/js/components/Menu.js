import React from "react";
import Cat from "../components/Cat";

class Menu extends React.Component {

  render() {
    return (
      <div className="column">

        <select onChange={this.props.changeFilter} value={this.props.value}>
          <option value="all">All Cats</option>
          <option value="black">Black Cats</option>
          <option value="orange">Orange Cats</option>
          <option value="gray">Gray Cats</option>
          <option value="white">White Cats</option>
        </select>

        <div className="cat-menu">
          <ul className="columns is-multiline">
            {Object.keys(this.props.cats).map(key => (
              <Cat
                key={key}
                index={key}
                details={this.props.cats[key]}
                addToOrder={this.props.addToOrder}
              />
            ))}
          </ul>
        </div>

      </div>
    )
  }
}

export default Menu;