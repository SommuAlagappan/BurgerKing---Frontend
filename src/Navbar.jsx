import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Navbar({ count }) {

    let navigate = useNavigate()
    let logout = () => {
        window.localStorage.clear()
        toast.info("Logged out successfully")
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
                        alt="logo"
                        style={{ width: "45px", height: "45px" }}
                        className="d-inline-block align-text-bottom me-3"
                        loading="lazy"
                    />
                    <span className="display-5 fw-bold">Burger King</span>
                </span>

                {/* <!-- Toggle button --> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Menu --> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-2">

                        <li className="nav-item d-flex justify-content-center">
                            <Link to={"/dashboard"} className="nav-link active me-2 text-center mt-2">
                                Home
                            </Link>
                        </li>

                        <Link
                            type="button"
                            className="btn btn-outline-dark mt-2 me-2 "
                            to={"/cart"}>

                            <i className="fa-solid fa-cart-shopping me-2"></i>
                            Bag <span className='badge text-black rounded-circle bg-light fw-bolder'>{count}</span>

                        </Link>



                        <button onClick={logout}

                            type="button"
                            className="btn btn-outline-dark me-2 mt-2 "
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar