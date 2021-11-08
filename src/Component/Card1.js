import React, { useState } from "react";
import ReactDOM from "react-dom";
import Services from "./Services";
import Industry from "./Industries";
import Technology from "./Technology";
import "./Card.css";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";



function Card1() {
    return (
        <Router>
            <div className="fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <NavLink exact activeClassName="active" to="/Services" ><h4>Services</h4> </NavLink>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <NavLink exact activeClassName="" to="/Technology" ><h4>Technology</h4> </NavLink>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3"><NavLink exact activeClassName="" to="/Industry" ><h4>Industries </h4></NavLink>
                        </div>
                    </div>
                </div>
                <hr />
                <Switch>
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/Industry" component={Industry} />
                    <Route exact path="/Technology" component={Technology} />
                </Switch>
            </div>
        </Router>
    )
}
export default Card1;
