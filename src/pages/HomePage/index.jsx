import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/container";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://some-data.onrender.com/stores")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      axios
        .delete("https://some-data.onrender.com/stores/" + id)
        .then(() => {
          // Remove the deleted item from the data array
          setData((prevData) => prevData.filter((item) => item.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="main-content">
      <Container>
        <h2>List Of Stories</h2>
        <div className="btn">
          <button>
            <Link to={"/create"}>
              {" "}
              Add <span>+</span>
            </Link>
          </button>
        </div>
        <table id="stories">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Cities</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.cities}</td>
                <td className="actions">
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(d.id)}
                  >
                    <Icon icon="material-symbols:delete-sharp" />
                  </button>
                    <Link to={`/edit/${d.id}`} className="edit">
                      <Icon icon="mdi:edit-box" />
                    </Link>
                  
                
                    <Link to={`/view/${d.id}`} className="view">
                      <span>View</span>
                    </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Home;
