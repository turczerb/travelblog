import styled from "styled-components"; //css
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { NavbarData } from "../NavBar/NavBarData";
import Select from "react-select";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const UListi = styled.ul`
  list-style: none;
`;

const options = [
  { value: "London", label: "LONDON" },
  { value: "x", label: "bigyó" },
  { value: "v", label: "mogyó" },
];

const options2 = NavbarData.map((item, i) => {
  if (item.title === "Destinations") {
    return (
      <>
        {item.subNav.map((desti, index) => {
          return {
            label: desti.title,
            value: desti,
            key: index,
          };
        })}
      </>
    );
  }
});

const CreateNewPost = () => {
  const [placeChange, setPlaceChange] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handlePlaceChange = (e) => {
    setPlaceChange(e.target.value);
  };

  //ez miért van így
  const handleChoose = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const submit = () => {
    console.log(placeChange);
    console.log(selectedOptions);
  };

  return (
    <Container>
      <Form>
        <input type="title" placeholder={"Title"} />
        <input type="summary" placeholder={"Summary"} />
        <input type="file" />
        <select
          onChange={handlePlaceChange}
          placeholder="select one!"
          required
          value={placeChange}
        >
          <option value="" disabled selected>
            Choose your destination
          </option>
          {NavbarData.map((item, i) => {
            if (item.title === "Destinations") {
              return (
                <>
                  <div key={item.id}></div>
                  {item.subNav.map((desti, index) => {
                    return (
                      <option item={desti} key={index}>
                        {desti.title}
                      </option>
                    );
                  })}
                </>
              );
            }
          })}
        </select>

        <Select
          options={options}
          value={selectedOptions}
          onChange={handleChoose}
          isMulti={true}
        ></Select>
        <ReactQuill />
      </Form>
      <button onClick={submit}>klikk</button>
    </Container>
  );
};
//return <option value={item.subNav.title} item={item} key={index} />;
export default CreateNewPost;
