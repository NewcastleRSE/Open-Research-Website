import { useState, useRef, useEffect } from "react";

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

  // adds an event listener which istens for clicks outside of the dropdown box then removes the event listener when the component is no longer mounted.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // filters the options (the filter looks to see if the text is contained, not starts with)
  const displayOptions = () =>
    props.options
      .filter((option) =>
        option.value.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((option, index) => (
        <div
          key={index}
          className="dropdown-option"
          onClick={(event) => {
            event.target.value = option.value;
            props.onChange(event);
            setSearchText(option.value);
            setShowDropdown(false);
          }}
        >
          {option.value}
        </div>
      ));

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
