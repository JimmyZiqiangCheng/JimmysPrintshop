import { InputField, SearchBarContainer } from "./searchbar-styles";
const SearchBar = ({ onSearchChange, placeholder, className }) => {
  return (
    <SearchBarContainer>
      <img src="/icons/search.svg" alt="search-icon" />
      <InputField
        className={className}
        placeholder={placeholder}
        type="search"
        onChange={onSearchChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
