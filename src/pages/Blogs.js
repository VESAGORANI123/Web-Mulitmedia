import React, { useState } from 'react'
import './Blogs.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Videos from '../Videos/Avata-Trailer.mp4'
import ReactPlayer from 'react-player'



  const Blogs = () => {
    const [movie, setMovie] = useState({
      name:"Avatar",
      version:"Avatar 1",
      
    })

    

  //movie2
  const [movie1, setMovie1] = useState({
    name:"Matrix",
    version:"Matrix 1",

  })

  
//movie 3 showing text
  const[showText, setShowText] = useState(false);

  return (
    <>
    <div className='part1'>
    <h1>Best Movies Trailer</h1>
   
    </div>
    
    <div className='part2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <iframe width="" height="250px" src="https://www.youtube.com/embed/d9MyW72ELq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
        Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced.
        </Card.Text>
      
      </Card.Body>
    </Card>

 
    <Card style={{ width: '18rem' }}>
      
      <iframe width="" height="250px" src="https://www.youtube.com/embed/vKQi3bBA1y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Card.Body>
        <Card.Title>{movie1.name}</Card.Title>
        <Card.Text>
        The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.It is the first installment  
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    
      <iframe width="" height="250px" src="https://www.youtube.com/embed/5Cb3ik6zP2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <Card.Body>
        <Card.Title>The Shining</Card.Title>
        <Card.Text>
        The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. The film is based on Stephen King's 1977 novel of the same name and stars Jack Nicholson, Shelley Duvall, Scatman Crothers, and Danny Lloyd.
        </Card.Text>

    
      </Card.Body>
    </Card>
    </div>
   
   
    </>
    
  )

  
}

export default Blogs;