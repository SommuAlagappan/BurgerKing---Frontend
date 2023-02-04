import React from "react";
import { env } from "./Config";
import { useNavigate } from "react-router-dom";

function CartSummary({ total, setCount }) {
    let navigate = useNavigate();

    const handleSubmit = () => {
        if (total === 0) {
            alert("Cart is empty");
        } else {
            var options = {
                key: `${env.KEY}`,
                key_secret: `${env.SECRET}`,
                amount: total * 100,
                currency: "INR",
                name: "Burger King",
                description: "For Testing purpose",

                handler: function (response) {

                    alert(`<bold>Transaction ID :</bold> ${response.razorpay_payment_id}`)
                    setCount(0)
                    navigate("/ordersuccess");
                },

                prefill: {
                    name: "Sommu Alagappan",
                    email: "sommu@gmail.com",
                    contact: "7358366336",
                },
                notes: {
                    address: "Razorpay Corporate office",
                },
                theme: {
                    color: "rgb(49, 91, 194)",
                },
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    };

    return (
        <>
            {total === 0 ? (
                <div className="text-center text-black display-6 fst-italic fw-normal ">
                    No items in the cart
                </div>
            ) : (
                <div className="col-md-10 mx-auto">
                    <div className="card border-0">
                        <div className="">
                            <h2 className="mb-0 text-center mt-4 text-black">Order Summary</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item h5 text-black d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Products price
                                    <span className="fw-normal lead fst-italic">₹ {total}</span>
                                </li>
                                <li className="list-group-item  h5 text-black d-flex justify-content-between align-items-center px-0">
                                    Shipping
                                    <span className="fw-normal lead fst-italic">
                                        Free Shipping
                                    </span>
                                </li>
                                <li className="list-group-item  h5 text-black d-flex justify-content-between border-0 px-0 mb-3">
                                    <div>
                                        <span className="fs-4 fw-bolder ">Total amount</span>

                                        <p className="mb-0 fw-light fst-italic">(including GST)</p>
                                    </div>
                                    <span className=" fs-4 fw-bolder fst-italic">₹ {total}</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => handleSubmit()}
                                type="button"
                                className="btn btn-lg text-black w-100 fw-bold bg-info fs-4"
                            >
                                Place your order
                            </button>
                            <div className="mt-3 bg-white rounded d-flex justify-content-center img-fluid mb-3">
                                {" "}
                                <img
                                    style={{ width: "300px", height: "80px" }}
                                    src="assets/Razorpay.png"
                                    alt="razorpay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartSummary;
