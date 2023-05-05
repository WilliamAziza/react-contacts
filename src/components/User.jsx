import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap'

class User extends Component {
    render(props) {
        return (
            <Col md='4'>
                <Card>
                    <Card.Body>
                        
                        <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
                        <Card.Title>{this.props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {this.props.userInfo.email}</p>
                            <p>Gen:{this.props.userInfo.gen}</p>
                        </Card.Text>
                        <Card.Link href="#">Edit</Card.Link>
                        <Card.Link href="#">Delete</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default User;
