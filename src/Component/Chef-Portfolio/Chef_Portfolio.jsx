import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Chef-Portfolio.css'
const Chef_Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef_portfolio')
            .then(res => res.json())
            .then(data => setPortfolios(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='chef-portfolio-section'>
            <div>
                <h2 className='section-head-text text-center'>Our Chef</h2>
            </div>
            <Container>
            <Row xs={1} md={2} className="g-4">
                {portfolios.map((portfolio) => (
                    <Col key={portfolio.id}>
                        <Card className='single-chef'>
                            <Row noGutters>
                                <Col md={4}>
                                    <Card.Img src={portfolio.Chef_Picture} alt={portfolio.Chef_Name} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{portfolio.Chef_Name}</Card.Title>
                                        <Card.Text>
                                            Years of Experience: {portfolio.Years_of_experience}<br />
                                            Number of Recipes: {portfolio.Numbers_of_recipes}<br />
                                            Likes: {portfolio.Likes}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </div>
    );
};

export default Chef_Portfolio;
