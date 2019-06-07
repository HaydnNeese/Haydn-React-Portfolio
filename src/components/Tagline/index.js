import React from 'react';

const divStyle = {
    textAlign: 'center',
    color: 'black',
    marginTop: '5%',
}

const h3Style = {
    color: 'black',
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '20px'
}

const h1Style = {
    fontFamily: "'Montserrat', sans-serif",
    color: 'black'
}

const linkStyle = {
    color: "black",
    fontSize: "20px",
    marginRight: "1%"
}


const Tagline = () => {
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>Haydn Neese</h1>
            <h3 style={h3Style}>Full-stack web developer</h3>
            <a style={linkStyle} href="https://www.linkedin.com/in/haydn-neese-676088173/"><i class="fab fa-linkedin"></i></a>
            <a style={linkStyle} href="https://github.com/HaydnNeese"><i class="fab fa-github"></i></a>
        </div>
    )
}

export default Tagline;