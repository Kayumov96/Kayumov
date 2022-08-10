import React, { Component } from "react";
import { data } from "../../mock/mock";
import Navbar from "../Navbar";
import { Button, Container, Getsize, Imeg, Item, Text } from "./style";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.queryParams = new URLSearchParams(window.location.search);
    this.state = { id: this.queryParams.get("id") };
  }
  getProduct() {
    for (let i in data) {
      if (data[i].id == this.state.id) {
        return data[i];
      }
    }

    return 0;
  }

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Container.Mini>
            <Imeg mini src={this.getProduct().src} alt="img" />
            <Imeg mini src={this.getProduct().src} alt="img" />
            <Imeg mini src={this.getProduct().src} alt="img" />
          </Container.Mini>
          <Item>
            <Imeg src={this.getProduct().src} alt="image" />
          </Item>
          <Container.Info>
            <Text title>{this.getProduct().title.slice(0, 7)}</Text>
            <Text>{this.getProduct().title.slice(7, 20)}</Text>
            <Text.Mini>Size:</Text.Mini>
            <Getsize>
              {this.getProduct().size.map((val, index) => (
                <Button.Size key={index}>{val}</Button.Size>
              ))}
            </Getsize>
            <Text.Mini>Color:</Text.Mini>
            <Getsize>
              {this.getProduct().color.map((val, index) => (
                <Button.Size key={index}>{val}</Button.Size>
              ))}
            </Getsize>
            <Text.Mini>price:</Text.Mini>
            <h2 style={{ margin: "10px 0 20px 0" }}>
              {" "}
              {JSON.parse(window.localStorage.getItem("curr"))}
              {this.getProduct().price}
            </h2>
            <Button>add to cart</Button>
            <Text.Mini description>{this.getProduct().description}</Text.Mini>
          </Container.Info>
        </Container>
      </>
    );
  }
}

export default DetailPage;
