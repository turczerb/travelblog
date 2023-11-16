import styled from "styled-components"; //css
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import PopUp from "../PopUpFolder/PopUp";
import { NavbarData } from "../NavBar/NavBarData";
import Select from "react-select";
import "../CreatePost/create.css";
import { Navigate } from "react-router-dom";
import { modules } from "./ModuleData";

const OutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

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

const ButtonConti = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

const options2 = NavbarData[2].subNav;
/*NavbarData.map((item, i) => {
  if (item.title === "Type of travel") {
    console.log(item);
    console.log(item.subNav);
    return item.subNav;
  }
});*/

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [placeChange, setPlaceChange] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [files, setFiles] = useState(null);
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [visible, setVisible] = useState(false);
  const [failPost, setFailPost] = useState(false);

  const handlePlaceChange = (e) => {
    setPlaceChange(e.target.value);
  };

  //ez miért van így
  const handleChoose = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleContentChange = (newValue) => {
    setContent(newValue);
  };

  const handlePicChange = (e) => {
    setFiles(e.target.files);
  };

  const updatePost = (e) => {
    e.preventDefault();
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <OutContainer>
      <Container>
        <Form onSubmit={updatePost}>
          <div>Update your post</div>
          <input
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={handleSummaryChange}
          />
          <input
            type="file"
            onChange={handlePicChange}
            multiple="multiple"
            name="img"
            required
          />
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
            placeholder={"type of travel"}
            options={options2}
            value={selectedOptions}
            onChange={handleChoose}
            isMulti={true}
          ></Select>
          <div>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
            />
          </div>
          <ButtonConti>
            <button type="submit">edit post</button>
          </ButtonConti>
        </Form>
      </Container>
      <PopUp
        visible={visible}
        setVisible={setVisible}
        failPost={failPost}
        setFailPost={failPost}
      />
    </OutContainer>
  );
};
//return <option value={item.subNav.title} item={item} key={index} />;
export default EditPost;
