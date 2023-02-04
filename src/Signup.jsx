import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { env } from "./Config";




function Signup() {

    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            fullName: "",
            mobileNumber: "",
            emailAddress: "",
            password: "",
        },
        // validate: (values) => {
        //     let errors = {}


        //     if (values.fullName.length < 3) {
        //         errors.fullName = "Please enter the fullname"
        //     }

        //     if (values.emailAddress.length < 5) {
        //         errors.emailAddress = "Please provide a valid email address"
        //     }

        //     if (values.mobileNumber.length < 10) {
        //         errors.mobileNumber = "Please provide a valid mobile number"
        //     }

        //     if (values.password.length < 8) {
        //         errors.password = "Password must contain atleast 8 characters"
        //     }

        //     return errors
        // },

        onSubmit: async (values) => {
            // console.log(values);

            try {
                let registerData = await axios.post(`${env.api}/register`, values)
                // console.log(registerData)

                if (registerData.status === 200) {
                    toast.success("User registered successfully")
                    navigate("/login");
                }

            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);

            }
        },
    });

    return (
        <>
            <div className="bgim" style={{
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
                            <div className="d-flex justify-content-md-end ms-md-5 ps-md-5 justify-content-center">
                                <div className="card border-0 formtrans col-md-4 ">
                                    <h3 className="display-6 text-center mt-5 mt-md-3 text-success newfont" id="login">
                                        Signup for free & avail Yummy Offers!
                                    </h3>
                                    <div className="card-body">

                                        <form onSubmit={formik.handleSubmit}>
                                            {/* <!-- Full name --> */}
                                            <div className="mb-3">
                                                <label for="name" className="form-label text-black h5 ">
                                                    Full name<span className="text-danger fw-bold">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formik.values.fullName}
                                                    onChange={formik.handleChange}
                                                    name="fullName"
                                                    className="form-control formtrans"
                                                    id="name"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                                <span className="errcol fw-bold">{formik.errors.fullName}</span>
                                            </div>


                                            {/* <!-- Mobile number --> */}
                                            <div className="mb-3">
                                                <label for="mobilenumber" className="form-label text-black h5 ">
                                                    Mobile number<span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control formtrans"
                                                    id="mobilenumber"
                                                    value={formik.values.mobileNumber}
                                                    onChange={formik.handleChange}
                                                    name="mobileNumber"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter your mobile number"
                                                    required
                                                />

                                                <span className="errcol fw-bold">{formik.errors.mobileNumber}</span>
                                            </div>

                                            {/* <!-- Email --> */}
                                            <div className="mb-3">
                                                <label for="email" className="form-label text-black h5  ">
                                                    Email address<span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formik.values.emailAddress}
                                                    onChange={formik.handleChange}
                                                    name="emailAddress"

                                                    className="form-control formtrans"
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter your email"
                                                    required
                                                />

                                                <span className="errcol fw-bold">{formik.errors.emailAddress}</span>
                                            </div>
                                            {/* <!-- Password --> */}
                                            <div className="my-3">
                                                <label for="exampleInputPassword1" className="form-label text-black h5  ">
                                                    Password<span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    name="password"
                                                    className="form-control formtrans"
                                                    id="exampleInputPassword1"
                                                    placeholder="Enter your password"
                                                    required
                                                />

                                                <span className="errcol fw-bold">{formik.errors.password}</span>
                                            </div>

                                            {/* <!-- Terms and Condition checkbox --> */}
                                            <div className="mb-3 form-check ">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="exampleCheck1"
                                                    required
                                                />
                                                <label className="form-check-label h6 text-black" for="exampleCheck1">
                                                    I agree to the terms and conditions
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <div className="d-grid gap-2">
                                                <button type="submit" className="btn btn-light">
                                                    <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>
                                                    <span className="fw-normal lead">Submit</span>

                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <p class="text-center text-black h5 ">Already a member, Click here for <Link to={"/login"} class="text-primary h5 tdn">Login</Link></p>

                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signup
