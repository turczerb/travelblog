import { useContext, useEffect, useState } from "react";
import styled from "styled-components"; //css

const Bar = styled.input`
  border-radius: 20px;
  padding: 8px;
  margin-bottom: 25px;
  margin-top: 45px;
  width: 40%;
`;

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    //console.log("change function running");
    if (search.length > 1) {
      //console.log("filter function running");
      return filterData(props.data);
    } else {
      return props.setFilterData(props.data);
    }
  };

  const filterData = (dataSet) =>
    props.setFilterData(
      dataSet.filter((el) => {
        console.log(dataSet);
        //if no input the return the original
        if (search === "") {
          return el;
        }
        //return the item which contains the user input
        else {
          console.log(el);
          return el.title.toLowerCase().includes(search);
          // el.content.toLowerCase().includes(search)
        }
      })
    );

  return (
    <div>
      <div>
        <Bar type="text" placeholder="search.." onChange={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
