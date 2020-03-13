import React from "react";

function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.searchtype} Search</h2>
        <p>
          {" "}
          Search the directory! Enter someone's first or last name and it will
          sort it alphabetically for you by that letter.
        </p>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: "22px" }}>
          <label htmlFor="search">{props.searchtype} Search</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Users"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
