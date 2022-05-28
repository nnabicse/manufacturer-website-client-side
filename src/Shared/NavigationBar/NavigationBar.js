import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './NavigationBar.css'
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
// import Loading from '../../Pages/Login/Loading/Loading';

const NavigationBar = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    }
    // if (loading) {
    //     <Loading></Loading>
    // }
    return (
        <div className='navigation-bar-container'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand as={Link} to="/home"><img width={200} src={logo} alt="" /></Navbar.Brand>
                    </div>
                    <div>
                        {user && <span className='nav-item role me-2 ms-2 btn btn-sm btn-dark text-white'>{admin ? "Admin" : "User"}: {user.displayName}</span>}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><span className='nav-item'>Home</span></Nav.Link>
                            <Nav.Link as={Link} to="/tools"><span className='nav-item'>Products</span></Nav.Link>
                            <Nav.Link as={Link} to="/reviews"><span className='nav-item'>Reviews</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span className='nav-item'>Blogs</span></Nav.Link>
                            <Nav.Link as={Link} to="/myportfolio"><span className='nav-item'>Dev Portfolio</span></Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to="/dashboard"><span className='nav-item'>Dashboard</span></Nav.Link>
                                    :
                                    ""

                            }
                        </Nav>
                        <Nav>
                            {
                                user ? <Nav.Link as={Link} onClick={handleSignOut} to=""><span className='nav-item'>Log Out</span></Nav.Link>

                                    :

                                    <Nav.Link as={Link} to="/login"><span className='nav-item'>Login</span></Nav.Link>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;