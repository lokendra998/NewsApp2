
import { Link } from 'react-router-dom';


const MainNavigation = (props) => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: '#821853' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontWeight: "bold", fontSize: '22px' }}>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/News" style={{ fontWeight: "bold", fontSize: '22px' }}>News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About" style={{ fontWeight: "bold", fontSize: '22px' }}>About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: "bold", fontSize: '22px' }}>
                                    Headlines
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ boxShadow: '0 2 8 rgba(0,0,0,0.25)', borderRadius: '22px', opcity: '2', backgroundColor: '#821853', width: '60vw', border: '3px solid white' }}>
                                    <li><Link className="dropdown-item" to="/NewsForm" style={{ color: 'white', fontWeight: "bold", fontSize: '22px' }}>Add News</Link></li>
                                    <li><Link className="dropdown-item"  to="/TopHeadlines" style={{ color: 'white', fontWeight: "bold", fontSize: '22px' }}>Top Headlines</Link></li>
                                </ul>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>



        </>
    );
};
export default MainNavigation;