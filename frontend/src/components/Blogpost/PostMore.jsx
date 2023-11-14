import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//kell az id h egy specifikus  posztot fetcheljünk le. honnét szedem az idt? useParams
const PostMore = () => {
  const [data, setData] = useState("");
  const { _id } = useParams();

  //ehhez is kell andpoint index.js-be
  useEffect(() => {
    fetch("http://localhost:4000/post/" + _id).then((response) => {
      response.json().then((data) => {
        setData(data);
        console.log(data);
      });
    });
  }, []);

  return (
    <div>
      <div>postmore</div>
    </div>
  );
};

export default PostMore;
