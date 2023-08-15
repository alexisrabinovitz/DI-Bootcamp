import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Post extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
deletePost = (e) => {
    const currentId = Number(this.props.match.params.id);
    this.props.dispatch({type: "DELETE_POST", payload: currentId});
    this.props.history.push("/");
}
 
  render() {
    const currentId = Number(this.props.match.params.id);
    const currentPost = this.props.posts.find((post) => post.id === currentId);

    return (
      <div className="container">
        <div className='posts'>
            <div className='center'>
            <h4>
                {currentPost.title}
            </h4>
            <p>
            {currentPost.text}
            </p>
            <div>
                <button onClick={this.deletePost} className='btn grey'>
                    Delete Post
                </button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect((store) => ({posts: store.posts}))(Post));







//withRouter: A higher-order component (HOC) from react-router-dom that provides access to the history, 
//location, and match props to the wrapped component. In React Router version 5 and earlier, 
//this HOC is used to wrap class components that need access to routing-related props.



//deletePost: This is a class method defined using the arrow function syntax. 
//It's used to delete a post from the Redux store and navigate back to the home page.
//const currentId = Number(this.props.match.params.id): This line extracts the id parameter from the URL 
//using the match prop provided by withRouter. It converts the id to a number using the Number() function.
//this.props.dispatch({type: "DELETE_POST", payload: currentId}): Dispatches a Redux action with a type 
//of "DELETE_POST" and the payload being the currentId.
//this.props.history.push("/"): Uses the history object to navigate to the root path ("/") after 
//deleting the post.


// The render() method is used to define what the component will render.
// const currentId = Number(this.props.match.params.id): This line extracts the id parameter from the URL, 
// similar to what was done in the deletePost method.
// const currentPost = this.props.posts.find((post) => post.id === currentId): 
// This line uses the find method to search for a post in the Redux store's posts array with an id 
// that matches the currentId.



// withRouter and connect HOCs to enhance the component's functionality. withRouter provides 
// routing-related props, and connect connects the component to the Redux store.