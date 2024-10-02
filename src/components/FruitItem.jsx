import React from 'react';

const FruitItem = ({ fruit }) => {
  console.log(fruit);
  return (
    <li>
      {fruit.name} ({fruit.type})
    </li>
  );
};

export default FruitItem;
