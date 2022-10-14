import {React, useEffect } from "react";
import './style.css'
import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom'

function DivStyle({name}){

    const [getImage, setGetImage] = useState([])

  const testIp = async () => {
    try {
        const { data: response } = await axios.get(`https://pixabay.com/api/?key=30594045-27d707aed2062f2bf473e7467&q=${name}&image_type=photo&pretty=true`)
        setGetImage(response.hits[0].webformatURL);
    } catch (error) {
        if (error.response) {
            console.log('error')
        }
    }
  }
  useEffect(()=>{
    testIp() 
  },[])

  
  
    return(
       <Link
       style={{
        width:"300px",
        height:'400px',
        backgroundImage:`url(${getImage})`,
        cursor:'pointer',
        color:'white',
        borderRadius:'30px',
        textAlign: "center",
        padding:'10px',
        marginLeft:'5px',
        textDecoration:'none'
    }}
    to='/image' state={{countName:name}}
     >
        {name}
        </Link>
    )
}

export default DivStyle