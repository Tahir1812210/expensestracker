import React from 'react';
import categories from './categories';

interface Props {
  selectedCategory: string; // Add selectedCategory as a prop
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      value={selectedCategory}
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
