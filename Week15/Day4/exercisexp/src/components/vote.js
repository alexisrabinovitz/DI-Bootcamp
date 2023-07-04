// import React, {Component} from 'react';
// import './Vote.css';

// export class Vote extends Component{

//     constructor(props){
//     super(props);

//         this.state = {
//             languages : [
//                 {name: "Php", votes: 0},
//                 {name: "Python", votes: 0},
//                 {name: "JavaSript", votes: 0},
//                 {name: "Java", votes: 0}
//             ]
//         }

//     }

//     vote (i) {
//         let newLanguages = [...this.state.languages];
//         newLanguages[i].votes++;

//         this.setState({languages: newLanguages});

//     }

//     render(){
//         return(
//             <div>
//                 <h1>Vote Your Language!</h1>
//                 <div className="languages">
//                     {
//                         this.state.languages.map((language, i) => 
//                             <div key={i} className="language">
//                                 <div className="voteCount">
//                                     {language.votes}
//                                 </div>
//                                 <div className="languageName">
//                                     {language.name}
//                                 </div>
//                                 <button onClick={this.vote.bind(this, i)}>Click Here</button>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// REFACTORED TO FUNCTIONAL COMPONENTS 


import React, {useState} from 'react'
import './vote.css' 

export const Vote = () => {
    const [languages, setLanguages] = useState([
        {name: 'Php', votes: 0},
        {name: 'Python', votes: 0},
        {name: 'JavaScript', votes: 0},
        {name: 'Java', votes: 0},
    ])


const vote = (i) => {
    const newLanguages = [...languages]
    newLanguages[i].votes++
    setLanguages(newLanguages)
}

return (
    <div>
        <h1>Vote Your Language!</h1>
        <div className='languages'>
        {languages.map((language, i) => (
            <div key={i} className='language'>
            <div className='voteCount'>{language.votes}</div>
            <div className='languageName'>{language.name}</div>
            <button onClick={() => vote(i)}> Click Here</button>
            </div>
        ))}
      </div>
    </div>
)
}