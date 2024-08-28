import { Input } from "antd";
const { Search } = Input;

function SearchBar({ onSearch }) {
  return (
    <Search
      style={{
        width: 300,
        margin: "4px",
        marginBottom: "15px",
      }}
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      size="large"
    />
  );
}

export default SearchBar;
