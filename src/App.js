import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Interactive List</h1>

        <div style={{ display: "flex", marginBottom: "10px", gap: "10px" }}>
          <input
              type="text"
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              style={{ flex: 1, padding: "8px" }}
          />
          <button onClick={handleAddItem} style={{ padding: "8px 12px" }}>
            Add
          </button>
        </div>

        <input
            type="text"
            placeholder="Filter items"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredItems.map((item, index) => (
              <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f9f9f9",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "5px",
                  }}
              >
                <span>{item}</span>
                <button
                    onClick={() => handleRemoveItem(index)}
                    style={{
                      background: "#ff4d4f",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                >
                  Remove
                </button>
              </li>
          ))}
        </ul>

        {filteredItems.length === 0 && (
            <p style={{ textAlign: "center", color: "#888" }}>No items found</p>
        )}
      </div>
  );
};

export default App;
