 import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
const Home=()=>
{
    var [data,updatedata]=useState([]);
    useEffect(
        ()=>{
            async function show(){
                var d= await axios.get('https://restapittt.herokuapp.com/products/');
                updatedata(d.data);
         }
         show();
 }
)
    
    return(
        <>
        <div className="row">
            {
                data.map((val)=>{
                    return <Card name={val.name} price={val.price} cat={val.cat} cmp={val.cmp} />
                })
            }
        </div>
        </>
    )
}
export default Home;
