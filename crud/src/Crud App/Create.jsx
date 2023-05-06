import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/users", inputData).then((res) => {
      alert("Data posted Successsfully!");
      navigate("/");
    });
  };
  return (
    <div className="d-flex w-100  vh-100 justify-content-center align-items-center border-radius-2">
      <div className="w-50 border bg-secondary p-5 text-white rounded-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
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
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
