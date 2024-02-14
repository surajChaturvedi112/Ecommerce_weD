import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="nav-ul">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/add">Add Product</Link></li>
        <li> <Link to="/update">Update Product</Link></li>
        <li> <Link to="/profile">profie</Link></li>
        <li> <Link to="/login">Login</Link></li>
      </ul>
    </>
  );
};

export default Nav;