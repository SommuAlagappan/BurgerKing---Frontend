import React, { useEffect } from 'react'
import Cards0 from './Cards0'
import Cards1 from './Cards1'
import Cards2 from './Cards2'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Footer from './Footer';


function Dashboard({ data0, data1, data2, loadData, count, loading }) {


    // useEffect(() => {
    //     loadData()
    // }, [])



    return (<>

        <Navbar count={count} />
        <Carousel />

        {

            loading ?
                <div className="text-center mt-5" style={{ height: "18rem" }}>
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div>


                    <div className="container">
                        <p className='display-3 fw-bold text-center mt-3'>Burgers</p>
                        <img src='assets/veggreen.png' className='mb-3' style={{ height: "60px", width: "60px" }} />

                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        data0.map((item) => {
                                            return <Cards0 item0={item} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <img src='assets/nonred.png' className='my-3' style={{ height: "60px", width: "60px" }} />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        data1.map((item) => {
                                            return <Cards1 item1={item} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <p className='display-3 fw-bold text-center mt-4'>Sweets and Treats</p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        data2.map((item) => {
                                            return <Cards2 item2={item} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

        }







    </>)
}

export default Dashboard