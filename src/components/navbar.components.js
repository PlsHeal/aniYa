import { Link } from "react-router-dom";
import "../styles/navbar.component.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">Ani<span>Y</span>a</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/popular"><span>Popular</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/recent"><span>Recent</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="hover">About</span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/anime">Anime</Link>
                        <Link className="dropdown-item" to="/manga">Manga</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/others">Others</Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/profile"><span>Profile</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}