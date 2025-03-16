// import { useState } from "react";

import "./App.css";
import React from "react";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co. </h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza
          name="pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and riccota cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="pizza Funghi"
          ingredients="Tomato, mushrooms, and mozzarella cheese"
          photoName="pizzas/funghi.jpg"
          price={12}
        />
        <Pizza
          name="pizza Margherita"
          ingredients="Tomato, and margherita cheese"
          photoName="pizzas/margherita.jpg"
          price={8}
        />
        <Pizza
          name="pizza prosciutto"
          ingredients="Tomato, prosciutto, and margherita cheese"
          photoName="pizzas/prosciutto.jpg"
          price={11}
        />
        <Pizza
          name="pizza Salamino"
          ingredients="Tomato, salamino, and margherita cheese"
          photoName="pizzas/salamino.jpg"
          price={12}
        />
        <Pizza
          name="pizza Focaccia"
          ingredients="Tomato, focaccia, and margherita cheese"
          photoName="pizzas/focaccia.jpg"
          price={6}
        />
      </div>
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently Open");
  // } else alert("We are currently Closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are Currently Open
    </footer>
  );
}

export default App;
