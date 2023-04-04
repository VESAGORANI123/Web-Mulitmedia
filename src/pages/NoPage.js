import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import './NoPage.css';

const NoPage = () => {

    return(
       <>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://people.com/thmb/Gc2bEAXZusNxPVlhuK8IZRdgQX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1159x347:1161x349)/avatar-2-way-of-the-water-trailer-110222-3-7fcc8ab436204e46ab9ab7bb007b5fbe.jpg" height="700px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avatar The Way of Water</h3>
          <p>Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/the-shining-grand-overlook-hotel-jddla32y7ql63r24.jpg" height="700px"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.moviesanywhere.com/9e198d678b3e47f808f5a8f27f3e1e18/1b75cfe6-be1a-409f-b296-7f38e345fc9d.jpg?w=2560&r=16x9" height="700px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Matrix</h3>
          <p>
          The Matrix is an example of the cyberpunk subgenre of science fiction
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className="gif">
    <h2 className="part2title">Most Wanted Movies<hr></hr></h2>
    <img src="https://i.gifer.com/A62i.gif" height="100px" width="100%"/>
    </div>
  
    <div className="part2">
   
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTpg0c9LkOK8FHuBZUT3NyHMaGrmHij1h5w&usqp=CAU"
      />
      <Figure.Caption>
        THE CINMEA
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480"
      />
      <Figure.Caption>
        WAKANDA FOREVER
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://i.ytimg.com/vi/KWQba_zNjWM/movieposter_en.jpg"
      />
      <Figure.Caption>
        BLACK ADAM
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://www.justwatch.com/images/poster/300177312/s332/spider-man-no-way-home"
      />
      <Figure.Caption>
        SPIDERMAN
      </Figure.Caption>
    </Figure>

    
    </div>
       </>
    )
    
};

export default NoPage; 