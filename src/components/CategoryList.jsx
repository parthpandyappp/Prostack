import React from "react";

const CategoryList = ({ activeCategory, setActiveCategory }) => {
  const listOfCategories = [
    "Remote",
    "Community",
    "DevTools",
    "Education",
    "Productivity",
  ];

  const chipStyles = {
    chipNotActiveStyle:
      "border-2 border-button px-2 py-1 text-md rounded-full cursor-pointer",
    chipActiveStyle:
      "border-2 bg-button text-white px-2 py-1 text-md rounded-full cursor-pointer",
  };

  return (
    <div>
      <p className="text-paragraph font-semibold">Filter by Category:</p>
      <div className="flex gap-2 my-2">
        {listOfCategories.map((category, index) => {
          return (
            <span
              key={index}
              className={
                category === activeCategory
                  ? chipStyles.chipActiveStyle
                  : chipStyles.chipNotActiveStyle
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryList };
