import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';


function Header() {
    return (
        <React.Fragment>
            <div className='position-relative border-bottom'>
                <h1 className=' mt-4 display-2'>Free Time?</h1>
                <h3 className='text-muted fst-italic'>Time Confetti Solutions</h3>
                <Button color='info' className='position-absolute top-0 end-0 me-5'>
                    Login
                </Button>
                </div>
            <Navbar dark sticky='top'>
                <div className='container'>
                    <NavbarBrand href='/'></NavbarBrand>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;