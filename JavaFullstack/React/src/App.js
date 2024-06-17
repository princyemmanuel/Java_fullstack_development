import List from "./List";
import Card from "./components/card/Card";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StateComp from "./components/state/StateComp";
import StateImg from "./components/state-task/StateImg";
import HideShowPass from "./components/state-task/HideShowPass";
import Profile from "./components/Profile/Profile";
import ClassComp from "./components/session46/ClassCom/ClassComp"
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import ContactUs from "./components/Contact/ContactUs";
import Nav from "./components/Nav/Nav";
import UseRef from "./components/Hooks/UseRef";
import A from "./components/Props/A";
import AComp from "./components/Hooks/useContext/AComp";
import Users from "./components/User/Users";
import Mui from "./components/MUI/Mui";
import NewUsers from "./components/Axios/NewUsers";
import Name from "./components/Redux/Name";
import Details from "./components/Redux/Details";
import { Margin } from "@mui/icons-material";

function App(myparameter) {
  return (
    <div className="App" >
     <Nav/>
     <Name/>
     <Details/>
     {/* <NewUsers/>
     <Mui/>
     <Users/> */}

          {/* <Routes>
         
            <Route path="/" element={<Home/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Product" element={<Products/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
            <Route path="/useRef" element={<UseRef/>}/>
            <Route path="/props" element={<A/>}/>
            <Route path="/useContext" element={<AComp/>}/>
          </Routes> */}

        {/* <Header/> */}
        {/* <ClassComp/>
        <Profile/>
        <StateImg/>
        <StateComp/>
        <HideShowPass/> */}
      {/* <div className="cardContainer">
        <Card status={true} name="Princy" imgurl="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944"/>
        <Card status={false} name="Athira" imgurl="https://thumbs.dreamstime.com/b/portrait-successful-business-woman-white-background-professional-109290811.jpg"/>
        <Card status={true} name="Neha" imgurl="https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg"/>
        <Card status={false} name="Miltu" imgurl="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"/>
      </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
