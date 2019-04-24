import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      pictures: []
    }
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const user = res.data;
        this.setState({
          isLoaded: true,
          items: user
        });
      })

      // axios.get(`https://jsonplaceholder.typicode.com/photos`)
      // .then(res => {
      //   const
      // })
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          <Table striped bordered hover>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}

            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default App;
