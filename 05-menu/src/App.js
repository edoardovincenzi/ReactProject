import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [itemsMenu, setItemsMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const setCategory = (nameCategory) => {
    if (nameCategory === "All") {
      setItemsMenu(items);
    } else {
      setItemsMenu(items.filter((item) => nameCategory === item.category));
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} setCategory={setCategory} />
        <Menu itemsMenu={itemsMenu} />
      </section>
    </main>
  );
}

export default App;
