import React, { PropTypes } from 'react';
// import Language from './Language';
import SidebarHeading from './SidebarHeading';

// const proficientScore = 0.5;
// const isProficient = (num) => num > proficientScore;

const Languages = ({ languages, title, separator }) => (
  <section style={style.main}>
    <SidebarHeading> {title} </SidebarHeading>
    <div style={style.list}>
      {languages.map((language, key) => (
        // <span key={key} dangerouslySetInnerHTML={{ __html: language + createSeparator(key, languages, ', ') }}>
        // </span>
        `${language}, ${key}`
      ))}
    </div>
  </section>
);

function createSeparator(index, array, separator = ', ') {
  if (index < array.length - 1) {
    return separator;
  }

  return '';
}

const style = {
  main: {
    margin: '0.2rem 0 0.6rem 0',
  },
};

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
