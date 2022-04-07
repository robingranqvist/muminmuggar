import "./SearchBar.css";

import { ReactComponent as IconSearch } from "@/assets/icons/icon__search-black.svg";

function SearchBar({ handleSearchMugs }) {
  return (
    <div className="input__wrapper">
      <img src={IconSearch} alt="Sök" className="icon__search" />
      <input
        type="text"
        placeholder="Sök mugg"
        className="input__search"
        onChange={(e) => handleSearchMugs(e)}
      />
    </div>
  );
}

export default SearchBar;
