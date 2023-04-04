
import React, { Component, createContext, useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Contact.css';



const Contact = () => {
    
    const profiles = [
        {
            name:'Eron',
            lastname: 'Blakaj',
            statusi: 'Front End Developer',
            imgUrl : "https://blog.hubspot.com/hs-fs/hubfs/employee-retention-rate.jpg?width=595&height=400&name=employee-retention-rate.jpg",
            Working : true
            
        },
        {
            name:'Vesa',
            lastname: 'Gorani',
            statusi: 'Front End Developer',
            imgUrl: "https://nexttechnology.io/app/uploads/2022/04/EVP-Employee-Value-Proposition-czym-jest-i-jakie-daje-korzys%CC%81ci.png",
            Working : true
            
        },
        {
            name:'Donna',
            lastname: 'Sylaj',
            statusi: 'Back End Developer',
            imgUrl: "https://media.istockphoto.com/id/1413765605/photo/portrait-of-successful-african-american-business-woman.jpg?b=1&s=170667a&w=0&k=20&c=gnlreVlTjr7AM4oug7TBr55S6hTwhXOHE_jaS6DmE2Q=",
           Working : false
            
        },
        {
            name:'Vlera',
            lastname: 'Kupa',
            statusi: 'Actor',
            imgUrl: "https://as1.ftcdn.net/v2/jpg/02/99/03/56/1000_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg",
            Working : true
            
        },
        
    ]
    return(
        <>
       <Container className="cards">
       <Row xs={1} md={4} className="g-4">
      {profiles.map((p) => (
        <Col>
          <Card style={{width: "250px", backgroundColor: p.Working? "white": "gray", color: p.Working? "black": "white"}}>
            <Card.Img variant="top" src={p.imgUrl} style = {{height: "250px",width:"250px", objectFit:'contain'}}/>
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>
                {p.statusi}<br></br>
                Working : {p.Working ? "YES" : "NO"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
       </Container>
    
          
 
   

        </>
    )
    
};


export default Contact; 