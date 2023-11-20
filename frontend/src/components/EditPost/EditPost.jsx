import styled from "styled-components"; //css
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import PopUp from "../PopUpFolder/PopUp";
import { NavbarData } from "../NavBar/NavBarData";
import Select from "react-select";
import "../CreatePost/create.css";
import { Navigate, useParams } from "react-router-dom";
import { modules } from "./ModuleData";
import { TiDelete } from "react-icons/ti";

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

const Pic = styled.img`
  width: 10%;
  margin: 10px;
  border-radius: 7px;
`;

const PicInnerConti = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteIcon = styled(TiDelete)`
  color: red;
  font-size: 180%;
`;

const ButtonConti = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

const options2 = NavbarData[2].subNav;

const EditPost = () => {
  const { _id } = useParams(); // ??
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [placeChange, setPlaceChange] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [files, setFiles] = useState([]); // ez helyett lett a pictures? nmtom
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [visible, setVisible] = useState(false);
  const [failPost, setFailPost] = useState(false);
  const [pictures, setPicture] = useState([]);
  const [userId, setUserId] = useState(_id);
  console.log("mit kapunk" + _id);
  console.log("mit kapunk az userId által" + userId);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + _id).then((response) => {
      response.json().then((data) => {
        setTitle(data.title);
        setSummary(data.summary);
        setPlaceChange(data.placeChange);
        setSelectedOptions(data.selectedOptions);
        setContent(data.content);
        setFiles(data.cover); //ez volt setPicure

        console.log("mi van ebbe a databa");
        console.log(data.cover);
      });
    });
  }, []);

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

  const picDelete = (index) => {
    console.log(index);
    const temp = [...files]; //picture volt eddig
    temp.splice(index, 1);
    setFiles(temp);
    console.log("tempi tartalma");
    console.log(temp);
    //temp = pictures;
    console.log("picture tartalma");
  };

  const updatePost = async (e) => {
    e.preventDefault();

    if (!files) {
      console.log("no file selected");
      return;
    }
    const data = new FormData(); //object. will contan everythinf
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
    data.append("postID", _id);
    data.append("title", title);
    data.append("summary", summary);
    data.append("placeChange", placeChange);
    for (let i = 0; i < selectedOptions.length; i++) {
      data.append("selectedOptions", selectedOptions[i].value);
      console.log("added option");
    }
    data.append("content", content);
    data.append("isChecked", isChecked);
    data.append("userID", userId);

    await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    //setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/post/" + _id} />;
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
          <PicInnerConti>
            {!(files.length > 1)
              ? ""
              : files.map((item, index) => {
                  console.log(files);
                  return (
                    <>
                      <Pic
                        src={"http://localhost:4000/" + item}
                        alt=""
                        key={index}
                      />
                      <DeleteIcon onClick={() => picDelete(index)} />
                    </>
                  );
                })}
          </PicInnerConti>
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
