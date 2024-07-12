import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/" style={{textDecoration: "none",color:"#CCD8F5"}}>
                    <h1>workout</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar