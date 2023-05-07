import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="my-3">Crud App with JSON Server</h2>
      <div>
        <Link to="/create" className="btn btn-success">
          Create New Data+
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.age}</td>
              <td>
                <Link
                  to={`/update/${d.id}`}
                  className="btn btn-sm btn-success mx-2 "
                >
                  Update
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Delete
                </button>

                <Link
                  to={`/read/${d.id}`}
                  className="btn btn-sm btn-primary mx-2 "
                >
                  Read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Confirm deletion?");
    if (confirm) {
      axios
        .delete("http://localhost:3002/users/" + id)
        .then((res) => alert("Record Deleted"));
      navigate("/");
    }
  }
}

export default Home;
