import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import data from "./data";
import Categories from "./Categories";
import "./App.css";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      // setMenuItems(data);
      setMenuItems(data);
      return;
    }
    setMenuItems(data.filter((item) => item.category === category));
  };

  return (
    <div>
      <Header />
      <Categories
        categories={categories}
        setCategories={setCategories}
        filterCategory={filterCategory}
      />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
