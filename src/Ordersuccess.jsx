import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ordersuccess() {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/dashboard")
        
    }
    return (<>

        <i className="fa-solid fa-circle-check fa-8x d-flex justify-content-center mt-5 pt-5 colo" ></i>
        <p className='display-5 text-center fw-normal mt-4'>Order Placed Successfully</p>
        <p className='d-flex p-3 justify-content-center'><i className="fa-solid fa-circle-check fa-2x colo me-2 " ></i><span className='fw-normal h3'>Payment Confirmed</span></p>
        <p className='display-2  text-center coloo mt-4  fw-normal'>Thankyou for shopping with us! </p>
        <button onClick={() => { redirect() }} className="btn btn-outline-info btn-sm fw-normal  rounded-pill d-flex justify-content-center mx-auto mt-5">Back to home</button>
    </>)
}

export default Ordersuccess