import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import AddForm from './components/AddForm';

class App extends Component {
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.props.dispatch({ type: 'ADD_USER', payload: user });
  }

  deleteUser = (id) => {
    this.props.dispatch({ type: 'DELETE_USER', payload: id });
  }

  editUser = (id, updatedUser) => {
    this.props.dispatch({ type: 'EDIT_USER', payload: { id, user: updatedUser } });
  }

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: '2rem' }}>
          <Row>
            <Col md="4">
              <AddForm addUser={this.addNewUser} />
            </Col>
            <Col md="8">
              <Users usersData={this.props.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps,)(App);
