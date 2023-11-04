import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                    <i className="fa-solid fa-utensils fa-flip me-3"></i>
                        VAS Cafe
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
        </div>
    )
}

export default Header

  