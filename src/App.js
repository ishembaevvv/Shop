import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "1.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "2.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Диван",
          img: "3.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofas",
          price: "200.39",
        },
        {
          id: 4,
          title: "Стол",
          img: "4.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "tables",
          price: "160.53",
        },
        {
          id: 5,
          title: "Стол",
          img: "5.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "tables",
          price: "399.00",
        },
        {
          id: 6,
          title: "Стол",
          img: "6.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "tables",
          price: "99.99",
        },
        {
          id: 7,
          title: "Стул",
          img: "7.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "39.50",
        },
        {
          id: 8,
          title: "Стул",
          img: "8.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "100.79",
        },
        {
          id: 9,
          title: "Стул",
          img: "9.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "15.83",
        },
        {
          id: 10,
          title: "Диван",
          img: "10.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofas",
          price: "250.00",
        },
        {
          id: 11,
          title: "Диван",
          img: "11.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofas",
          price: "150.00",
        },
        {
          id: 12,
          title: "Диван",
          img: "12.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "sofas",
          price: "379.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
