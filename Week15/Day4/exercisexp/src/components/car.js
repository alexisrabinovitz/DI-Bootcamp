// PART I AND II

// import React, {Component} from 'react'


// const carinfo = { name: 'Ford', model: 'Mustang'} 

// export class Car extends Component {

//     constructor(){
//         super()
//         this.state = {color: 'red'}
//     }

//     render () {
//         return (
//         <>
//         <header>This car is a {carinfo.model}</header>
//         <h1>This car is {this.state.color}</h1>
//         </>
//         )
//     }
// }

// PART III 

// import React, {Component} from 'react'
// import {Garage} from "./garage.js"


// const carinfo = { name: 'Ford', model: 'Mustang'} 

// export class Car extends Component {

//     constructor(){
//         super()
//         this.state = {color: 'red'}
//     }

//     render () {
//         return (
//         <>
//         <header>This car is a {carinfo.model}</header>
//         <h1>This car is {this.state.color}</h1>
//         <p>Garage Component:</p>
//         <Garage/>
//         <Garage size ="small" />
//         </>
//         )
//     }
// }

// BEST PRACTICE 

import React from 'react'
import {Garage} from "./garage.js"

const carinfo = {name: 'Ford', model:'Mustang'}

export function Car() {
    const color = 'red'

    return (
        <>
        <header>This car is a {carinfo.model}</header>
        <h1>This car is {color}</h1>
        <p>Garage Component:</p>
        <Garage size = 'small'/>
        <Garage size = 'medium'/>
        <Garage size = 'big'/>
        </>
    )
}