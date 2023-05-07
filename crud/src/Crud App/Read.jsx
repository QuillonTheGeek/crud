import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="container p-5">
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.age}</p>
        <Link to="/" className="btn btn-sm btn-info">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
