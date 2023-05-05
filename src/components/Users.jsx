import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';

class Users extends Component {
    render(props) {
        return (
            <Container>
                <Row>
                    {
                        this.props.usersData.map((user,index)=>{
                            return (
                                <User userInfo={user} key={index}/>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Users;
