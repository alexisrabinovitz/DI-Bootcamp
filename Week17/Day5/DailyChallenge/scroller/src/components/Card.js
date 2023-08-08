// // STEP 1

// import React, {Component} from "react";
// import "./Card.css"

// export default class Card extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }

//     render() {
//         return (
//             <div className="card">
//                 <div className="card_subtitle">
//                     <i className={this.props.info.icon}></i>
//                     <h2> {this.props.info.title} </h2>
//                 </div>
//                  <h3>{this.props.info.points}</h3>
//             </div>
//         )
//     }
// }

// // STEP 2

// import React, {Component} from "react";
// import "./Card.css"

// export default class Card extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }

//     render() {
//         const icon = this.props.icon
//         const title = this.props.title
//         const points = this.props.points

//         return (
//             <div className="card">
//                 <div className="card_subtitle">
//                     <i className={icon}></i>
//                     <h2> {title} </h2>
//                 </div>
//                  <h3>{points}</h3>
//             </div>
//         )
//     }
// }

// // STEP 3

// import React, {Component} from "react";
// import "./Card.css"

// export default class Card extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }

//     render() {
//         const {icon, title, points} = this.props.info

//         return (
//             <div className="card">
//                 <div className="card_subtitle">
//                     <i className={icon}></i>
//                     <h2> {title} </h2>
//                 </div>
//                  <h3>{points}</h3>
//             </div>
//         )
//     }
// }



// // STEP 3 // Functional components 

// import React from "react";
// import "./Card.css"

// function Card(props) {
//     const {icon, title, points} = props.info
//     return (
//         <div className="card">
//             <div className="card_subtitle">
//                 <i className={icon}></i>
//                 <h2> {title} </h2>
//             </div>
//              <h3>{points}</h3>
//         </div>
//     )
// }

// export default Card

// // STEP 4
// import React, {Component} from "react";
// import "./Card.css"

// export default class Card extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }

//     render() {
//         const {icon, title, points} = this.props.info
        
//         const isIconEmpty = (icon) => {
//             if (icon === null) return true
//             if (icon === undefined) return true
//             if (icon === "") return true
//             return false
//         }
//         const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon;

//         return (
//             <div className="card">
//                 <div className="card_subtitle">
//                     <i className={iconName}></i>
//                     <h2> {title} </h2>
//                 </div>
//                  <h3>{points}</h3>
//             </div>
//         )
//     }
// }


// // STEP 5
// import React, {Component} from "react";
// import "./Card.css"

// export default class Card extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }

//     render() {
//         const {icon, title, points} = this.props.info
        
//         const isIconEmpty = (icon) => {
//             if ([null, undefined, ""].includes(icon)) return true
//             return false} 

//         const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon;

//         return (
//             <div className="card">
//                 <div className="card_subtitle">
//                     <i className={iconName}></i>
//                     <h2> {title} </h2>
//                 </div>
//                  <h3>{points}</h3>
//             </div>
//         )
//     }
// }


// STEP 5 // functional components 
import React from "react";
import "./Card.css"

function Card(props) {
    const {icon, title, points} = props.info
        
    const isIconEmpty = (icon) => {
        if ([null, undefined, ""].includes(icon)) return true
        return false} 
        
    const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon;

    return (
        <div className="card">
            <div className="card_subtitle">
                <i className={iconName}></i>
                <h2> {title} </h2>
            </div>
             <h3>{points}</h3>
        </div>
    )
}

export default Card