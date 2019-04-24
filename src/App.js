import React, { Component } from 'react';
import axios from 'axios';
import  UserTable from './components/UserTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          <UserTable items={items} />
        </div>
      );
    }
  }
}

export default App;
