import React from "react";

function Search({ onSeachChange }) {

  function handleSearchChange(e) {
    onSeachChange(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
        type="text"
        onChange={handleSearchChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
