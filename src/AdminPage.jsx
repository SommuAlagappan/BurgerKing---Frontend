import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { env } from './Config';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AdminPage() {
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {

            description: "",
            calories: "",
            image: "",
            price: "",
            title: "",
            img: "",
            ing: "",
            img1: "",
            ing1: "",
            img2: "",
            ing2: "",
            img3: "",
            ing3: "",
            img4: "",
            ing4: "",
            img5: "",
            ing5: "",

        },
        validate: (values) => {
            let errors = {}

            if (values.image.length < 10) {
                errors.image = "Please insert image"
            }
            if (values.price.length < 4) {
                errors.price = "Please enter price"
            }
            if (values.title.length < 5) {
                errors.title = "Please enter title"
            }
            if (values.calories.length < 2) {
                errors.calories = "Please enter calories"
            }
            if (values.description.length < 10) {
                errors.description = "Please enter description"
            }

            return errors
        },

        onSubmit: async (values) => {
            console.log(values);

            try {
                let AddData = await axios.post(`${env.api}/product`, values)
                // console.log(registerData)

                if (AddData.status === 200) {
                    alert("Product added successfully")
                    navigate("/login");
                }

            } catch (error) {
                console.log(error);
                alert(error.response.data.message);

            }
        },
    });
    let logout = () => {
        window.localStorage.clear()
        toast.info("Logged out successfully")
        navigate("/")
    }

    return (
        <>
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


            <div className="container col-lg-4 " style={{ height: "100vh" }}>
                <div className="addproduct">
                    <div className='text-center h1 mt-4'>
                        <h3>Add Product</h3>
                    </div>

                    <form onSubmit={formik.handleSubmit}>

                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Title<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                name="title"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Enter title"
                                required
                            />
                            <span className="text-danger">{formik.errors.title}</span>
                        </div>

                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal">
                                Calories<span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                value={formik.values.calories}
                                onChange={formik.handleChange}
                                name="calories"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter calories"
                                required
                            />
                            <span className="text-danger">{formik.errors.calories}</span>
                        </div>

                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Price<span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                name="price"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter price"
                                required
                            />
                            <span className="text-danger">{formik.errors.price}</span>
                        </div>

                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Product Image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                name="image"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />
                            <span className="text-danger">{formik.errors.image}</span>
                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Product Description<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                name="description"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter description"
                                required
                            />
                            <span className="text-danger">{formik.errors.description}</span>
                        </div>

                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient1 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img}
                                onChange={formik.handleChange}
                                name="img"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient1 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing}
                                onChange={formik.handleChange}
                                name="ing"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient2 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img1}
                                onChange={formik.handleChange}
                                name="img1"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient2 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing1}
                                onChange={formik.handleChange}
                                name="ing1"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient3 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img2}
                                onChange={formik.handleChange}
                                name="img2"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient3 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing2}
                                onChange={formik.handleChange}
                                name="ing2"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient4 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img3}
                                onChange={formik.handleChange}
                                name="img3"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient4 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing3}
                                onChange={formik.handleChange}
                                name="ing3"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient5 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img4}
                                onChange={formik.handleChange}
                                name="img4"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient5 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing4}
                                onChange={formik.handleChange}
                                name="ing4"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name1" className="form-label lead fw-normal ">
                                Ingredient6 image<span className="text-danger">*</span>
                            </label>
                            <input
                                type="url"
                                value={formik.values.img5}
                                onChange={formik.handleChange}
                                name="img5"
                                className="form-control formtrans"
                                id="name1"
                                aria-describedby="emailHelp"

                                placeholder="Insert image file"
                                required
                            />

                        </div>


                        <div className="mb-3">
                            <label for="name" className="form-label lead fw-normal ">
                                Ingredient6 name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={formik.values.ing5}
                                onChange={formik.handleChange}
                                name="ing5"
                                className="form-control formtrans"
                                id="name"
                                aria-describedby="emailHelp"

                                placeholder="Enter ingredient name"
                                required
                            />

                        </div>

                        {/* <!-- Submit button --> */}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-info mb-5 mt-2">
                                <span className="fw-normal lead">Submit</span>

                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default AdminPage