import React , { useState } from "react"
import { useEffect } from "react";
import API_KEY from "./keys"

const CONTEXT_KEY = '9ec571f86697d07ac'

 const UseGoogleSearch =(term)=>{

    const [data,setData] =useState(null);

 useEffect(()=>{
  const fetchData = async () =>{
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
   .then(response => response.json())
   .then(result => {
       setData(result)
   })
  }
 fetchData().then(res =>{
     console.log(res)
 }).catch(error => {
     console.log(error)
 });

 },[term])

 return {data};  
}
export default UseGoogleSearch;