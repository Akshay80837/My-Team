import React from "react";
import Industries from "./Industries";
import Services from "./Services";
import Tech from "./Tech";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function CardSheet() {
  return (
    <Router>
      <div className="cantainer">
       <div className="main-container">
       <NavLink exact activeClassName="active" to="/Services">
          Services
        </NavLink>

        <NavLink activeClassName="active" to="/Tech">
          Tech
        </NavLink>
        <NavLink activeClassName="active" to="/Industries">
          Industries
        </NavLink>
       </div>
        <hr />
        <Routes>
          <Route path="/Services" element={<Services />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Industries" element={<Industries />} />
        </Routes>
      </div>
    </Router>
  );
}
export default CardSheet;
