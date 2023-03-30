import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SingleItem = (props) => {
  const { strMealThumb, strMeal, strArea } = props.item;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="card card-compact bg-base-100 p-5 border shadow-xl">
      <figure>
        <img className="w-80 rounded-xl" src={strMealThumb} alt="meal" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>Area: {strArea}</p>
        <div className="card-actions mt-4">
          <button
            onClick={() => handleAddToCart(strMeal)}
            className="btn btn-warning font-bold"
          >
            Order Now
            <FontAwesomeIcon className="ml-2" icon={faCheckCircle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
