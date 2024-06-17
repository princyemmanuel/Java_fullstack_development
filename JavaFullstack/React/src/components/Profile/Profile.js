import { useState } from 'react';
import './Profile.css';

function Profile(){

    let [pic,setPic] = useState("https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg")
    let [username,setUsername] = useState("Princy");
    let [email,setEmail] = useState("Princy@gamil.com");
    let [gender,setGender] = useState("Female");
    let [theme,setTheme] = useState({
        bgColor:"white",
        textColor:"black",
    })

    const changeTheme1=(event)=>{
        if(event.target.checked){
            setTheme({
                bgColor:"black",
                textColor:"white",
            });
        }
        else{
            setTheme({
                bgColor:"white",
                textColor:"black",
            });
        }
    }
    const changeTheme = (event) => {
        if (event.target.checked) {
          setTheme({
            bgColor: "black",
            textColor: "white",
          });
        } else {
          setTheme({
            bgColor: "white",
            textColor: "black",
          });
        }
      };

    const changetoJoseph=()=>{
        setUsername("Joseph Thomas");
        setEmail("joseph@123");
        setGender("Male");
        setPic("https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=")

    }
    
    const changetoPrincy=()=>{
        setUsername("Princy Emmanuel");
        setEmail("Princyh@123");
        setGender("Female");
        setPic("https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg")
    }
    return(
        <div className='container' style={{backgroundColor:theme.bgColor,color:theme.textColor }}>
            <div className='imgDiv'>
                <img src={pic} width="400px" height="100%"/>
            </div>
            <div className='contentDiv'>
                <dl>
                    <dt><b>User Name</b></dt>
                    <dd>{username}</dd>
                    <dt><b>Email</b></dt>
                    <dd>{email}</dd>
                    <dt><b>Gender</b></dt>
                    <dd>{gender}</dd>
                    <dt><b>Description</b></dt>
                    <dd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dd>
                </dl>
                <br></br>
                <button onClick={changetoPrincy}>Princy</button>
                <button onClick={changetoJoseph}>Joseph</button>
                <br></br>
                <br></br>
                <input type='checkbox' onChange={changeTheme}/> Check to swich to Dark mode
            </div>
        </div>
    )
}
export default Profile;