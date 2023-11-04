import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import './RestCard.css'
import { Link } from 'react-router-dom';


function RestCard({ restaurants }) {
    console.log(restaurants);
    return (
        <div>
            <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
                <MDBCard className='card'>
                    <MDBCardImage className='img' src={restaurants.photograph} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle className='head'>{restaurants.name}</MDBCardTitle>
                        <MDBCardText  className='text'>
                            Address :{restaurants.address}
                            <br />
                            cusine type :{restaurants.cuisine_type}
                        </MDBCardText>

                    </MDBCardBody>
                </MDBCard>
            </Link>
        </div>
    )
}

export default RestCard
