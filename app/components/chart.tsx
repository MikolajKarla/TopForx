'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chart = () => {
  
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      function: 'FX_INTRADAY',
      interval: '5min',
      to_symbol: 'USD',
      from_symbol: 'EUR',
      datatype: 'json',
      outputsize: 'compact'
    },
    headers: {
      'X-RapidAPI-Key': process.env.chartinfo,
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  const handleChart = async ()=>{
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

const [timeframe,setTimeframe]= useState("")
const [fromSymbol, setFromSymbol]= useState("")
const [toSymbol, SetToSymbol]= useState("")



useEffect(()=>{

},[])


  return (
    <div>
      <form method='get'>
        <h2>From:</h2>
        <select name="fromSymbol" id="fromSymbol">
          
        </select>
        <h2>To:</h2>
      </form>
    </div>
  )
}

export default Chart
