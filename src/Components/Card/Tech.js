import React from "react";
import "./tech.css";

const Tech = () => {
  return (
    <>
      <div className="main-container1">
       
        <div className="fcontainer1">
          <div className="fitem1">
            <div className="row">
              <div className="col-2">
                <span>
                  <i className="fas fa-bug"></i>
                </span>
              </div>
              <div className="col-10">
                <p className="p1">Custom Enterprise Software Development</p>
                <p>
                  Support your business infrastructure with scalable software
                  that improves key facets of your enterprise. Get access to our
                  industry-specific knowledge to design, build, and scale your
                  new enterprise software solution.
                </p>
                <button>More View</button>
              </div>
            </div>
          </div>
          <div className="fitem1">
            <div className="row">
              <div className="col-2">
                <span>
                  <i className="fas fa-archive"></i>
                </span>
              </div>
              <div className="col-10">
                <p className="p1"> Enterprise Mobility</p>
                <p>
                  Services Our end-to-end enterprise mobility solutions allow
                  organizations to safely and efficiently manage the extensive
                  use of mobile devices that can support a large number of users
                  in their business environment.
                </p>
                <button>More View</button>
              </div>
            </div>
          </div>
          <div className="fitem1">
            {" "}
            <div className="row">
              <div className="col-2">
                <span>
                  <i className="fas fa-shield-alt"></i>
                </span>
              </div>
              <div className="col-10">
                <p className="p1"> Digital Transformation Services</p>
                <p>
                  Intellectsoft is your reliable digital transformation partner.
                  Leverage our expertise in using digital technologies to create
                  new or modify existing business processes to meet changing
                  market requirements.
                </p>{" "}
                <button>More View</button>
              </div>
            </div>
          </div>
          <div className="fitem1">
            <div className="row">
              <div className="col-2">
                <span>
                  <i className="fas fa-user-secret"></i>
                </span>
              </div>
              <div className="col-10">
                <p className="p1"> Data Management</p>
                <p>
                  Stay ahead with effective data management strategy, predictive
                  analytics, and intelligent automation using our in-depth
                  knowledge of emerging technologies such as Big Data, Data
                  Science, Cognitive Computing, Blockchain and more.
                </p>{" "}
                <button>More View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
