import C from './C';

function B({data}){
    //destructure data ="Princy"
    // function B(props){
    //props = {data: "Princy"}
    return(
        <div className='BContainer'>
            <h1>B Component</h1>
            <p>My Data :{data}</p>
            {/* <p>My Data :{props.data}</p> */}
            <C data={data}/>
        </div>
    )
}
export default B;