import axios from "axios";
import AddData from "./AddData";
import { useState } from "react";
function NewUsers() {
  let [users, setUsers] = useState([]);

  const getUser = () => {
    var promiseObject = axios.get("http://localhost:5000/result");
    promiseObject
      .then((succesData) => {
        // alert("success");
        console.log(succesData);
        setUsers(succesData.data);
      })
      .catch(() => {
        // alert("Failed");
      });
  };

  const deleteData = (id) => {
    alert(id);
    axios.delete(`http://localhost:5000/result/${id}`).then((succesData) => {
      console.log(succesData.data);
      getUser();
    });
  };

  const updateData = () => {};

  return (
    <div>
      <h1>Axios </h1>
      <p>My axios examples for get, post, delete, put</p>

      <button onClick={getUser}>Get Users</button>
      {users.length > 0 ? (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div className="leftSection">
            <AddData getuser={getUser}/>
          </div>
          <div className="rightSection">
            <table frame="box" rules="all" cellPadding={20}>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>CITY</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.name} </td>
                      <td>{user.city} </td>
                      <td>
                        <button
                          onClick={updateData}
                          style={{ backgroundColor: "green" }}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteData(user.id)}
                          style={{ backgroundColor: "red" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1>No Users to Show</h1>
      )}
    </div>
  );
}
export default NewUsers;
