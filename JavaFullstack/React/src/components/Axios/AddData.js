import React, { useState } from "react";
import axios from "axios";

function AddData({ getuser }) {
  let [user, setUser] = useState({ name: "", city: "" });
  const addData = async () => {
    var res = await axios.post("http://localhost:5000/result", user);
    console.log(res);
    getuser();
    setUser({
        name:"",city:""
    })
  };
  return (
    <div
      style={{
        width: "400px",
        margin: "0px auto",
        boxShadow: "0 0 0 5px green",
        padding:"20px"
      }}
    >
      <div>
        <input
          type="text"
          value={user.name}
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value,
            });
          }}
          placeholder="Enter Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={user.city}
          onChange={(event) => {
            setUser({
              ...user,
              city: event.target.value,
            });
          }}
          placeholder="Enter City"
        />
      </div>
      <div>
        <button onClick={addData}>Add Data</button>
      </div>
    </div>
  );
}

export default AddData;
