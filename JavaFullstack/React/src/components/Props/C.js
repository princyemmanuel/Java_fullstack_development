import D from './D';
function C({data}){
    return(
        <div className='CContainer'>
            <h1>C Component</h1>
            <p>Mynew data:{data}</p>
            <D data={data}/>
        </div>
    )
}
export default C;