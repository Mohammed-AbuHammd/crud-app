import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import './style.css'
function Edit() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", data);
    axios
    .post("https://some-data.onrender.com/stores", data)
    .then((res) => {
      console.log(res);
      navigate("/");
    })
    .catch((err) => console.log(err));
  };

  const handleBack = () => {
    navigate("/");
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="editPage">
      <div className="credit-card-form">
        <h2>Update Story </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="card-number">ID</label>
            <input
              type="text"
              name="id"
              placeholder="Story ID"
              value={data.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Story name"
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Cities</label>
            <input
              type="text"
              name="cities"
              placeholder="Cities"
              value={data.cities}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <Link type="submit" className="btn-submit">
              Update Story
            </Link>
            <Link type="button" className="btn-back" to={"/"} onClick={handleBack}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
