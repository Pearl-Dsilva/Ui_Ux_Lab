import { Outlet, useNavigate } from 'react-router-dom';
import image from '../../assets/images/logo.png';


export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" style={{
                        cursor: 'pointer',
                    }} onClick={() => { navigate('/') }}>
                        <img src={image} alt="" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item">
                                <a className="nav-link" style={{
                                    cursor: 'pointer',
                                }} aria-current="page" onClick={() => { navigate('/Intro') }}>What is CyberSafe?</a>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <a className="nav-link dropdown-toggle " style={{
                                        cursor: 'pointer',
                                    }} data-bs-toggle="dropdown">Solutions</a>

                                    <ul class="dropdown-menu dropdown-menu-dark ">
                                        <li><a class="dropdown-item" href="#">CMS Solutions</a></li>
                                        <li><a class="dropdown-item" href="#">Website Solutions</a></li>
                                        <li><a class="dropdown-item" href="#">Educational Solutions</a></li>
                                        <li><a class="dropdown-item" href="#">Tools</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{
                                    cursor: 'pointer',
                                }} onClick={() => { navigate('/About') }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " style={{
                                    cursor: 'pointer',
                                }} onClick={() => { navigate('/Contact') }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}