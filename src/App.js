import React, {useState} from 'react'
import { Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"

import Home from './Home'
import About from './About'
import NotFound from './NotFound'

function App() {
  const [comp, setComp] = useState(Home)

  return (
    <Router>
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/users"><button>Users</button></Link>
      </header>
      <hr /> {/* horizontal line : 수평선 */}
      <main>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={NotFound}/>
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