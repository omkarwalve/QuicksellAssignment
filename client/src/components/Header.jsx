import React from "react";

const Header = (props) => {
  const handleClick = (e) => {
    props.setOptions(e.target.name);
  };

  const handleSortClick = (e) => {};
  return (
    <div>
      <div className="navbar custom-navbar">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle custom-button"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.options}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              name="State"
              onClick={handleClick}
              class="dropdown-item"
              type="button"
            >
              State
            </button>
            <button
              name="User"
              onClick={handleClick}
              class="dropdown-item"
              type="button"
            >
              User
            </button>
            <button
              name="Priority"
              onClick={handleClick}
              class="dropdown-item"
              type="button"
            >
              Priority
            </button>
          </div>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle custom-button"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.sortBy}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              name="User"
              onClick={handleSortClick}
              class="dropdown-item"
              type="button"
            >
              User
            </button>
            <button
              name="Priority"
              onClick={handleSortClick}
              class="dropdown-item"
              type="button"
            >
              Priority
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
