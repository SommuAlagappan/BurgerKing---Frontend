import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { env } from "./Config";
import Navbar from "./Navbar";



function ViewProduct2({ count, addToCart, cart }) {


    const params = useParams();
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadProduct();
    }, []);

    let loadProduct = async () => {

        try {
            setLoading(true)
            let product = await axios.get(`${env.api}/product2/${params.id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("app-token"),
                },
            });
            console.log(product.data)
            setProductData(product.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    };

    return (<>
        <Navbar count={count} />
        {
            loading ? <div className="text-center mt-5" style={{ height: "18rem" }}>
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div> :
                <div className="container mt-5">
                    <div className="row">
                        <div className="card cool">
                            <div className="row g-0">
                                <div className="col-md-7 mt-md-3">
                                    <img src={productData.image} loading="lazy" className="img-fluid rounded-start" alt="..." />
                                </div>


                                <div className="col-md-5 mb-5">
                                    <div className="card-body cool ">
                                        <p className=" display-4 fw-bold text-center ">{productData.title}</p>

                                        <br />
                                        <p><span className=" lead fw-bold">{productData.calories}</span><span className="fst-italic lead "> calories</span></p>
                                        <p><span className="lead fw-normal ">Price : </span><span className="lead fw-bold ">₹ {productData.price}</span></p>
                                        <p className=" fw-normal lead mt-md-4">{productData.description}</p>


                                    </div>
                                    <button
                                        // disabled={cart.some((obj) => obj._id === productData._id)}
                                        onClick={() => addToCart(productData)}
                                        className="btn btn-outline-dark btn-sm ms-3"
                                    >
                                        <i className="fa-solid fa-cart-shopping me-1"></i>Add to Bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        }















    </>);
}

export default ViewProduct2;
