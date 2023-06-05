import React from 'react';

const Item = ({ code, title, details }) => {
  console.log('ITem Screen: ', code, title);
  return (
    <div>
      <div>Code: {code}</div>
      <div>Name: {title}</div>
      <div><p>Details: {details}</p></div>
    </div>
  );
};

export default Item;
