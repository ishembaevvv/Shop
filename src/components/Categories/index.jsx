import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "sofas",
          name: "Диваны",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el, id) => {
          return (
            <div key={id} onClick={() => this.props.chooseCategory(el.key)}>
              {el.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
