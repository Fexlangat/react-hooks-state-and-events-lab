
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [lightMode, setLightMode] = useState(false);

  function handleClick() {
    setLightMode((prevMode) => !prevMode);
  }

    // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = lightMode ? "App dark" : "App light";

  return (
    <div className={appClass} style={{ backgroundColor: lightMode ? "black" : "white" }}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{lightMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
