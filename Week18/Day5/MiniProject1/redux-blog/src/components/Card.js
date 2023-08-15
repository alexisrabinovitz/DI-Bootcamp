import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Card extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
  render() {

    const postUrl = "/posts/" + this.props.post.id;

    return (
      <div className='post card'>
        <img src='/blog.png' alt="logo"/>
        <div className='card-content'>
         <Link to={postUrl}>
            <span className='card-title red-text'>
                {this.props.post.title}
            </span>
         </Link>
         <p>
         {this.props.post.text}
         </p>
        </div>
      </div>
    )
  }
}