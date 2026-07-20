import React, { Component } from "react";
import Cart from "../Models/Cart";
import CartItem from "./CartItem";

class OnlineShopping extends Component {
  constructor() {
    super();

    this.items = [
      new Cart("Laptop", 65000),

      new Cart("Mobile", 25000),

      new Cart("Keyboard", 1200),

      new Cart("Mouse", 800),

      new Cart("Monitor", 15000),
    ];
  }

  render() {
    return (
      <div>
        <h1>Online Shopping</h1>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Item Name</th>

              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {this.items.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
