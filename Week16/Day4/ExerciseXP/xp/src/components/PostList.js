// import React from 'react'
// import posts from "./../data/data.json"

// export class PostList extends React.Component {
//     constructor (props) {
//         super (props)
//         console.log('posts:', posts)
//     }
// render() {
//     const firstPost = posts[0]
//     return (
//         <div>
//             <h1>{firstPost.title}</h1>
//             <h2>{firstPost.content}</h2>
//             <p>{firstPost.date}</p>
//         </div>
//     )
// }
// }

// GET ALL POSTS
// import React from 'react'
// import posts from "./../data/data.json"

// export class PostList extends React.Component {
//     constructor (props) {
//         super (props)
//         console.log('posts:', posts)
//     }
// render() {
//     const allPosts = posts.map((post) => (
//         <div>
//         <h1>{post.title}</h1>
//         <h2>{post.content}</h2>
//         <p>{post.date}</p>
//     </div>
//     ))
//     return (allPosts)
// }
// }


// GET ALL FUNCTIONAL COMPONENTS 
import React from 'react'
import posts from "./../data/data.json"

export const PostList = () =>{
    const allPosts = posts.map((post) => (
        <div key={post.id}>
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <p>{post.date}</p>
    </div>
    ))
    return (allPosts)
}
