// // STEP 1

// import React from "react";
// import posts from "./../data/data2.json";

// export class Skills extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("posts:", posts);
//     }

//     render() {
//         return posts.Skills.map((skill) => <p>{skill.Area}</p>);
        
//     }
// }




// // STEP 2

// import React from "react";
// import posts from "./../data/data2.json";

// export class Skills extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("posts:", posts);
//     }

//     render() {
//         return posts.Skills.map((skill) => {
//             const area = skill.Area;
//             const skillSet = skill.SkillSet;
//         return (
//         <>
//         <p>{area}</p>
//         {skillSet.map((set) => (
//             <li>{set.Name}</li>
//         ))}
//         </>
//         );
//     });   
//     }
// }


// // FUNCTIONAL COMPONENT


import React from "react";
import posts from "./../data/data2.json";

export const Skills = () => {
  
  return (
    <>
      {posts.Skills.map((skill) => {
        const area = skill.Area;
        const skillSet = skill.SkillSet;

        return (
          <React.Fragment key={area}>
            <p>{area}</p>
            <ul>
              {skillSet.map((set) => (
                <li key={set.Name}>{set.Name}</li>
              ))}
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};