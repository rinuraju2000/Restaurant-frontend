import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_Url } from '../Base_url';
import axios from 'axios';
import { useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';






function ViewRest() {

    //To get particular id from url

    // const pathParams=useParams()
    //console.log(pathParams.id);
    //Destructuring using id

    const { id } = useParams()
    console.log(id);

    //Create a state for holding restaurant details
    const [restDetails, setRestDetails] = useState([])

    //Make an api call to fetch a particular restaurant details 
    const fetchData = async () => {

        const { data } = await axios.get(`${base_Url}/restaurants/${id}`)
        console.log(data);//Particular details
        setRestDetails(data)
    }

    console.log(restDetails);//Particular details

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            {
                restDetails ?
                    <Row>

                        <Col>
                            {/* image */}
                            <Image src={`${restDetails.photograph}`} fluid style={{ height: '500px', width: '500px', border: '2px solid white',marginLeft:'50px' }} />
                        </Col>

                        <Col style={{padding:'50px'}}>
                            <h1 className='text-center m-2'>{restDetails.name}</h1>

                            <MDBListGroup style={{ minWidth: '22rem' }} light>
                                <MDBListGroupItem
                                    tag='button'
                                    action
                                    noBorders
                                    active
                                    aria-current='true'
                                    type='button'
                                    className='px-3'
                                >
                                    Address :{restDetails.address}
                                </MDBListGroupItem>

                                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                                    Cuisine Type :{restDetails.cuisine_type}
                                </MDBListGroupItem>

                                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                                    Neighborhood :{restDetails.neihhborhood}
                                </MDBListGroupItem>

                                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                                    <RestOp op={restDetails.operating_hours} />
                                </MDBListGroupItem>

                                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                                    <RestReview review={restDetails.reviews}/>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </Col>

                    </Row> : <p>No Data</p>
            }

        </>
    )
}

export default ViewRest
