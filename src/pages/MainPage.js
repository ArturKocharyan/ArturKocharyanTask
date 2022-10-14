import {React} from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import DivStyle from '../components/DivStyle'
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

function MainPage() {

    const list = useSelector(function (state) {
        return state.list
    })

    function getRandomCountries(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    useEffect(() => {
        getRandomCountries(list, 10)
    }, [])
    return (
        <div >
            <div className='App'>
                
                {
                    getRandomCountries(list, 10).map((item) => {
                        return <DivStyle
                            key={Math.random()}
                            name={item.name}
                        ></DivStyle>
                    })
                }
            </div>
        </div>
    )
}

export default MainPage