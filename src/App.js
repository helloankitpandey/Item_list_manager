import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]); // State to store list items
  const [input, setInput] = useState(""); // State to store input field text

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]); // Add the trimmed input to the list
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="App">

      {/* Header Section */}
      <header className="app-header">
      <img src="https://shorturl.at/i5Hzc" alt="Logo" className="app-logo" />

        <h1>Item List Manager</h1>
      </header>

      {/* Main Content */}
      <div className="container">
        {/* Input Field and Button */}
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            className="input-field"
          />
          <button onClick={addItem} className="add-button">
            Add Item
          </button>
        </div>

        {/* Items List */}
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
