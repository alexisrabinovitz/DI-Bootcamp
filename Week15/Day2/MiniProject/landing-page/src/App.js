import React from "react";
import "./App.css";
import {Header} from './components/header.js'
import {Card} from './components/card.js'
import {ContactContainer} from './components/contactcontainer.js'

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                icon='fa fa-building'
                img='./C.png'
                title='About the Company' 
                description='To give customers better, more memorable and stronger scents than competitors, the Candleight team is committed to continually improving its methods and ingredients.'
            />

            <Card 
                className='section bg-grey'
                icon='fas fa-globe-africa'
                img='./V.png'
                title='Our Values'
                description='To be your handcrafted candle making company of choice, that produces high quality scented candles, and other products that will truly inspire and illuminate your senses with compelling aromas. All our products are made with unequivocal attention to detail, and by incorporating the highest quality of ingredients available.
                To minimize our carbon footprint and maximize employee and customer satisfaction. We also support social organizations that align with our progressive values.
                To operate the company on basis of sustainable and profitable growth and create new opportunities for holistic development of our employees.'
            />

            <Card 
                className='section'
                icon='fas fa-landmark'
                img='./M.png'
                title='Our Mission' 
                description='In the short term, CandleLight aims to become a highly respected, and one of the best scented candle making company in the country. Our long-term vision is to be the most respected, and the best scented candle making company in the world. '
            />
            <ContactContainer/>
        </div>
    );
}



// const Header = () =>{
//     return(
//         <div className='header'>
//             <span className='header-title'>
//                 Company
//             </span>
//             <br/>
//             <span className="header-text">
//                 We specialise in something ...
//             </span>
//         </div>
//     );
// }

// const Card = (props) =>{
//     return(
//         <div className={props.className} >
//             <div className="small-div">
//                 <i className={props.icon}></i>

//                 <img src={props.img} width="50" height="50" alt=''/>
//             </div>

//             <div className="big-div">
//                 <span className='div-title'>
//                     {props.title}
//                 </span>
//                 <br/>
//                 <span>
//                     {props.description}
//                 </span>
//             </div>
//         </div>
//     )
// }


// const ContactContainer = () => {
//     return(
//         <div className='contact-container bg-grey'>
//             <span className="div-title">Contact us</span>
//             <div className='contact-form'>
//                 <div id='sect1'>
//                     <span>Contact us and we will get back to you within 24 hours.</span>
//                     <span>
//                         <i className="fas fa-map-marker-alt"></i>

//                         Company Name
//                     </span>
//                     <span>
//                         <i className="fas fa-mobile-alt"></i>

//                         +256 778 800 900
//                     </span>
//                     <span>
//                         <i className="fas fa-envelope"></i>

//                         company.gmail.com
//                     </span>
//                 </div>

//                 <div id='sect2'>
//                     <span>
//                         Contact
//                     </span>

//                     <input type="text" placeholder="email address" className="input-field"/>
//                     <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
//                     <button className="contact-btn">Send</button>
//                 </div>
//             </div>
//         </div>
//     );

// }