import React, { useEffect, useState } from "react";
import "./search.css";
import debounceQuery from "../utils/debounce";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const getData = async () => {
    const url = `https://api.frontendeval.com/fake/food/${search}`;

    const data: string[] = (await debounceQuery(url)) as unknown as string[];
    setList(data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="wrapper">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for a Food here"
        className="input"
      />
      {list && list.length > 0 && (
        <div className="list">
          {list.map((item, idx) => (
            <span className="item" key={item + idx}>
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
