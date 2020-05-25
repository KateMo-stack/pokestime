import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
  // console.log(props);
  // setTimeout(()=> {
  //     props.history.push('/about')
  // }, 300000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke's Times</a>
        <ul className="right">
          {/* zamiast <a href> używa się <Link to> lub <NavLink> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

    /* <div className="React-aplication">
            <h1> This is a react aplication</h1>
            

        </div> */
  );
};

export default withRouter(Navbar);
