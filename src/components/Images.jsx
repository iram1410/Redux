import React from 'react'
import {useLocation,useParams} from 'react-router-dom';

function Images(Props) {
    let location=useLocation();
    let {iname}=useParams();
    let {lname}=useParams();
    return (
        <>
         <h1>{Props.name}Image compoment</h1>   
         <h2>{location.pathname}</h2>
         <h2>{iname}{lname}</h2>
         {iname==="iramm"?<h2>My data</h2>: null}
        </>
    )
}

export default Images
