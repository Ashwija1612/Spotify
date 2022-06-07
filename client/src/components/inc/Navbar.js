import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo_head.jpg';

function Navbar() {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand text-white" href="/">
                                    <img src={Logo} alt="" width="30" height="24"/>
                                    Spotify
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active text-white">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active text-white">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/artists" className="nav-link active text-white">Artists</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/songs" className="nav-link active text-white">Songs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/forms" className="nav-link active text-white">Forms</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active text-white">Contact Us</Link>
                                    </li>
                                </ul>
                                </div>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;