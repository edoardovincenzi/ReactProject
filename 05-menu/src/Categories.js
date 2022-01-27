import React from "react";

const Categories = ({ categories, setCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => setCategory(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
