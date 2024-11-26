import s from "./SearchBox.module.css"

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={s.inputForm}>
      <p className={s.textFind }>Find contacts by name</p>
    <input className={s.input}
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
            />
            </div>
  );
};
export default SearchBox;