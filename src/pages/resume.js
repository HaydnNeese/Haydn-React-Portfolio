import React, { Component } from 'react';
import ResponsiveNavbar from '../components/Navbar/index';
import CoverLetter from '../components/CoverLetter/index';


class Resume extends Component {
state = {
    resumes: [
        "files/haydn_pdf_resume.pdf",
        "files/haydn_docx_resume.docx",
        "files/haydn_zip_resume.zip"
    ]
}
    render() {
        return(
            <div>
                <ResponsiveNavbar />
                <CoverLetter 
                href={this.state.resumes[0]}
                />
            </div>
        )
    }
}

export default Resume;