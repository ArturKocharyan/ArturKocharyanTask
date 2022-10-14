import {React} from "react";
import {  Link, useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import ImageCard from "../components/ImageCard";
import '../App.css'

function AllIMG(){

    const location = useLocation()
    const name = location.state
    const countrieName = name.countName
    const [getImage, setGetImage] = useState([])

  const testIp = async () => {
    try {
        const { data: response } = await axios.get(`https://pixabay.com/api/?key=30594045-27d707aed2062f2bf473e7467&q=${countrieName}&image_type=photo&pretty=true`)
        setGetImage(response.hits);
    } catch (error) {
        if (error.response) {
            console.log('error')
        }
    }
  }
  useEffect(()=>{
    testIp() 
  },[])

  console.log(getImage)
    


    return(
        <div>
            <div className="headerDiv" >
            <h2>{countrieName}</h2>
            <div className="buttonDiv" ><Link to='/' >Back</Link></div>
            </div>
           
           <div className="imageDivs" >
           {
                    getImage.map((item) => {
                        return <ImageCard
                            key={Math.random()}
                            adress={item.webformatURL}
                        ></ImageCard>
                    })
                }
           </div>
        </div>
    )
}

export default AllIMG