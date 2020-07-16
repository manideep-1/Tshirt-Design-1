import React, { Component } from "react";
import Cards from "./Cards";

class WishList extends Component {
  render() {
    return (
      <>
        <h3 className="marginSet">My Wishlist</h3>
        <Cards></Cards>
      </>
    );
  }
}

export default WishList;
