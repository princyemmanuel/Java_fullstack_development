import { useState } from 'react';
import './users.css';
import axios from 'axios';
function Users (){

    let [users,setUsers] = useState([]);
    const getData=()=>{
       const promiseObject = axios.get("http://localhost:5000/result");
       promiseObject.then((succesData)=>{
        alert("Success");
        console.log(succesData.data);
        setUsers(succesData.data);
       })
       .catch((failureData)=>{
        alert("Failure");
       })
    };
    return(
        <div className="UserDiv">
            <h1>User Information</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button onClick={getData}>Get Users</button>
          {users.length > 0 ? (
                <div>
                    <ol>
                        {users.length> 0 &&
                        users.map((user)=>{
                            return <li>{user.name}</li>
                        })}
                    </ol>
                   
                     {/* <ol>
                        <li>{users[0].name}</li>
                        <li>{users[1].name}</li>
                        <li>{users[2].name}</li>
                        <li>{users[3].name}</li>
                        <li>{users[4].name}</li>
                    </ol> */}
                </div>
             )   :(
                <h2 > No Users to display</h2>
             )
            }
          
        </div>
    )
}
export default Users
