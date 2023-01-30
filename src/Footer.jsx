import React from 'react'

function Footer() {
    return (
        <div className="mt-5 pb-4 bg-light">
            <div className="row">
                <div className="col-lg-4 mt-md-5">
                    <div className="text-black h6 text-center">
                        Copyright <i className="fa-regular fa-copyright"></i> 2023 BurgerKing. All rights reserved.
                    </div>
                </div>

                <div className="col-lg-4 mt-md-3 mt-2 ">
                    <div className="text-white text-center">
                        <div className="fs-4 text-dark mb-2 fw-bold">Follow us on</div>

                        <a
                            href="https://www.facebook.com/"
                            className=" text-primary"
                            target="_blank"
                        >
                            <i className="fa-brands fa-facebook-square fs-1"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            className="instagram "
                            target="_blank"
                        >
                            <i className="fab fa-instagram  fs-1 ms-3"></i>
                        </a>


                        <a href="https://twitter.com/" className=" text-primary" target="_blank">
                            <i className="fa-brands fa-twitter fs-1 ms-3"></i>
                        </a>


                        <a
                            href="https://www.youtube.com/"
                            className=" text-danger"
                            target="_blank"
                        >
                            <i className="fa-brands fa-youtube fs-1 ms-3"></i>
                        </a>



                    </div>
                </div>

                <div className="col-lg-4 text-white mt-4 mb-2 text-center">
                    <a href="https://www.apple.com/app-store/" target={'_blank'}><img src='assets/af.png' className='me-4' style={{ height: "57px", width: "155px" }} /></a>
                    <a href="https://play.google.com/" target={'_blank'}><img src='assets/gf.png' style={{ height: "60px", width: "160px" }} /></a>
                </div>
            </div>
        </div>

    )
}

export default Footer