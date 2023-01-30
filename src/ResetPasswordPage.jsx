import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { env } from "./Config";

function ResetPasswordPage() {
  const test = useParams();
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/reset-password-page/${test.id}/${test.token}`, values);
      console.log(user)
      alert(user.data.message);
      navigate("/");
    },
  });
  return (
    <>
      <div className="container">
        <span className="row d-flex align-content-center justify-content-center ">
          <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
            {/* <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9"> */}
            <div className="card o-hidden border-0 shadow-lg  mt-5 transp pt-2 d-flex align-content-center">
              <div className="card-body p-2">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">
                      <div className=" card-header text-center">
                        <h1 className="h4  myname">Welcome To New Password Creating Page!</h1>
                      </div>

                      <form onSubmit={formik.handleSubmit}>
                        
                        
                       
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Enter New Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputEmail1"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </div>
                        <button type="submit" class="btn btn-primary myname">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </span>
      </div>
    </>
  );
}

export default ResetPasswordPage;
