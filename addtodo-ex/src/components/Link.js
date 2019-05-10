import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Link = ({ /*active*/ filter, children, onClick }) => (
  // <button
  //   disabled={active}
  //   onClick={e => {
  //     e.preventDefault();
  //     onClick();
  //   }}
  //   style={{
  //     marginLeft: "4px"
  //   }}
  // >
  //   {children}
  // </button>
  <NavLink
    to={filter === "SHOW_ALL" ? "/" : `/${filter}`}
    onClick={e => {
      // e.preventDefault();
      onClick();
    }}
    activeStyle={{
      textDecoration: "none",
      color: "black",
      marginLeft: "4px"
    }}
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
