//poropsba át kapja a datát az userPost S-ból
import { format } from "date-fns";
import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 10px;
  background-color: #e7e2df;
  margin-bottom: 30px;
`;

const ButConti = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const ButtonDesginEdit = styled(Link)`
  color: black;
  margin: 5px;
  background-color: yellow;
  border-radius: 15px;
  border: none;
  width: 50px;
  height: 25px;
  &:hover {
    font-weight: bold;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonDesginDelete = styled(Link)`
  color: black;
  margin: 5px;
  background-color: rgba(197, 25, 25, 0.8);
  border-radius: 15px;
  border: none;
  width: 50px;
  height: 25px;
  &:hover {
    font-weight: bold;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pic = styled.img`
  width: 30%;
`;

const UserPost = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(true);

  const deleteItem = (index) => {
    console.log("delete clicked");
    console.log(index);
    setShowMore(true);
    setVisible(false);
  };

  return (
    <Container>
      <div>
        <div>{props.item.title},</div>
        <div>
          <div></div>
          <div>{props.item.placeChange}</div>
          <div>
            <Pic src={"http://localhost:4000/" + props.item.cover[0]} alt="" />
            <div>{props.item.summary}</div>
          </div>

          <p>{format(new Date(props.item.createdAt), "MMM d, yyyy")}</p>
        </div>
        <ButConti>
          <ButtonDesginDelete onClick={() => deleteItem(props.customindex)}>
            <div>delete</div>
          </ButtonDesginDelete>
          <ButtonDesginEdit to={`/edit/${props.item._id}`}>
            <div>edit</div>
          </ButtonDesginEdit>
        </ButConti>
        {showMore ? (
          <div>
            <div>Are u sure to delete your post of {props.item.title} ?</div>
            <div>
              <div>
                <Link>yes</Link>
              </div>
              <div>
                <Link onClick={() => setShowMore(!showMore)}>no</Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
};

export default UserPost;
