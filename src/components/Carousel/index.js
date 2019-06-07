import React from 'react';
import { Carousel } from 'react-bootstrap';
const slideArrowStyle = {
    color: "black",
};
const titleStyle = {
    fontSize: "50px",
};
const linkStyle = {
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
};
const carouselStyles = {
    margin: '0 auto',
    marginTop: '3%',
    color: 'black',
    maxWidth: '600px',
};
const bodyStyle = {
    fontFamily: "'Work Sans', sans-serif",
};

const ProjectCarousel = () => {
    return (
        <Carousel style={carouselStyles}>
            <Carousel.Item style={slideArrowStyle}>
                <img
                    className="d-block m-auto"
                    src="https://www.aussiebroadband.com.au/wp-content/uploads/2016/09/shutterstock_148407893.jpg"
                    alt="First slide"
                    height="300px"
                    width="600px"
                />
            <Carousel.Caption>
                    <h3 style={titleStyle}><a style={linkStyle} href="https://atlas-secure-info.herokuapp.com/">Atlas</a></h3>
                    <p style={bodyStyle}>A secure storage application meant to store your personal reminders 
                        <br/> and other information you would rather not share.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block m-auto"
                    src="https://www.onemedical.com/media/images/happy-hour-crop_nu1NXwe.original.jpg"
                    alt="Third slide"
                    height="300px"
                    width="600px"
                />
                <Carousel.Caption>
                    <h3 style={titleStyle}><a style={linkStyle} href="https://app-happy-hour.herokuapp.com/">Happy Hour</a></h3>
                    <p style={bodyStyle}>A website meant for companies to host their businesses and 
                        <br/> customers to discover the businesses daily specials all in one place.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block m-auto"
                    src="https://media.rideguru.com/hero_images/rideshare_driver_201_BQzAK7h.jpg"
                    alt="Third slide"
                    height="300px"
                    width="600px"
                />

                <Carousel.Caption>
                    <h3 style={titleStyle}><a style={linkStyle} href="https://scout-ride-share.herokuapp.com/">Scout</a></h3>
                    <p style={bodyStyle}>This is an application that uses the coordinates given 
                        <br/> by the user with the Uber and Lyft API's to compare the 
                        <br/> prices and driver ETA's of Uber and Lyft. 
                    </p>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProjectCarousel;