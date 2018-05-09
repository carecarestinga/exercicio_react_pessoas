import React from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            ata-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
            ia-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand">{props.logo}</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a class="nav-link" href="#">
                            <Link to='/releases' className="nav-link">Home</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">
                            <Link to='/backlog' className="nav-link">Pessoa Fisica</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">
                            <Link to='/sprints' className="nav-link">Pessoa Juridica</Link>
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;