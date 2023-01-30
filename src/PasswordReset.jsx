import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "./Config";

function PasswordReset() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/resetpassword`, values);
      console.log(user);
      alert(user.data.message);
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
                                    Forgot Password
                                </h3>
                                <div className="card-body">

                                    <form onSubmit={formik.handleSubmit} >

                                        {/* <!-- Username --> */}
                                        <div className="my-2">
                                            <label for="username" className="form-label  text-black h5 ">
                                                Email Address<span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                
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

                                  

                                        {/* <!-- Submit button --> */}
                                        <div className="d-grid gap-2 pt-2">
                                            <button type="submit" className="btn btn-light">
                                                <span className="lead fw-normal">Submit</span>
                                            </button>
                                        </div>
                                    </form>
                                  
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

export default PasswordReset;