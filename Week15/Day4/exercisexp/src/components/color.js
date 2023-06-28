// PART 1 

// import React, {Component} from 'react'

// export class Color extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {favoriteColor: 'red'}
//     }
//     render() {
//         return <h1>My favorite color is: {this.state.favoriteColor}</h1>
//     }
// }

// PART 2


// import React, {Component} from 'react'

// export class Color extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {favoriteColor: 'red'}
//     }
//     render() {
//         return <h1>My favorite color is: {this.state.favoriteColor}</h1>
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({favoriteColor: 'yellow'})
//         }, 5000)
//     }
// }

// PART 3

// import React, {Component} from 'react'

// export class Color extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {favoriteColor: 'red'}
//     }
//     changeColor = () => {
//         this.setState({favoriteColor: 'blue'})
//     }
//     render() {
//         return (
//             <>
//             <h1>My favorite color is: {this.state.favoriteColor}</h1>
//             <button onClick={this.changeColor}>Change color to blue</button>
//             </>
//         ) 
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({favoriteColor: 'yellow'})
//         }, 5000)
//     }
// }

// FUNCTIONAL COMPONENT 

import React, { useState, useEffect } from 'react';

export const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    const changeColor = () => {
        setFavoriteColor('blue');
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFavoriteColor('yellow');
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <h1>My favorite color is: {favoriteColor}</h1>
            <button onClick={changeColor}>Change color to blue</button>
        </>
    );
};