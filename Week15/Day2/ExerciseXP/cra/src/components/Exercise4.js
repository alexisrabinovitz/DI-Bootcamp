import React from 'react' 

// export const Exercise4 = () => {
//     return (
//         <div>
//             <h1 style={{color: 'red', backgroundColor: 'lightblue'}}> Hello, Exercise 4!</h1>
//             <p>This is a paragraph.</p>
//             <a href="https://example.com">Link</a>
//             <form action="GET">
//                 <input type="text" name="entertext" placeholder="Enter Text" />
//                 <button type='submit'>Submit</button>
//             </form>
//             <img src='https://chefeel.com/chefgeneralfiles/2022/01/pizza-4quesos-scaled.jpg' alt="Example" width={200}  />
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//             </ul>
//         </div>
//     )
// }

// export const Exercise4 = () => {
//     const style_header = {
//         color: "white",
//         backgroundColor: "DodgerBlue",
//         padding: "10px",
//         fontFamily: "Arial"
//     }

//     return (
//                 <div>
//                     <h1 style={style_header}> Hello, Exercise 4!</h1>
//                     <p>This is a paragraph.</p>
//                     <a href="https://example.com">Link</a>
//                     <form action="GET">
//                         <input type="text" name="entertext" placeholder="Enter Text" />
//                         <button type='submit'>Submit</button>
//                     </form>
//                     <img src='https://chefeel.com/chefgeneralfiles/2022/01/pizza-4quesos-scaled.jpg' alt="Example" width={200}  />
//                     <ul>
//                         <li>Item 1</li>
//                         <li>Item 2</li>
//                         <li>Item 3</li>
//                     </ul>
//                 </div>
//             )
// }

import './Exercise4.css' 

export const Exercise4 = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    return (
                <div>
                    <h1 style={style_header}> Hello, Exercise 4!</h1>
                    <p className='para'>This is a paragraph.</p>
                    <a href="https://example.com">Link</a>
                    <form action="GET">
                        <input type="text" name="entertext" placeholder="Enter Text" />
                        <button type='submit'>Submit</button>
                    </form>
                    <img src='https://chefeel.com/chefgeneralfiles/2022/01/pizza-4quesos-scaled.jpg' alt="Example" width={200}  />
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            )
}