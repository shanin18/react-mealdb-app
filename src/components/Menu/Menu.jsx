import React, {useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

const Menu = () => {
  const [items, setItems] = useState([]);

//   set the name to the cart elements 
  const [names, setNames] = useState("");

//   for new elements
  const [elements, setElements] = useState([]);

//   onClick
  const addToCart = (name) => {
    setNames(name)
  };

//  creating new elements
  useEffect(()=>{
    setElements([...elements, <p className=" font-semibold">{names}</p>]); 

  },[names]);

//   fetching data
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);

  return (
    <div className='mt-10 container mx-auto flex gap-4'>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2">
        {items.map((item) => (
          <Meal
            item={item}
            key={item.idMeal}
            addToCart={addToCart}
          ></Meal>
        ))}
      </div>

        <div className='w-1/5 border mr-2 px-3 rounded-xl'>
          <Cart names={names} elements={elements} ></Cart>
        </div>
    </div>
  );
};

export default Menu;
