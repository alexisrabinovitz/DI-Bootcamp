//USING REDUX and reducer


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const age = useSelector(state => state.age);
  const dispatch = useDispatch();


  return (
    <div>
      <span>Age: {age}</span>
      <button onClick={()=>dispatch({type: "AGE_UP"})}>Age Up</button>
      <button onClick={()=>dispatch({type: "AGE_DOWN"})}>Age Down</button>
    </div>
  );
}

export default App;






// REFACTOR TO FUNCTIONAL COMPONENT USING USE STATE AND EFFECT WITHOUT REDUX and reducer


// import React, { useState } from 'react';

// function App() {
//   const [age, setAge] = useState(20);

//   const handleAgeUp = () => {
//     setAge(age + 1);
//   };

//   const handleAgeDown = () => {
//     setAge(age - 1);
//   };

//   return (
//     <div>
//       <span>Age: {age}</span>
//       <button onClick={handleAgeUp}>Age Up</button>
//       <button onClick={handleAgeDown}>Age Down</button>
//     </div>
//   );
// }

// export default App;

// No need for reducers/reducer.js and Redux setup in index.js








// BEST PRACTICE REFACTORING FUNCTIONAL COMPONENT WITHOUT REDUX and reducer


// import React, { useState } from 'react';

// function App() {
//   const [age, setAge] = useState(20);

//   return (
//     <div>
//       <span>Age: {age}</span>
//       <button onClick={() => setAge(age + 1)}>Age Up</button>
//       <button onClick={() => setAge(age - 1)}>Age Down</button>
//     </div>
//   );
// }

// export default App;




























// REFACTORED INTO FUNCTIONAL COMPONENT - B


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function App() {
//   const age = useSelector(state => state.age);
//   const dispatch = useDispatch();

//   const handleAgeUp = () => {
//     dispatch({ type: 'AGE_UP' });
//   };

//   const handleAgeDown = () => {
//     dispatch({ type: 'AGE_DOWN' });
//   };

//   return (
//     <div>
//       <span>Age: {age}</span>
//       <button onClick={handleAgeUp}>Age Up</button>
//       <button onClick={handleAgeDown}>Age Down</button>
//     </div>
//   );
// }

// export default App;






// // REFACTORED INTO CLASS COMPONENT

// import React from 'react';
// import { connect } from 'react-redux';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <span>Age: {this.props.age}</span>
//         <button onClick={this.props.onAgeUp}>Age Up</button>
//         <button onClick={this.props.onAgeDown}>Age Down</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     age: state.age
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAgeUp: () => dispatch({ type: 'AGE_UP' }),
//     onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);



















