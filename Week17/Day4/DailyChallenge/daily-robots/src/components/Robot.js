// REDUX  

// import React, { Component } from "react";

// export default class Robot extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }


//     render() {
//         return (
//         <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
//             <img 
//                 alt="robots" 
//                 src={`https://robohash.org/${this.props.id}?`}>
//             </img>
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <p>{this.props.email}</p>
//             </div>
//         </div>
//         )
//     }
// }

// FUNCTIONAL COMPONENT

import React from "react";

function Robot({ id, name, email }) {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Robot;