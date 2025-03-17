// import { useState } from "react";
import React, { Fragment } from "react";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co. </h1>
    </header>
  );
};

const Pizza = ({ item }) => {
  // if (item.soldOut) return null;
  return (
    <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
      <img src={item.photoName} alt={item.name}></img>
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <span>{item.soldOut ? "Sold Out" : item.price} </span>
      </div>
    </li>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaNum > 0 ? (
        <Fragment>
          <p>
            authentic italian pizza cuisine with 6 delicious recipes for you to
            experience
          </p>
          <ul className="pizzas">
            {pizzaData.map((item, index) => (
              <Pizza item={item} key={index} />
            ))}
          </ul>
        </Fragment>
      ) : (
        <p>we are currently closed for maintenance please visit again later</p>
      )}
    </main>
  );
};

function Order(props) {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()}. We are Open until {props.closeHour}{" "}
        come visit us !
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we are closed please visit us again between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;
