import React, { Component } from 'react';
import ResponsiveNavbar from '../components/Navbar/index';
import Tagline from '../components/Tagline/index';
import ProjectCarousel from '../components/Carousel/index';
class Homepage extends Component {
    render() {
        return (
            <div>
            <ResponsiveNavbar />
            <Tagline />
            <ProjectCarousel />
            </div>
        );
    }
}


export default Homepage;