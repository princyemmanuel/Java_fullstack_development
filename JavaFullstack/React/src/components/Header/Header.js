import './Header.css'

function Header(){
    return(
    <div>

       <div className='heading'>
        <h1>Employee Details </h1>
       </div>
        <div className='nav'>
            <a href="https://elearning.excelr.com/dashboard"><h3>Home</h3></a>
            <a href="https://elearning.excelr.com/dashboard"><h3>About Us</h3></a>
            <a href="#"><h3>Gallary</h3></a>
            <a href="#" ><h3>Contact</h3></a>
        </div>
     </div>
    )
}
export default Header