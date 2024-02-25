import React, { Component } from "react";
import Item from "../Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el, id) => {
          return (
            <Item
              onShowItem={this.props.onShowItem}
              key={id}
              item={el}
              onAdd={this.props.onAdd}
            />
          );
        })}
      </main>
    );
  }
}

export default Items;
