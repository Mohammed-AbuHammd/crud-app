import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const [values, setValues] = useState({
    id: "",
    name: "",
    cities: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://some-data.onrender.com/stores", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="createPage">
      <div class="credit-card-form">
        <h2>Add Story </h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="card-number">ID</label>
            <input
              type="text"
              placeholder="Story ID"
              onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="card-holder">Name</label>
            <input
              type="text"
              placeholder="Story  name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div class="form-group ">
            <label for="expiry-date">Cities</label>
            <input
              type="text"
              placeholder="Cities"
              onChange={(e) => setValues({ ...values, cities: e.target.value })}
            />
          </div>
          <div class="form-row">
            <button type="submit" class="btn-submit">
              Add Story
            </button>
            <button type="button" class="btn-back" onClick={handleBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
