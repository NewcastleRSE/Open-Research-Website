import { useState, useRef, useEffect } from "react";
import React from "react";

const DropDownWithSearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const optionsContainerRef = useRef(null);

  // handles any click that is outside of the dropbox and hides the dropdown if so.
  const handleClickOutside = (event) => {
    if (
      optionsContainerRef.current &&
      !optionsContainerRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  // when the searchText changes (a user types), the scrollbar will scroll up to the top
  useEffect(() => {
    if (optionsContainerRef.current) {
      optionsContainerRef.current.scrollTop = 0;
    }
  }, [searchText]);

  // adds an event listener which listens for clicks outside of the dropdown box then removes the event listener when the component is no longer mounted.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // filters the options (the filter looks to see if the text is contained, not starts with)
  const displayOptions = () => {
    // props.options is a list of projects
    return (
      props.options
        // displays only the text which includes the search text as a substring
        .filter((option) =>
          option.title.toLowerCase().includes(searchText.toLowerCase())
        )
        // maps over the filtered options
        .map((option, index) => {
          // finds the first index of the search text in the option
          const searchIndex = option.title
            .toLowerCase()
            .indexOf(searchText.toLowerCase());
          // slice the option into three strings, a before match (everything up until the search text) a match (the search text) and an after match (everything after the search text)

          const beforeMatch = option.title.slice(0, searchIndex);
          const match = option.title.slice(
            searchIndex,
            searchIndex + searchText.length
          );
          const afterMatch = option.title.slice(
            searchIndex + searchText.length
          );

          // when a user clicks on an option is updates search input with the full dropdown option text, runs the onChange handler passed from the parent component, updates the search text and hides the dropdown options

          return (
            <div
              key={index}
              className="dropdown-option"
              role="listitem"
              onClick={(event) => {
                // get the id instead of the name to distinguish between identically named projects
                event.target.value = option.id;
                props.onChange(event);
                // update the search text with the title
                setSearchText(option.title);
                setShowDropdown(false);
              }}
            >
              {/* Render the before match, then make the match bold if it's longer than 5 characters. Finally render the aftermatch. This effectively highlights the the text that is being searched in the project title, in bold. */}

              {beforeMatch}
              {searchText.length >= 5 ? (
                <strong className="stronger">{match}</strong>
              ) : (
                match
              )}
              {afterMatch}
            </div>
          );
        })
    );
  };

  return (
    <div className="form-group">
      <span className={`error ${!props.error ? "hidden" : ""}`}>
        {props.error}
      </span>
      <div className="styled-select-search clearfix">
        <input
          type="text"
          name={props.name}
          className={`form-control ${props.error ? "red-outline" : ""}`}
          placeholder={props.placeholder}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={() => setShowDropdown(!showDropdown)}
          autoComplete="off"
        />
        {showDropdown && (
          <div ref={optionsContainerRef} className="dropdown-options">
            {displayOptions()}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownWithSearchBar;
