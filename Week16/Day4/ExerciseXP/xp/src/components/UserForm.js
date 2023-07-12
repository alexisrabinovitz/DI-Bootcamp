// import React from 'react'

// export class UserForm extends React.Component{
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }
//     handleSubmit = async (e) => {
//         e.preventDefault()
//         const message = document.getElementById('search').value 
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({message})
//         }

//         const url = 'http://localhost:3001/api/world'
//         const resJson = await fetch(url, options)
//         const res = await resJson.json()
//         this.props.setMessage(res.message)
//         console.log('res:', res)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" placeholder='Something here' id='search' />
//                 <input type="submit" value='Submit' />
//             </form>
//         )
//     }
// }



// EMPTY MESSAGE INPUT


// import React from "react";

// export class UserForm extends React.Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }

//    handleSubmit = async (e) => {
//         e.preventDefault();
//         const messageInput = document.getElementById("search");
//         const message = messageInput.value;
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ message })
//         };
//         const url = "http://localhost:3001/api/world";
//         const resJson = await fetch(url, options);
//         const res = await resJson.json();
//         this.props.setMessage(res.message);
//         console.log("res:", res);
//         messageInput.value = "";
//     };

// render(){
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <input type="text" placeholder="Something here" id="search" />
//             <input type="submit" value="Submit"/>
//         </form>
//     );
//   }
// }




// REFACTOR INTO FUNCTIONAL COMPONENT


import React from "react";

export const UserForm = ({ setMessage }) => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const messageInput = document.getElementById("search");
      const message = messageInput.value;
      const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
        };
      const url = "http://localhost:3001/api/world";
      const resJson = await fetch(url, options);
      const res = await resJson.json();
      setMessage(res.message);
      console.log("res:", res);
      messageInput.value = "";
      };

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Something here" id="search" />
        <input type="submit" value="Submit"/>
    </form>
);

};