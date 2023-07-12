// import React from "react";
// import posts from "./../data/data2.json";

// export class Experiences extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("posts:", posts);
//     }

//     render() {
//         const experiences = posts.Experiences.map((xp) => {
//             return (
//                 <>
//                 <h4>{xp.companyName}</h4>
//                 <img src={xp.logo} width="100" height="100" alt="logo"/>
//                 {xp.roles.map((role) => (
//                     <>
//                     <p>{role.title}</p>
//                     <span>{role.startDate}</span>, <span>{role.location}</span>
//                     <p>{role.description}</p>
//                     </>
//                 ))}
//                 </>
//             );
//         });
        
//         return experiences;
//     }
// }



// FUNCTIONAL COMPONENT


import React from "react";
import posts from "./../data/data2.json";

export const Experiences = () => {

  const experiences = posts.Experiences.map((xp) => (
    <div key={xp.companyName}>
      <h4>{xp.companyName}</h4>
      <img src={xp.logo} width="100" height="100" alt="logo" />
      {xp.roles.map((role) => (
        <div key={role.title}>
          <p>{role.title}</p>
          <span>{role.startDate}</span>, <span>{role.location}</span>
          <p>{role.description}</p>
        </div>
      ))}
    </div>
  ));

  return experiences;
};