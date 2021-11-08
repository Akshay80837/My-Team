import React from "react";
// import BluetoothDriveIcon from "../../@mui/icons-material/BluetoothDrive";
import "./Card.css";

const Industries = () => {
    return (
        <div className="grand_parent">



            {/* first card start */}
            <div className="parents">

                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className='fas fa-tools icn'></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Construction</h1>
                            <p className="txt">Construction
                                Advanced software solutions that take Construction into the Digital Era.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-medkit icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Healthcare</h1>
                            <p className="txt">Patient-friendly software that empowers healthcare industry workers.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-shopping-cart icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Retail & ECommerce</h1>
                            <p className="txt">Hire a loyal software development team with niche
                                skills and deep expertise.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* first card end */}


            {/* first card start */}
            <div className="parents">

                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-business-time icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">IT Consulting</h1>
                            <p className="txt">Trust our top minds to eliminate workflow pain points, implement new tech,
                                and consolidate app portfolios.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-bezier-curve icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">UX / UI Design</h1>
                            <p className="txt">Build the product you need on time with an experienced team that
                                uses a clear and effective design process.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-project-diagram icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">QA & Testing</h1>
                            <p className="txt">Turn to our experts to perform comprehensive, multi-stage testing and
                                auditing of your software.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* first card end */}





        </div>

    )
}

export default Industries;