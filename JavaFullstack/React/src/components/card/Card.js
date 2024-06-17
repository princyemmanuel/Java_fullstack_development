import './Card.css';

function Card(props){
    return (
        <div id='usercard'>
            <img height="300px" width="250px" src={props.imgurl} />
            <h2>{props.name}</h2>
            <p>I am a Software Engineer</p>
            <h3>{props.status?"Active":"Inactive"}</h3>
            <button>Profile</button>
        </div>
    )
}
export default Card;