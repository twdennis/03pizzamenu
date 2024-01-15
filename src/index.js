import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import pizzaData from "./data";

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
  // const headerStyle = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const headerStyle = {};
  return (
    <header className="header">
      <div>
        <h1 style={headerStyle}>Fast React Pizza Co.</h1>
      </div>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Sourdough Naples-style pizza, with 6 amazing pizzas to
            choose from. Baked in our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu - hold tight!</p>
      )}
    </div>
  );
}
function Pizza({ pizzaObj }) {
    return (
      <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
    );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  const timeRemaining = closeHour - hour;

  return (
    <footer>
      {isOpen ? (
        <Order
          closeHour={closeHour}
          timeRemaining={timeRemaining}
          openHour={openHour}
        />
      ) : (
        <p>We're now closed. Come back again tomorrow from {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour, timeRemaining, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 till {closeHour}:00. Please come and visit
        us in store, or order online!
      </p>
      <button className="btn">
        You have {timeRemaining} hours left to order
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
