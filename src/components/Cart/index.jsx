import React, { Component } from "react";
import MainContext from "../Context";
import Navbar from "../Navbar";
import { Container, Title } from "./style";

class Cart extends Component {
  static contextType = MainContext;

  render() {
    const context = this.context;
    return (
      <>
        <Navbar />
        <Container>
          <Title>Cart</Title>
          {context?.cart?.map((val) => (
            <h1>{val?.title}</h1>
          ))}
        </Container>
      </>
    );
  }
}

export default Cart;
