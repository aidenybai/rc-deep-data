import React from 'react';
import { useStore } from '../store';
import FilterOptions from './FilterOptions';
import FruitItem from './FruitItem';

const FruitList = () => {
  const { data } = useStore(['fruits', 'filter']);

  const filteredFruits =
    data.filter === 'All'
      ? data.fruits
      : data.fruits.filter((fruit) => fruit.type === data.filter);

  return (
    <div>
      <h2>Fruit List</h2>
      <FilterOptions />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <FruitItem key={index} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
