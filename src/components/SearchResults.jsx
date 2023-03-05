import React from "react";
import "../css/SearchResults.css";

function SearchResults({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            className="search-result"
            onClick={(e) => alert(`You clicked on ${result.name}`)}
            key={id}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
