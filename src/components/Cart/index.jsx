import React, { Component } from "react";
import MainContext from "../Context";
import { Button, Getsize, Text } from "../DetailProductPage/style";
import Navbar from "../Navbar";
import { AddRemove, Container, Title } from "./style";

class Cart extends Component {
  static contextType = MainContext;

  render() {
    const context = this.context;
    return (
      <>
        <Navbar />
        <Container>
          <Title>Cart</Title>
          {context?.cart?.map((val, index) => (
            <Container.Cart key={index}>
              <Title.Info>
                <h1>{val?.title.slice(0, 7)}</h1>
                <h2>{val.title.slice(7, 20)}</h2>
                <Text title>
                  {JSON.parse(window.localStorage.getItem("curr"))}
                  {val?.price}
                </Text>
                <Text.Mini cart>Size:</Text.Mini>
                <Getsize cart>
                  {val?.size.map((val, i) => (
                    <Button.Size key={i}>{val}</Button.Size>
                  ))}
                </Getsize>
                <Text.Mini style={{ margin: "0" }}>Color:</Text.Mini>
                <Getsize cart>
                  {val?.color.map((v, i) => (
                    <Button.Size key={i}>{v}</Button.Size>
                  ))}
                </Getsize>
              </Title.Info>
              <AddRemove>
                <Button.Size add>+</Button.Size>
                <Button.Size add>-</Button.Size>
              </AddRemove>
              <AddRemove image>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={val?.src}
                  alt="img"
                />
              </AddRemove>
            </Container.Cart>
          ))}
        </Container>
      </>
    );
  }
}

export default Cart;
