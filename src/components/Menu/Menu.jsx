import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Menu.css";

const Menu = ({
  inputText,
  isActive,
  handleAddToCart,
  names
}) => {
  const [meals, setMeals] = useState([]);

  //   fetching data
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [inputText]);

  return (
    <div className="mt-10 container mx-auto flex gap-4 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto">
        {meals?.map((meal) => (
          <Meal
            item={meal}
            key={meal.idMeal}
            handleAddToCart={handleAddToCart}
          ></Meal>
        ))}
      </div>

      <div
        className={`bg-black text-white w-[300px] h-[80vh] border mr-2 px-3 rounded-xl  absolute transition-duration  ${
          isActive ? "right-[-7px]" : "right-[-316px]"
        }`}
      >
        <Cart names={names} ></Cart>
      </div>
    </div>
  );
};

export default Menu;
