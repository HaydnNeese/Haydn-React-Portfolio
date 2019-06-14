import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const divStyle = {
    margin: '3% 15%',
    padding: '3%',
    fontSize: '130%',
    border: 'solid black 1px',
    fontFamily: "'Open Sans Condensed', sans-serif",
    marginBottom: '15%',
}

const h5Style= {
    fontSize: '150%',
    textAlign: 'center',
    fontWeight: 'bolder',
}

const buttonStyle = {
    backgroundColor: 'silver',
    borderColor: 'silver',
}

const CoverLetter = (props) => {
    return (
        <div style={divStyle}>
            <p >
                Dear Hiring Manager,<br />
                I want to thank you for taking the time to look at my resume. I am a young/hungry developer excited to make my mark on the industry.
                I am a hard worker, a dependable employee, and a devoted problem solver. I love being presented with a challenge and being able to overcome it.
                <br /><br />
                With hiring me, you receive a developer who will not shy away from the challenges of being new in the field. I have almost a year of experience with
                multiple coding languages and I understand that I need to approach this career humbly and willing to make sacrifices. I know what it takes to take on
                the challenges of learning new technologies and have a high capacity for learning many new things. I have untapped potential that comes at a low cost
                and the hiring company that invests in that potential will have a devoted employee living each day to make that decision pay off for them.
            </p>
            <h5 style={h5Style}>Click one of the buttons below for my resume</h5>
            <div className="d-flex flex-column">
                <ButtonGroup  size="sm" className="mt-3">
                    <Button style={buttonStyle}><a href={props}>Click for .pdf format</a></Button>
                    <Button style={buttonStyle}>Click for .docx format</Button>
                    <Button style={buttonStyle}>Click for .html format</Button>
                </ButtonGroup>
            </div>

        </div>
    )
}

export default CoverLetter;