import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function ApiData()
 {
    const [data,setData]=useState([])
    const [error,setError]=useState("")
    const displayData=async ()=>{
        try
        {
          
       const response=await axios.get("https://fakestoreapi.com/products") 
           setData(response.data)
        } 
        
        catch (error) 
        {
           setError(error.message) 
        }
    }

    useEffect(() => {
        displayData()
    }, []);
  return (
    <div>
             <h1><u>Axios Demo</u></h1>
      {
        error?<b>{error}</b>:
        data.length==0?<strong>Loading...................</strong>:
        <table border={10}>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rate</th>
                <th>Count</th>
            </tr>
             {
            data.map((product,index)=>(
            <tr key={index}>
                <td>{product.id}</td>
               <td>{product.title}</td>
               <td>{product.price}</td>
               <td>{product.description}</td>
               <td>{product.category}</td>
               <td><img src={product.image} width="30%" height="30%"/></td>
               <td>{product.rating.rate}</td>
               <td>{product.rating.count}</td>
            </tr>
            ) )
        }
        </table>
      }     
    </div>
  )
}