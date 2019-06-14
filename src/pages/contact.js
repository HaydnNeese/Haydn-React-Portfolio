import React, { Component } from 'react';
import ResponsiveNavbar from '../components/Navbar/index';
import ContactInfo from '../components/ContactInfo/index';

class Contact extends Component {
    render() {
        return(
            <div>
                <ResponsiveNavbar />
                <ContactInfo />
            </div>
        )
    }
}

export default Contact;