import React, { useState } from "react";
import { FaCartShopping, FaDove } from "react-icons/fa6";
import Order from "../Order";

const showOrder = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el, id) => {
        return <Order onDelete={props.onDelete} key={id} item={el} />;
      })}
      <p className="summa">
        Сумма: <span>{new Intl.NumberFormat().format(summa)}$</span>
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет!</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        {/* логотип */}
        <span className="logo">House Staff</span>

        {/* меню */}
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrder(props) : showNothing()}
          </div>
        )}
      </div>

      {/* презетнация */}
      <div className="presentation"></div>
    </header>
  );
}
