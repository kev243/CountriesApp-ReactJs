import axios from 'axios';
import React, { useEffect } from 'react';

const Countries = () => {

    useEffect(()=> {
        axios.get("https://restcountries.com/v3.1/all").then((res)=>console.log(res.data));

    },[])
    return (
        <div className='countries'>
            <h1>Countrie</h1>
        </div>
    );
};

export default Countries;