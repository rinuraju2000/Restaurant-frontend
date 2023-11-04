import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import RestCard from '../RestCard/RestCard'
import { base_Url } from '../Base_url'



function AllRest() {
    // const baseUrl='http://localhost:3001'
    //State creation
    const [allRest,setAllRest]=useState([])


    const fetchData=async()=>{
        const {data}=await axios.get(`${base_Url}/restaurants`)
        console.log(data);//Array of data
        setAllRest(data)
    }
    console.log(allRest);//Array of data
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <Row className='m-3'>
                {
                    allRest.map((item)=>(
                        <Col sm={12} md={6} lg={4} xl={3} className='my-3'>
                           <RestCard restaurants={item}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default AllRest
