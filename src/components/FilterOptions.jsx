import React from 'react';
import { useStore } from '../store';

const FilterOptions = () => {
  const { data, setStoreState } = useStore(['filter']);
  const [isHard, setIsHard] = React.useState(false);

  const handleFilterChangeEasy = (newFilter) => {
    setStoreState((prevState) => {
      const newState = { ...prevState, filter: newFilter };
      return newState;
    });
  };

  const handleFilterChangeHard = (newFilter) => {
    setStoreState((prevState) => {
      const newState = structuredClone(prevState);
      newState.filter = newFilter;
      return newState;
    });
  };

  const filterOptions = ['All', 'Pome', 'Berry', 'Citrus'];

  return (
    <div>
      <button onClick={() => setIsHard(!isHard)}>
        You're currently in <b>{isHard ? 'Hard' : 'Easy'}</b> mode
      </button>
      {filterOptions.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={data.filter === option}
            onChange={() =>
              isHard
                ? handleFilterChangeHard(option)
                : handleFilterChangeEasy(option)
            }
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );
};

export default FilterOptions;
