import React, { PropTypes } from "react";
import Link from "../ui/Link";

const Header = ({ firstName, lastName, subheader, website }) => {
  const { title } = subheader; // qualifier

  return (
    <section style={style.main}>
      <h1 style={style.h1}>{`${firstName} ${lastName}`}</h1>
      <span style={style.subheader}>
        <span>
          {/* qualifier */} {title}|
          <Link to={website.link} style={{ padding: 0 }}>
            <b>{website.name}</b>
          </Link>
        </span>
        <i style={style.silly}>
          This resume was <s>written</s> deliberately over-engineered in React
          <Link to="https://github.com/veekas/react-resume">
            <i className="fa fa-github" style={style.icon}></i>
          </Link>
        </i>
      </span>
    </section>
  );
};

const style = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "10px 0 0 0",
    flex: "1 1 auto",
    fontSize: "1.6rem",
    marginBottom: "-1rem",
  },
  h1: {
    color: "rgb(21, 44, 85)",
    display: "block",
    justifyContent: "center",
    fontSize: "3.4rem",
    minWidth: "fit-content",
  },
  subheader: {
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    color: "rgb(77, 100, 141)",
    marginRight: "20px",
    marginTop: "5px",
  },
  a: {
    float: "right",
    fontSize: "0.8rem",
    display: "block",
    color: "rgb(77, 100, 141)",
  },
  icon: {
    fontSize: "1rem",
    lineHeight: "1rem",
    width: "1rem",
    height: "1rem",
    color: "rgba(77, 100, 141, 1)",
  },
  silly: {
    fontSize: "1rem",
  },
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  subheader: PropTypes.object.isRequired,
};

export default Header;
