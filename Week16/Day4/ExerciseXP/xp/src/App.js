// EXERCISE 1: 

// import React from "react";
// import { ErrorBoundary } from "./components/ErrorBoundary";
// import { BrowserRouter } from "react-router-dom"
// import { Routes, Route, NavLink } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css" 

// const routes = (
//   <Routes>
//     <Route path="/" element={<HomeScreen />}></Route>
//     <Route path="/profile" element={<ProfileScreen />}></Route>
//     <Route path="/shop" element={<ShopScreen />}></Route>
//   </Routes>
// )

// export default class App extends React.Component {
//   render() {
//   return(
//     <ErrorBoundary>
//       <BrowserRouter>
//       <Navbar />
//       {routes}
//       </BrowserRouter>
//     </ErrorBoundary>
//   )
//   }
// }

// function Navbar(){
//   return (
//     <div>
//       <nav className="nav nav-pills">
//         <NavLink className='nav-link' to="/">Home</NavLink>
//         <NavLink className='nav-link' to="/profile">Profile</NavLink>
//         <NavLink className='nav-link' to="/shop">Shop</NavLink>
//       </nav>
//     </div>
//   )
// }

// function HomeScreen() {
//   return <h1>Home</h1>
// }

// function ProfileScreen() {
//   return <h1>Profile</h1>
// }

// function ShopScreen() {
//   return <h1>Shop</h1>
// }

// EXERCISE 1: ERRORBOUNDARY CORRECT WAY

// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import { ErrorBoundary} from "react-error-boundary"
// import "bootstrap/dist/css/bootstrap.min.css" 

// const routes = (
//   <Routes>
//     <Route path="/" element={<HomeScreen />}></Route>
//     <Route path="/profile" element={<ProfileScreen />}></Route>
//     <Route path="/shop" element={<ShopScreen />}></Route>
//   </Routes>
// )

// const App = () => {
//   return(
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//       {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   )
// }
 
// function Navbar(){
//   return (
//     <div>
//       <nav className="nav nav-pills">
//         <NavLink className='nav-link' to="/">Home</NavLink>
//         <NavLink className='nav-link' to="/profile">Profile</NavLink>
//         <NavLink className='nav-link' to="/shop">Shop</NavLink>
//       </nav>
//     </div>
//   )
// }

// function HomeScreen() {
//   return <h1>Home</h1>
// }

// function ProfileScreen() {
//   return <h1>Profile</h1>
// }

// function ShopScreen() {
//   throw new Error('Oh no!')
//   // return <h1>Shop</h1>
// }
// function ErrorFallback() {
//   return <h1>An error has ocurred</h1>
// }
// export default App 

// EXERCISE 2: DISPLAY JSON DATA


// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import { ErrorBoundary} from "react-error-boundary"
// import "bootstrap/dist/css/bootstrap.min.css" 
// import { PostList } from "./components/PostList";

// const routes = (
//   <Routes>
//     <Route path="/" element={<PostList />}></Route>
//     <Route path="/profile" element={<ProfileScreen />}></Route>
//     <Route path="/shop" element={<ShopScreen />}></Route>
//   </Routes>
// )

// const App = () => {
//   return(
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//       {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   )
// }
 
// function Navbar(){
//   return (
//     <div>
//       <nav className="nav nav-pills">
//         <NavLink className='nav-link' to="/">Post</NavLink>
//         <NavLink className='nav-link' to="/profile">Profile</NavLink>
//         <NavLink className='nav-link' to="/shop">Shop</NavLink>
//       </nav>
//     </div>
//   )
// }

// function ProfileScreen() {
//   return <h1>Profile</h1>
// }

// function ShopScreen() {
//   return <h1>Shop</h1>
// }
// function ErrorFallback() {
//   return <h1>An error has ocurred</h1>
// }
// export default App 

//EXERCISE 3: Display JSON Data And Parse It

// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import { ErrorBoundary} from "react-error-boundary"
// import "bootstrap/dist/css/bootstrap.min.css" 
// import {SocialMedia} from "./components/SocialMedia"
// import {Skills} from "./components/Skills"
// import {Experiences} from "./components/Experiences"

// const routes = (
//   <Routes>
//     <Route path="/" element={<SocialMedia />}></Route>
//     <Route path="/experiences" element={<Experiences />}></Route>
//     <Route path="/skills" element={<Skills />}></Route>
//   </Routes>
// )

// const App = () => {
//   return(
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//       {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   )
// }
 
// function Navbar(){
//   return (
//     <div>
//       <nav className="nav nav-pills">
//         <NavLink className='nav-link' to="/">Social Media</NavLink>
//         <NavLink className='nav-link' to="/experiences">Experiences</NavLink>
//         <NavLink className='nav-link' to="/skills">Skills</NavLink>
//       </nav>
//     </div>
//   )
// }

// function ErrorFallback() {
//   return <h1>An error has ocurred</h1>
// }
// export default App 

// EXERCISE 4: Post JSON Data With React JS

// import React from 'react'

// export class App extends React.Component {
//   handleClick = async () => {
//     const url = 'https://webhook.site/c22bf15a-d799-4882-9bb1-54e5cec3fd77'
//     try{
//       const body = {
//         key1: 'myusername',
// email: 'mymail@gmail.com',
// name: 'Isaac',
// lastname: 'Doe',
// age: 27
//       }
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         }, 
//         body: JSON.stringify(body)
//       }
//     const res = await fetch(url, options)
//     console.log('res:', res)
//     } catch(err) {
//       console.error(err)
//     }
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>Post Data</button>
//     )
//   }
// }

// export default App

//FUNCTIONAL COMPONENTS:

import React from 'react';

function App() {
  const handleClick = async () => {
    const url = 'https://webhook.site/c22bf15a-d799-4882-9bb1-54e5cec3fd77';
    try {
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
      const res = await fetch(url, options);
      console.log('res:', res);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleClick}>Post Data</button>;
}

export default App;
