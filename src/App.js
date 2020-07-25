import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"

import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/users"><button>Users</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </header>
      <hr /> {/* horizontal line : 수평선 */}
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props}/>
            )}
          />
          <Route path="/users" component={NotFound}/>
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
            />
        </Switch>
      </main>
    </Router>
  )
}

export default App


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const App = props => {
//   const [ personState, setPersonsState ] = useState({
//     persons : [
//       { name : 'Bellmin', age: 28 },
//       { name : 'KH', age: 28 },
//       { name : 'TS', age: 28 },
//     ], otherState : 'some other value'
//   });

//   const [otherState, setOtherState ] = useState('some other value');

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // 이렇게 쓰면 안됨 this.state.persons[0].name = 'bbb'
//     nameChangeHandler = (event) => { //setPersonState
//       this.setState()
//       persons:  [
//         { name : 'Jongmin', age: 29 },
//         { name : 'Kihyun', age: 30 },
//         { name : 'Taesub', age: 27 },
//       ],
//       otherState : personState.otherState
//     })
//   };
//     render () {
//      return(
//        <div className="App ">
//          <h1>Hi, I'm bellmin</h1>
//          <p>This is really working!</p>
//          <button onClick={this.switchNameHandler}>Switch Name</button>
//           <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}/>
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler}>My Hobbies: Coding</Person>
//           <Person
//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age}/>
//        </div>
//      )}
//   }

// export default App;