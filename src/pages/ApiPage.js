import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col'

const ApiPage = () => {
    const [jokes, setJokes]=useState();

    //https://official-joke-api.appspot.com/random_joke

    const getApiData = async () => {
        const response = await fetch("https://example.p.rapidapi.com/?rapidapi-key=003715b91emsh65fb73065bdb31cp1fb2a1jsn05cfadb04bfb").then((response)=> response.json())
        setJokes(response);
        console.log("Response: ", response)
    }

    useEffect(()=>
    {
        getApiData();
    },[])

  return (
  <Container>
   {jokes && Object.values(jokes).map((value, index) => {
    console.log("Value: ", value)
        return (
          <h1>{value}</h1>
        );
      })}
  </Container>
  )
}

export default ApiPage