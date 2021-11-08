import React from "react";
import "./Card.css";

const Services = () => {
    return (
        <div className="grand_parent">
            {/* first card start */}
            <div className="parents">
                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-envelope-open-text icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Enterprise Software Development</h1>
                            <p className="txt">Create complex enterprise software, ensure reliable
                                software integration, modernise your legacy system.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-cogs icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Mobile App Development</h1>
                            <p className="txt">Create an impactful mobile app that fits your brand
                                and industry within a shorter time frame.</p>
                            <button className="hide">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="child">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-envelope-open-text icn"></i></span>
                        </div>
                        <div className="col-8">
                            <h1 className="heading">Dedicated Development Team</h1>
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

                <div className="child" id="fourth">
                    <div className="row">
                        <div className="col-4">
                            <span ><i className="fas fa-user-alt icn"></i></span>
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
                            <span ><i className="fas fa-envelope-open-text icn"></i></span>
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
                            <span ><i className="fas fa-envelope-open-text icn"></i></span>
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

export default Services;