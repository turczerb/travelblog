import styled from "styled-components"; //css
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { NavbarData } from "../NavBar/NavBarData";
import Multiselect from "multiselect-react-dropdown";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const UListi = styled.ul`
  list-style: none;
`;

const CreateNewPost = () => {
  const [placeChange, setPlaceChange] = useState("Select a location");

  const handlePlaceChange = (e) => {
    setPlaceChange(e.target.value);
  };

  return (
    <Container>
      <Form>
        <input type="title" placeholder={"Title"} />
        <input type="summary" placeholder={"Summary"} />
        <input type="file" />
        <select onChange={handlePlaceChange} placeholder="select one!">
          {NavbarData.map((item, index) => {
            if (item.title === "Destinations") {
              return (
                <>
                  {item.subNav.map((desti, index) => {
                    return (
                      <option value={desti.title} item={desti} key={index}>
                        {desti.title}
                      </option>
                    );
                  })}
                </>
              );
            }
          })}
        </select>

        <ReactQuill />
      </Form>
    </Container>
  );
};
//return <option value={item.subNav.title} item={item} key={index} />;
export default CreateNewPost;
