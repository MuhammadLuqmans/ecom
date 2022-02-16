import React, { useEffect, useState } from 'react'
import { ReadData } from '../../services/Api'

const ShowAllPost = () =>{


// console.log(ReadData())
    // const [ Products , setProducts] = useState([])
    // console.log(getData())
        useEffect(()=>{
           const GetPost = async ()=>{
               let data = await ReadData()
            //    setProducts(data)
            console.log(data)
           }
           GetPost()
        },[])

// console.log(Products)
    return(
        <div style={{ marginTop:"200px" }}>
        <h2>All Posts</h2>
        </div>
    )
} 

export default ShowAllPost;