import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import "../css/SearchBar.css";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const api = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const res = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(res)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    api(value);
  };
  return (
    <div className="input-wrapper">
      <FcSearch id="search-icon" />
      <input
        placeholder="Type for search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
