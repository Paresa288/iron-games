import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    navigate(value ? `/?search=${encodeURIComponent(value)}` : "/");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className="d-flex shadow" role="search">
      <input type="search" className="form-control" placeholder="Search" value={query} onChange={handleChange} aria-label="Search"/>
      <button className="btn rounded" type="submit" onSubmit={handleSubmit}><i className="fa fa-search"></i></button>
    </form>
  );
}

export default SearchBar;