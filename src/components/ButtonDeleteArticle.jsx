import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ButtonDeleteArticle({ id, setArticles }) {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);

  const handleClick = async (ev) => {
    ev.preventDefault();
    setArticles((prev) => prev.filter((article) => article.id !== id));
    const response = await axios(
      {
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/articles/${id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status !== 200) {
      setWarning(response.data.msg);
    }
  };

  return (
    <button
      type="submit"
      className="btn btn-outline-danger"
      onClick={handleClick}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}

export default ButtonDeleteArticle;
