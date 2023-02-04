import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { env } from "./Config";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Login() {

    let navigate = useNavigate()

    let formik = useFormik({
        initialValues: {
            emailAddress: "",
            password: "",
        },

        // validate: (values) => {
        //     let errors = {}

        //     if (values.emailAddress.length < 5) {
        //         errors.emailAddress = "Please provide a valid email address"
        //     }

        //     if (values.password.length < 8) {
        //         errors.password = "Password must contain atleast 8 characters"
        //     }

        //     return errors
        // },
        onSubmit: async (values) => {
            // console.log(values);

            try {
                let loginData = await axios.post(`${env.api}/login`, values)
                // console.log(values)

                if (loginData.status === 200) {

                    if (values.emailAddress === "admin123@gmail.com") {
                        window.localStorage.setItem("app-token", loginData.data.token)
                        navigate("/adminportal")
                        toast.success("Admin logged in successfully")

                    }
                    else {
                        window.localStorage.setItem("app-token", loginData.data.token)
                        navigate("/dashboard")
                        toast.success("Logged in successfully")
                    }

                }
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);

            }
        },
    });

    return (
        <> <div className="bgim" style={{
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: "100vh"
        }}>

            <nav className="navbar navbar-expand-lg navbar-light">
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
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-md-end justify-content-center">
                            <div className="card border-0 formtrans col-md-4">
                                <h3 className="display-5 text-center mt-5 mt-md-3 text-success newfont" id="login">
                                    Login
                                </h3>
                                <div className="card-body">

                                    <form onSubmit={formik.handleSubmit} >

                                        {/* <!-- Username --> */}
                                        <div className="my-2">
                                            <label for="username" className="form-label  text-black h5 ">
                                                Username<span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="Username">
                                                    <i className="fa-solid fa-user"></i>
                                                </span>
                                                <input
                                                    id="username"
                                                    type="email"
                                                    className="form-control formtrans"
                                                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    placeholder="Enter the email"

                                                    value={formik.values.emailAddress}
                                                    onChange={formik.handleChange}
                                                    name="emailAddress"

                                                    aria-label="Username"
                                                    aria-describedby="Username"
                                                    required
                                                />
                                            </div>
                                            <span className="errcol fw-bold">{formik.errors.emailAddress}</span>
                                        </div>

                                        {/* <!-- Password --> */}
                                        <div className="my-3">
                                            <label for="Password1" className="form-label  text-black h5 ">
                                                Password<span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="password">
                                                    <i className="fa-solid fa-key"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    id="Password1"
                                                    className="form-control formtrans"
                                                    placeholder="Enter your password"
                                                    aria-label="password"

                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    name="password"
                                                    aria-describedby="password"
                                                    required
                                                />
                                            </div>
                                            <span className="errcol fw-bold">{formik.errors.password}</span>
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <div className="d-grid gap-2 pt-2">
                                            <button type="submit" className="btn btn-light">
                                                <i className="fa-solid fa-lock me-1"></i>
                                                <span className="lead fw-normal">Login</span>
                                            </button>
                                        </div>
                                    </form>
                          
                              <p className="mt-1 text-center"><Link to={"/resetpassword"} className="text-primary fw-bold text-center tdn">Forgot Password</Link></p>
                                    <div>
                                        <p class="text-center  text-black h5  mt-3">Don't have an account? <Link to={"/"} class="text-primary h5 tdn">Register now</Link></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

        </>
    );
}

export default Login;
