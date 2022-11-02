import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <Link to="/">
                            <img className="logo_index" src="https://sherlyferro.github.io/sass-example/img/logo%20oficial.png" />
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/nosotros">
                                    <a className="nav-link" aria-current="page">Nosotros</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pacientes">
                                    <a className="nav-link" aria-current="page">Nuestros pacientes</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tratamientos">
                                    <a className="nav-link" aria-current="page">Tratamientos</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/sedes">
                                    <a className="nav-link" aria-current="page">Sedes</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header