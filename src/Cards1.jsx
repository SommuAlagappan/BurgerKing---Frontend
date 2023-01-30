import React from 'react'
import { Link } from 'react-router-dom'


function Cards1({ item1 }) {
    return (<>
        <Link to={`/product1/${item1._id}`} className="col-lg-3 col-6 d-flex cards justify-content-center inheri cursor ">
            <div className="card container border-0" style={{ width: "36rem" }}>
                <img src={item1.image} loading="lazy" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-black">{item1.title}</h5>


                </div>
            </div>
        </Link>

    </>)
}

export default Cards1