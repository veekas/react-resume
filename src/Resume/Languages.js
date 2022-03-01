import React, { PropTypes } from "react";
import SidebarHeading from "./SidebarHeading";

const Languages = ({ items, title, separator }) => (
  <section style={style.main}>
    <SidebarHeading> {title} </SidebarHeading>
    <div style={style.list}>
      {items.map((item, key) => (
        <div
          style={style.expertise}
          key={key}
          // dangerouslySetInnerHTML={{
          //   __html: item + createSeparator(key, items, separator),
          // }}
        >
          {item}
        </div>
      ))}
    </div>
  </section>
);

function createSeparator(index, array, separator = ", ") {
  if (index < array.length - 1) {
    return separator;
  }

  return "";
}

const style = {
  main: {
    margin: "0.2rem 0 0.6rem 0",
  },
  expertise: {
    margin: "0.4rem 0 0 0",
  },
};

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
