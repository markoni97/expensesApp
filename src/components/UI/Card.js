import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  const classArray = [props.cls, classes.Card];
  const classString = classArray.join(' ');
  return <div className={classString}>{props.children}</div>;
};

export default Card;