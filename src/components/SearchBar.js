export const SearchBar = ({ filter, onSearch }) => {
  return (
    <div>
      <input type="text" value={filter} onChange={onSearch} />
    </div>
  );
};
