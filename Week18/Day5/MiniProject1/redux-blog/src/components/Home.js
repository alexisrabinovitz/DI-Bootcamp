import React, { Component } from 'react'
import { connect } from "react-redux";
import Card from "./Card"

class Home extends Component {

  render() {
    if (this.props.posts.length === 0) return 
        <div className='center'><h4>Home</h4>No posts to show</div>;

    return (
        <div className='container home'>
            <h4 className='center'>Home</h4>
            {this.props.posts.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </div>
      )
    }
  }

const mapStateToProps = (store) => ({
    posts: store.posts
});
export default connect(mapStateToProps)(Home);