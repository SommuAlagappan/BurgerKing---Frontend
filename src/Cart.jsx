import React from "react";
import CartLoop from "./CartLoop";
import CartSummary from "./CartSummary";
import Navbar from "./Navbar";


function Cart({
    cart,
    addToCart,
    removeCart,
    total,
    count,
    setTotal,
    increment,
    decrement,
    setCount

}) {
    // console.log(cart)
    return (
        <>
            <Navbar count={count} />
            <div className="container">
                <div className="row mt-md-3 d-flex justify-content-center ">
                    <div className="col-md-8">
                        <div className="row">

                            {cart.map((item) => {
                                return (
                                    <CartLoop
                                        res1={item}
                                        handleRemoveCart={removeCart}
                                        handleAddToCart={addToCart}
                                        handleIncrement={increment}
                                        handleDecrement={decrement}
                                        total={total}
                                        setTotal={setTotal}
                                        count={count}
                                    ></CartLoop>
                                );
                            })}

                        </div>
                    </div>

                    <div className="col-md-4">
                        <CartSummary total={total} setCount={setCount} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
