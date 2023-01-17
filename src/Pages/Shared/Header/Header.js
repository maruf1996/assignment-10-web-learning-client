import React, { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css';


const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    
    const darkModeFalse=()=>{
        localStorage.setItem('darkMode','false')
        window.location.reload();
    }
    const darkModeTrue=()=>{
        localStorage.setItem('darkMode','true');
        window.location.reload();
    }

    return (
        <Navbar className='px-3 shadow-sm' expand="lg">
            <Navbar.Brand><Link to='/' className='text-decoration-none me-3'><span className='fs-2 fw-bold'>Web</span> School</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <div className='mt-3 me-4 rounded'>
                    <button className='border-0 text-warning fw-bolder' type="button" onClick={darkModeFalse}>
                        ☀
                    </button>
                    <button className='border-0 text-dark fw-bolder' type="button" onClick={darkModeTrue}>
                        ☾
                    </button>
                </div>
                <Link  className='text-decoration-none me-4 mt-3' to='/'>Home</Link>
                <Link className='text-decoration-none me-4 mt-3' to='/course'>Course</Link>
                <Link className='text-decoration-none me-4 mt-3' to='/faq'>FAQ</Link>
                <Link className='text-decoration-none me-4 mt-3' to='/blog'>Blog</Link>
                {user &&
                <Image title={user?.displayName} className='mt-2 me-4 img' roundedCircle src={user?.photoURL}>
                </Image>
                }
            </Nav>
                {!user?
                    <Link className='text-decoration-none mt-3 d-block fw-bold' to='/login'>Login</Link>:
                    <Button onClick={logOut} className='logout_btn fw-bold' variant="outline-secondary" type="submit">Log Out</Button>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;