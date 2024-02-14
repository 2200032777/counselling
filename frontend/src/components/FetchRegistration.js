import React, { useState } from 'react'
import axios from 'axios'

const FetchRegistration = () => { 
    const [res,SetRes]=useState(null)
    if(res==null){
    axios.get('http://localhost:8080/retrieve',{})
    .then(response=>{
        SetRes(response.data)
        console.log(Response.data)
    })
}
  return (
    <div><h1>FetchRegistration</h1>
      { JSON.stringify(res)}
    </div>
  )
}

export default FetchRegistration