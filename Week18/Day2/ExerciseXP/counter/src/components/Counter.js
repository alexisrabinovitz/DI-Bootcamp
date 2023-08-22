// //PART 1 *

// import React, { Component } from 'react';
// import {connect} from "react-redux";

// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }
//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>this.props.dispatch({type: "DECREMENT"})}>-</button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }

// export default connect(mapStateToProps)(Counter);






// PART 1 (USING FUNCTIONAL COMPONENT)



//PART 1 FUNCTIONAL COMPONENT

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function Counter() {

//     const counter = useSelector(state => state.counterReducer);
//     const dispatch = useDispatch();

//     return (
//       <div>Counter: {counter}
//       <button onClick={()=>dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
//       </div>
//     );
//   }
//   export default Counter;
 
  // The useSelector hook is used to access the counter state from the Redux store.
  // The useDispatch hook is used to get the dispatch function, which is used to dispatch actions.

  // The connect HOC is not needed anymore, as hooks directly provide access to the store's state 
  // and dispatch function.








//PART 2

// import React, { Component } from 'react';
// import {connect} from "react-redux";
// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }
//     handleIncrementAsync = () => {
//         setTimeout(() => {
//             this.props.dispatch({type: "INCREMENT"});
//         }, 1000);
//     }
//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>this.props.dispatch({type: "DECREMENT"})}>-</button>
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT_IF_ODD"})}>Increment if odd</button>
//       <button onClick={this.handleIncrementAsync}>Increment async</button>
//       </div>
//     );}}
// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }
// export default connect(mapStateToProps)(Counter);





// PART 2 FUNCTIONAL COMPONENT


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);

  const handleIncrementAsync = () => {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };

  return (
    <div>
      Counter: {counter}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_IF_ODD' })}>Increment if odd</button>
      <button onClick={handleIncrementAsync}>Increment async</button>
    </div>
  );
}
export default Counter;


  // The useSelector hook is used to access the counter state from the Redux store.
  // The useDispatch hook is used to get the dispatch function, which is used to dispatch actions.
  // The handleIncrementAsync function remains the same, as it is still responsible for 
  // dispatching the 'INCREMENT' action after a delay.
  // The connect HOC is not needed anymore, as hooks directly provide access to the store's state 
  // and dispatch function.








// //PART 3 (actions/counter.actions.js)

// import React, { Component } from 'react';
// import {connect} from "react-redux";
// import { decrementAction, incrementAction, incrementIfOdd } from '../actions/counter.actions';

// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }
//     handleIncrementAsync = () => {
//         setTimeout(() => {
//             this.props.dispatch(incrementAction);
//         }, 1000);
//     }
//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch(incrementAction)}>+</button>
//       <button onClick={()=>this.props.dispatch(decrementAction)}>-</button>
//       <button onClick={()=>this.props.dispatch(incrementIfOdd)}>Increment if odd</button>
//       <button onClick={this.handleIncrementAsync}>Increment async</button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }

// export default connect(mapStateToProps)(Counter);

















//PART 1 FUNCTIONAL COMPONENT

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function Counter() {

//     const counter = useSelector(state => state.counterReducer);
//     const dispatch = useDispatch();

//     return (
//       <div>Counter: {counter}
//       <button onClick={()=>dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
//       </div>
//     );
//   }


//   export default Counter;



// In this refactored version:

// The useSelector hook is used to access the counter state from the Redux store.

// The useDispatch hook is used to get the dispatch function, which is used to 
// dispatch actions.

// The handleIncrement and handleDecrement functions are defined to dispatch 
// the appropriate actions when the buttons are clicked.





// PART 1 REFACTORED


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function Counter() {
//   const counter = useSelector(state => state.counterReducer);
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const handleDecrement = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   return (
//     <div>
//       Counter: {counter}
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>
//     </div>
//   );
// }

// export default Counter;








