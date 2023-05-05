import React, { Component } from 'react';
import { Container ,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import AddForm from './components/AddForm';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      users :[
        {
          name: "William",
          email: "willie@gmail.com",
          gen: 24
        },
        {
          name: "John",
          email: "john@gmail.com",
          gen: 15
        }
      ]
    }
  }
  addNewUser = (user) => {
    this.setState({
      users:[...this.state.users, user]
    })
  }
  render() {
    return (
      <>
       <Container fluid style={{marginTop:'2rem'}}>
        <Row>
          <Col md="4"> 
          <AddForm addUser={this.addNewUser}/>
          </Col>
          <Col md="8"> 
          <Users usersData= {this.state.users} />
          </Col>
        </Row>
        </Container> 
      </>
    );
  }
}

export default App;
