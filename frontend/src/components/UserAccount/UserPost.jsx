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
`;

const ButtonDesginDelete = styled.button`
  margin: 5px;
  background-color: red;
  border-radius: 15px;
  border: none;
  width: 50px;
`;

const UserPost = (props) => {
  return (
    <Container>
      <div>
        <div>{props.item.title},</div>
        <div>
          <div></div>
          <div>{props.item.placeChange}</div>
          <div>{props.item.summary}</div>
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
