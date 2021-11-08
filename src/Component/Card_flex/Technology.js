import React from "react";
// import BluetoothDriveIcon from "../../@mui/icons-material/BluetoothDrive";
import "./Card.css";

const Technology = () => {
  return (
    <div className="grand_parent">
      {/* first card start */}
      <div className="parents">

        <div className="child ">
          <div className="row">
            <div className="col-4">
              <span ><i className="fas fa-mail-bulk icn"></i></span>
            </div>
            <div className="col-8">
              <h1 className="heading">Cloud Computing</h1>
              <p className="txt">Use cloud computing solutions to create a scalable, flexible,
                and connected enterprise environment</p>
              <button className="hide">Read More</button>
            </div>
          </div>
        </div>

        <div className="child">
          <div className="row">
            <div className="col-4">
              <span ><i className="fas fa-snowflake icn"></i></span>
            </div>
            <div className="col-8">
              <h1 className="heading">Blockchain Development</h1>
              <p className="txt">
                Introduce the highest level of security and automate your operations with
                our blockchain solutions.</p>
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
              <p className="txt">
                Build the product you need on time with an experienced team
                that uses a clear and effective design process.</p>
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
              <span ><i className="fas fa-envelope-open-text icn"></i></span>
            </div>
            <div className="col-8">
              <h1 className="heading">Internet Of Things</h1>
              <p className="txt">Internet Of Things
                Secure IoT solutions will let you gather Big Data, optimise key processes,
                and improve decision-making</p>
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

export default Technology;