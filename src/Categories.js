import React, { useState } from "react";

function Categories({ categories, filterCategory }) {
  const [clicked, setClicked] = useState(false);
  const [obj, setObj] = useState({});

  const toggleClick = (index, category) => {
    setObj({ position: index, opt: category });
    filterCategory(category);
    setClicked(true);
  };
  return (
    <div className="categories">
      {categories.map((category, index) => {
        console.log("obj is", obj);
        return (
          <button
            onClick={() => {
              toggleClick(index, category);
            }}
            type="button"
            key={index}
            className={`category__button && ${
              obj.opt === category && clicked ? "click-btn" : ""
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
