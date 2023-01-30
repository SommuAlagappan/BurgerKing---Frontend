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
            {/* <div className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img
                            src={res1.image}
                            className="img-fluid "
                            style={{ height: "150px", width: "200px" }}
                            alt="iphone"
                        />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body text-md-start text-center">
                            <h5 className="card-title fs-3 text-dark">{res1.title}</h5>
                            <p className="card-text fw-normal lead text-dark">
                                Price : ₹
                                <span className="lead fw-normal text-dark">
                                    {" "}
                                    {res1.price}
                                </span>
                            </p>

                            <button className="btn btn-dark btn-sm mb-1"
                                onClick={() => handleAddToCart(res1)}>
                                <i className="fas fa-plus"></i>
                            </button>

                            {/* <span className="mx-4 h5 text-white">{count}</span> */}

            {/* <button disabled={count === 1 ? true : false} className="btn btn-light btn-sm mb-1"
                  onClick={() => decrement(res1)}>
                  <i className="fas fa-minus"></i>
                </button> */}
            {/* <button type="button" onClick={() => handleRemoveCart(res1)} className="btn btn-danger btn-sm ms-4 ms-md-5 mb-1">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}



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
