// import React, {Component} from 'react'
// import './App.css'
// import heroes from './data/heroes.json'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {heroes: heroes.superheroes, clickedHeroes: [], score: 0, topScore:0}
//   }
//   handleClick = (heroeName) => {
//     this.setState((state) => {
//       const newScore = state.clickedHeroes.includes(heroeName) ? 0 : state.score + 1
//       const clickedHeroes = state.clickedHeroes.includes(heroeName) ? [] : [...state.clickedHeroes, heroeName]
//       return {
//         heroes: [...state.heroes].sort((a, b) => (Math.random() > 0.5 ? -1 : 1)),
//         clickedHeroes: clickedHeroes,
//         score: newScore,
//         topScore: Math.max(newScore, state.topScore)
//       }
//     })
//   }
  
//   render() {
//     return (
//       <div className='container'> 
//         <nav className='navbar'>
//           <h1>Superheroes React Memory Game</h1>
//           <div>Score: {this.state.score}</div>
//           <div>Top Score: {this.state.topScore}</div>
//         </nav>
//         <div className='rules'>
//           Get points by clicking on an image, if you click on the same image twice you lose. 
//         </div>
//         <div className='heroes-container'>
//           {this.state.heroes.map((hero) => (
//             <div key={hero.id} className='hero-card' onClick={() => this.handleClick(hero.name)}>
//               <img src={hero.image} alt="heroimg" />
//               <p>
//                 <span className='bold'>Name:</span>{hero.name} 
//               </p>
//               <p>
//                 <span className='bold'>Occupation:</span>{hero.occupation}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

// FUNCTIONAL COMPONENTS 

import React, { useState } from 'react';
import './App.css';
import heroes from './data/heroes.json';

const App = () => {
  const [heroData, setHeroData] = useState({
    heroes: heroes.superheroes,
    clickedHeroes: [],
    score: 0,
    topScore: 0
  });

  const handleClick = (heroName) => {
    setHeroData((prevData) => {
      const newScore = prevData.clickedHeroes.includes(heroName) ? 0 : prevData.score + 1;
      const clickedHeroes = prevData.clickedHeroes.includes(heroName)
        ? []
        : [...prevData.clickedHeroes, heroName];
      
      const shuffledHeroes = [...prevData.heroes].sort(() => (Math.random() > 0.5 ? -1 : 1));

      return {
        ...prevData,
        heroes: shuffledHeroes,
        clickedHeroes: clickedHeroes,
        score: newScore,
        topScore: Math.max(newScore, prevData.topScore)
      };
    });
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <h1>Superheroes React Memory Game</h1>
        <div>Score: {heroData.score}</div>
        <div>Top Score: {heroData.topScore}</div>
      </nav>
      <div className='rules'>
        Get points by clicking on an image, if you click on the same image twice you lose.
      </div>
      <div className='heroes-container'>
        {heroData.heroes.map((hero) => (
          <div key={hero.id} className='hero-card' onClick={() => handleClick(hero.name)}>
            <img src={hero.image} alt='heroimg' />
            <p>
              <span className='bold'>Name:</span>
              {hero.name}
            </p>
            <p>
              <span className='bold'>Occupation:</span> 
              {hero.occupation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;