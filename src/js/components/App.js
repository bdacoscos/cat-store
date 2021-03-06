import React from "react";
import "../../css/style.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Order from "../components/Order";
import cats from "../../cats";

class App extends React.Component {
  state = {
    cats: cats,
    order: {},
    filter: 'all'
  };



  changeFilter = evt => {

    const filters = ['all', 'black', 'orange', 'gray', 'white']
    // take a copy of the cats state?
    const cats = {...this.state.cats};
    const filteredCats = [];

    this.setState({ filter: evt.target.value });
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    console.log('Cat Added to Order');
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
    console.log(order);
  };

  updateMenu = () => {
    console.log('updateMenu called');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <Menu
            cats={this.state.cats}
            filter={this.state.filter}
            changeFilter={this.changeFilter}
            addToOrder={this.addToOrder}
          />
          <Order cats={this.state.cats} order={this.state.order} />
        </div>
      </div>
    );
  }
}

export default App;
