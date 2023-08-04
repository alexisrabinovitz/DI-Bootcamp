// REDUX 

// import React, { Component } from "react";
// import RobotContainer from "./components/RobotContainer";
// import { connect } from "react-redux";
// import './App.css';


// const usersUrl = "https://jsonplaceholder.typicode.com/users";
// // const imageUrl = "https://robohash.org/3?200x200";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { users: [] };
//   }
//   componentDidMount(){
//     fetch(usersUrl)
//     .then((res) => res.json())
//     .then((users) => this.setState({users: users}))
//     .catch(console.error);
//   }

//   handleChange = (e) => {
//     const searchString = e.target.value; 
//     this.props.dispatch({ type: "SEARCH_ROBOT", payload: searchString });
//   }

//   render () {
//     return (
//     <div>
//       <h1 className="title">Robofriends</h1>
//       <div className="tc">
//           <div className="pa2">
//              <input 
//              type="search" 
//              className="pa3 ba b--green bg-lightest-blue" 
//              placeholder="search robots"
//              onChange={this.handleChange}/>
//          </div>
//       </div>
//         <RobotContainer users={this.state.users}/>
//     </div>
//   );
// }}

// export default connect()(App);

// FUNCTIONAL COMPONENTS 

// App.js (Functional Component without Redux)
import React, { useState, useEffect} from "react";
// import RobotContainer from "./components/RobotContainer";
import './App.css';
import RobotProfile from "./components/RobotProfile";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1 className="title">Robofriends</h1>
      <div className="tc">
        <div className="pa2">
          <input
            type="search"
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="search robots"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <RobotContainer users={users} searchTerm={searchTerm} /> */}
      <RobotProfile users={filteredUsers} />
    </div>
  );
}

export default App;