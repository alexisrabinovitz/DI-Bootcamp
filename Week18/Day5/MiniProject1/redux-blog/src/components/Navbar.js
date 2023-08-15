import React, {Component} from "react";
import { Link } from 'react-router-dom' 

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper red darken-3">
            <div className="nav-wrapper">

                <Link to='/' className='brand-logo'>My Blog</Link>

                <ul id='nav-mobile' className="right">
                    <li className="active"><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
