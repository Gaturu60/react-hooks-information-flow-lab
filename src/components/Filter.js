import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category">Filter by category: </label>
      <select id="category" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="dairy">Dairy</option>
      </select>
    </div>
  );
};

export default Filter;