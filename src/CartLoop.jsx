import React from "react";
import { useState, useEffect } from "react";

function CartLoop({
    res1,
    index,
    handleRemoveCart,
    handleAddToCart,

    total,
    // count,
    // handleIncrement,
    // handleDecrement,
    // setCount,
    setTotal
}) {
    const [count, setCount] = useState(1);


    let increment = (res1) => {
        setCount(count + 1);
        setTotal(total + res1.price);
    };

    let decrement = (res1) => {
        setCount(count - 1);
        setTotal(total - res1.price);
    };


    return (
        <>

            <div className="col-lg-4 col-6 d-flex justify-content-center mt-4">
                <div class="card border-0" style={{ width: "16rem" }}>
                    <img src={res1.image} class="card-img-top" alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title text-center">{res1.title}</h5>
                        <p class="card-text text-center">Price : ₹ {res1.price}</p>
                        <div className="text-center">
                            <button className="btn btn-dark btn-sm mb-1"
                                onClick={() => handleAddToCart(res1)}>
                                <i className="fas fa-plus"></i>
                            </button>
                            <button type="button" onClick={() => handleRemoveCart(res1)} className="btn btn-danger btn-sm ms-4 ms-md-5 mb-1">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}

export default CartLoop;
