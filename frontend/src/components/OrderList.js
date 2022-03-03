import React, { Component } from "react";
import { Table } from "reactstrap";
import NewOrderModal from "./NewOrderModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class OrderList extends Component {
  render() {
    const orders = this.props.orders;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Contact</th>
            <th>Agency</th>
            <th>Company</th>
            <th>Deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!orders || orders.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            orders.map(order => (
              <tr key={order.id}>
                <td>{order.contact}</td>
                <td>{order.agency}</td>
                <td>{order.company}</td>
                <td>{order.deadline}</td>
                <td align="center">
                  <NewOrderModal
                    create={false}
                    order={order}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={order.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default OrderList;