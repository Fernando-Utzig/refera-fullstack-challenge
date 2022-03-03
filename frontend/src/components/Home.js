import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import OrderList from "./OrderList";
import NewOrderModal from "./NewOrderModal";

import axios from "axios";

import { API_URL } from ".";

class Home extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    this.resetState();
  }

  getOrders = () => {
    axios.get(API_URL).then(res => this.setState({ orders: res.data }));
  };

  resetState = () => {
    this.getOrders();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <OrderList
              orders={this.state.orders}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewOrderModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;