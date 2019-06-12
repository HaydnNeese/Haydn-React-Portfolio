import React, { Component } from 'react';
import ResponsiveNavbar from '../components/Navbar/index';
import Paragraph from '../components/About/index';

class About extends Component {
    render() {
        return(
            <div>
                <ResponsiveNavbar />
                <Paragraph />
            </div>
        )
    }
}

export default About;