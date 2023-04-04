import { useState } from "react"
import React from 'react'
import './Theme.css';
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


const Theme = () => {
    const [theme, setTheme] = useState("");

    const songs = [
    {
        idSong: 1,
        nameSong: "CryBaby",
        singer: "Lizzo"
    },
    {
        idSong: 2,
        nameSong: "Kush - Mainn",
        singer: "Lizzo"
    },
    {
        idSong: 3,
        nameSong: "Teeth",
        singer: "Lizzo"
    },
    {
        idSong: 4,
        nameSong: "I got 5 on it",
        singer: "Lizzo"
    },
    {
        idSong: 4,
        nameSong: "I got 5 on it",
        singer: "Lizzo"
    },{
        idSong: 5,
        nameSong: "Cars That Go Boom",
        singer: "Machuine"
    },{
        idSong: 6,
        nameSong: "Brothers Goona Work On It",
        singer: "Lizzo"
    },{
        idSong: 7,
        nameSong: "I got 5 on it",
        singer: "Lizzo"
    },{
        idSong: 8,
        nameSong: "Must",
        singer: "Lizzo"
    },{
        idSong: 9,
        nameSong: "I got 5 on it",
        singer: "Lizzo"
    },{
        idSong: 10,
        nameSong: "Closed Doors",
        singer: "J Hus"
    },
    {
        idSong: 11,
        nameSong: "I Got Your Money",
        singer: "Lizzo"
    },{
        idSong: 12,
        nameSong: "Closed Doors",
        singer: "J Hus"
    }
]

  return (
    <>
    
    <div className="themecontainer" style={{backgroundColor: theme}}>
       <div className="container1">
        <img src="https://assets-global.website-files.com/60a0ade9a9e15bdd6b98f68b/60d5dbf12e61d241489c30b1_spotify-for-artists.jpg" style = {{height: "200px"}}></img>
        
       </div>
       <div className="container2">
       <h1 style={{color: "red", fontSize:"20px"}}>Playlist</h1>
       <h3>Daily Mix 4</h3>
       <p>Listen Dr.Dre Machine Gun Kelly</p>
       
       <h1 style={{color:"red"}}>Spotify</h1><p> 50 songs, 3hr 15min</p>
       </div>

    
    <div  className="container3">
       <Container >
        <ListGroup >
        {
            songs.map((s)=>
            <ListGroup.Item style={{backgroundColor:theme, color: "green"}}
            as="li"   
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{s.name}</div>
              {s.nameSong}
            </div>
            <Badge bg="primary" pill>
             {s.idSong}
            </Badge>
            </ListGroup.Item>
            )
        }
        </ListGroup>
    </Container>
    <button className="buttondark" type="button" onClick={()=>setTheme("black")}>Dark</button>
    <button className="buttonlight" type="button" onClick={()=>setTheme("white")}>Light</button>
    </div>
    </div>

    

    </>
  )
}

export default Theme