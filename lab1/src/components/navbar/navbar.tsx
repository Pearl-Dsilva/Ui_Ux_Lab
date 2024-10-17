import { Outlet, useNavigate } from 'react-router-dom';
import image from '../../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <div className="container">
                    <a className="navbar-brand" style={{
                        cursor: 'pointer',
                    }} onClick={() => { navigate('/') }}>
                        <img src={image} alt="" className="d-inline-block align-text-top" style={{ width: "50%", }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item">
                                <a className="nav-link active" style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center'
                                }} aria-current="page" onClick={() => { navigate('/') }}>

                                    <HomeIcon style={{
                                        fontSize: '40px', color: 'white'
                                    }} />
                                    <span>Home</span>

                                </a>
                            </li>
                            <li className="nav-item" style={{
                                display: 'flex', alignItems: 'center'
                            }}>
                                <a className="nav-link " style={{
                                    cursor: 'pointer',
                                }} onClick={() => { navigate('/AccountStatement') }}><span>Account Statements</span></a>
                            </li>
                            <li className="nav-item" style={{
                                display: 'flex', alignItems: 'center'
                            }}>
                                <a className="nav-link" style={{
                                    cursor: 'pointer',
                                }} onClick={() => { navigate('/Apply') }}>Apply for New Cards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center'
                                }} aria-current="page" onClick={() => { navigate('/User') }}>

                                    <span>User</span>
                                    <AccountCircle style={{
                                        fontSize: '40px', color: 'white'
                                    }} />

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}