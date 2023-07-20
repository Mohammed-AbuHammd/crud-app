import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./style.css";

function View() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    console.log("Fetching data for id:", id);

    axios
      .get("https://some-data.onrender.com/stores/" + id)
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="viewPage">
      <div className="box-view">
        <span>ID: {data.id}</span>
        <h3> Story Name : {data.name}</h3>
        <p> City: {data.cities}</p>
        <div className="actions">
        <Link className="update" to={`/edit/${id}`}>Update</Link>
          <Link  className='back' type="button"  to={"/"} onClick={handleBack}>
              Back
            </Link>
        </div>
      </div>
    </div>
  );
}

export default View;
