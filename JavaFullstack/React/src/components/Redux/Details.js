import React from "react";
import { useSelector } from "react-redux";

function Details() {
  let myStoreData = useSelector((data) => {
    return data;
  });
  return (
    <div style={{padding:"0px 50px"}}>
      <h2>Details Component</h2>
      <h3 style={{ color: "green", fontStyle: "italic" }}>
        {myStoreData.name}
      </h3>
    </div>
  );
}

export default Details;


