import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { fa } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ names}) => {

  const [elements, setElements] = useState([]);

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("meals"));
    if(getItems){
        setElements(Object.keys(getItems))
    }
  }, [names]);
 
  // handle clear cart
  const handleClearCart = () => {
    localStorage.removeItem("meals");
    localStorage.removeItem("total-quantity");
  };

  return (
    <div className="">
      <h1 className="font-bold text-3xl text-center border-b-4 border-b-white py-3">
        Cart
      </h1>

      <h2 className="font-semibold text-2xl mt-5 mb-2">Item name:</h2>

        <div className="h-[45vh] rounded-lg overflow-y-scroll bg-gray-600">
            {
                elements.map(element => <p className="text-xl font-semibold px-5 py-2 bg-warning rounded-md m-1">{element} <small></small></p>)
            }
        </div>

      <div className="py-3 absolute bottom-0 right-[30%]">
        <button onClick={handleClearCart} className="btn btn-error">
          Clear Cart 
          <FontAwesomeIcon className="ml-2" icon={faTrash} />
        </button>
      </div>
        <button className="rounded-md p-2 bg-warning absolute top-2 right-2">X</button>
    </div>
  );
};

export default Cart;
