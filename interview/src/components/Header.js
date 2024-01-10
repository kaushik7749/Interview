import React from "react";
import { BsCart, BsPhone } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-light p-3 text-end shadow-sm">
      <div className="d-flex align-items-center">
        <span className="me-auto fs-5">Shopping App</span>
        <BsCart size={30} className="me-3" />
        <BsPhone size={30} />
      </div>
    </header>
  );
};

export default Header;
