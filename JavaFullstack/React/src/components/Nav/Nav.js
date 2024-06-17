import './Nav.css';
import { Link } from 'react-router-dom';

function Nav(){
    return(
    <div>

       {/* <div className='heading'>
        <h1> Nav </h1>
       </div> */}
        <div className='nav'>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/Profile"><h3>Profile</h3></Link>
            <Link to="/Product"><h3>Products</h3></Link>
            <Link to="/Contact" ><h3>Contact</h3></Link>
            <Link to="/useRef" ><h3>UseRef</h3></Link>
            <Link to="/props" ><h3>Props</h3></Link>
            <Link to="/useContext" ><h3>useContext</h3></Link>
        </div>
     </div>
    )
}
export default Nav