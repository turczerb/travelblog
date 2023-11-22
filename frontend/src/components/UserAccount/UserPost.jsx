//poropsba át kapja a datát az userPost S-ból
import { format } from "date-fns";
import styled from "styled-components"; //css

const Container = styled.div`
  padding: 10px;
  background-color: #e7e2df;
  margin: 5px;
`;

const ButConti = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const ButtonDesginEdit = styled.button`
  margin: 5px;
  background-color: yellow;
  border-radius: 15px;
  border: none;
  width: 50px;
  height: 25px;
  &:hover {
    font-weight: bold;
  }
`;

const ButtonDesginDelete = styled.button`
  margin: 5px;
  background-color: rgba(197, 25, 25, 0.8);
  border-radius: 15px;
  border: none;
  width: 50px;
  height: 25px;
  &:hover {
    font-weight: bold;
  }
`;

const Pic = styled.img`
  width: 30%;
`;

const UserPost = (props) => {
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
          <ButtonDesginDelete>delete</ButtonDesginDelete>
          <ButtonDesginEdit>edit</ButtonDesginEdit>
        </ButConti>
      </div>
    </Container>
  );
};

export default UserPost;
