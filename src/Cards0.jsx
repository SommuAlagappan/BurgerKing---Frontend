import React from 'react'
import { Link } from 'react-router-dom'


function Cards0({ item0 }) {
    return (<>
        <Link to={`/product/${item0._id}`} className="col-lg-3 col-6 d-flex cards justify-content-center inheri cursor ">
            <div className="card container border-0" style={{ width: "36rem" }}>
                <img src={item0.image} loading="lazy" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-black">{item0.title}</h5>


                </div>
            </div>
        </Link>

    </>)
}

export default Cards0