import React, { useEffect, useState } from "react";
import "./search.css";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const getData = async () => {
    const data = await fetch(
      `https://api.frontendeval.com/fake/food/${search}`
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for a Food here"
      />
      <div className="list">
        <span className="item">Amul</span>
      </div>
    </div>
  );
};

export default Search;
