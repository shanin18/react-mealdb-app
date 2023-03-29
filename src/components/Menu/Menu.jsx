import React, {useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

const Menu = ({inputText}) => {
  const [meals, setMeals] = useState([]);

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
    setElements([...elements, <p key={elements.length} className=" font-semibold">{names}</p>]); 

  },[names]);

//   fetching data
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [inputText]);

  return (
    <div className='mt-10 container mx-auto flex gap-4'>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2">
        
        { meals?.map((meal) => (
          <Meal
            item={meal}
            key={meal.idMeal}
            addToCart={addToCart}
          ></Meal>
        ))}
      </div>

      <div className='w-1/5 border mr-2 px-3 rounded-xl h-[86vh]'>
        <Cart names={names} elements={elements} ></Cart>
      </div>
    </div>
  );
};

export default Menu;
