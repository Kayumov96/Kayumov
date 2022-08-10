import React, { Component } from "react";
import { data } from "../../mock/mock";
import Navbar from "../Navbar";
import { Container, Imeg, Item } from "./style";

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
          {this.getProduct().category} <br />
          {this.getProduct().color} <br />
          {this.getProduct().description} <br />
          {this.getProduct().price} <br />
        </Container>
      </>
    );
  }
}

export default DetailPage;
