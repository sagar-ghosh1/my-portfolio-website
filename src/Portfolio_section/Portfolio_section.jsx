import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Portfolio_section = () => {
    return (
        <div className='' id="portfolio">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='cardImages' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        <h1>dklfjlskdj</h1>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Portfolio_section;