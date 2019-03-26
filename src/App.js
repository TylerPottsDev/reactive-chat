import React, { Component } from 'react';
import * as firebase from 'firebase';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      online: [],
      username: ''
    }
  }

  componentDidMount () {
    this.db = firebase.database();

    // this.db.ref('users').get().then(snap => {
    //   let users = snap.docs.map(doc => doc.data());

    //   this.setState({
    //     online: users
    //   });
    // });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section className="online">
            <h3>Online users</h3>
            <div className="users">
              {this.state.online.map((user, i) => (<div className="user" key={i}>{user.name}</div>))}
            </div>
          </section>
          <section className="chatrooms">
            <div className="chatroom">Chatroom 1</div>
            <div className="chatroom">Chatroom 2</div>
            <div className="chatroom">Chatroom 3</div>
          </section>
          <section className="status">
            Status: Online
          </section>
        </main>
      </div>
    );
  }
}

export default App;
