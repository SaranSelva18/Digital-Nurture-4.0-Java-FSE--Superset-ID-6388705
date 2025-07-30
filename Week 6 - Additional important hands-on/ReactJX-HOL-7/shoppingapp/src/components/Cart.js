import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <table
        border="1"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'green',
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.item.map((item) => (
            <tr key={item.itemname}>
              <td>{item.itemname}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Cart;
