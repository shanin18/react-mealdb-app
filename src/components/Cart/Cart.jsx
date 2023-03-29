import React from 'react';

const Cart = (props) => {
    const elements = props.elements;
    
    return (
        <div>
            <h1 className='font-bold text-3xl text-center border-b-4 border-b-slate-700 py-3'>Cart</h1>

            <h2 className='font-semibold text-2xl mt-5 mb-2'>Item name:</h2>
            <div>
                {elements}
            </div>
        </div>
    );
};

export default Cart;