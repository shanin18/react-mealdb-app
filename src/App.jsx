import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [names, setNames] = useState("");

  // handle search
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // handle shopping cart
  const handleCartBtn = () => {
    setIsActive(!isActive);
  };

  // handle add to cart
  const handleAddToCart = (name) => {
    let meals = {};

    const storedMeals = localStorage.getItem("meals");
    if (storedMeals) {
      meals = JSON.parse(storedMeals);
    }

    const quantity = meals[name];

    if (!quantity) {
      meals[name] = 1;
    } else {
      const newQuantity = quantity + 1;
      meals[name] = newQuantity;
    }

    localStorage.setItem("meals", JSON.stringify(meals));

    // set totalQuantity
    let sum = 0;
    const items = JSON.parse(localStorage.getItem("meals"));
    const values = Object.values(items);
    for (const value of values) {
      sum = sum + value;
    }

    localStorage.setItem("total-quantity", sum);
    const totalQuantity = localStorage.getItem("total-quantity");

    setTotalQuantity(totalQuantity);
    setNames(name);
  };

  

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        inputText={inputText}
        handleCartBtn={handleCartBtn}
        totalQuantity={totalQuantity}
      ></Header>

      <Menu
        inputText={inputText}
        isActive={isActive}
        handleAddToCart={handleAddToCart}
        names={names}
      ></Menu>
    
    </div>
  );
}

export default App;
