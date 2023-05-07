import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Update() {
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3002/users/" + id, inputData).then((res) => {
      alert("Data Updated Successsfully!");
      navigate("/");
    });
  };

  return (
    <div className="d-flex w-100  vh-100 justify-content-center align-items-center border-radius-2">
      <div className="w-50 border bg-secondary p-5 text-white rounded-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              disabled
              name="id"
              className="form-control"
              value={inputData.id}
              onChange={(e) =>
                setInputData({ ...inputData, id: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={inputData.age}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
