import { combineReducers, createStore } from "@reduxjs/toolkit";


const postsData = [
    {id: 1, title: "Hello", text: "How are you doing"},
    {id: 2, title: "Goodbye", text: "See you later"},
    {id: 3, title: "Alo", text: "Whats up"}
];


const postsReducer = (state = postsData, action) => {
    if (action.type === "DELETE_POST"){
        const idToDelete = action.payload; 
        const newArray = state.filter((post) => post.id !== idToDelete);
        return newArray;
    }
    
    return state;
}


const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer);





//postsReducer: This is the name of the reducer function.
//(state = postsData, action): This is the function's parameter list. It takes two parameters:
//state: This parameter represents the current state, which the reducer will modify.
//action: This parameter represents the action that was dispatched to trigger the state change.


// if (action.type === "DELETE_POST"): This checks if the dispatched action has a type of "DELETE_POST". 
// This type is typically a string that uniquely identifies the action.
// const idToDelete = action.payload;: This extracts the payload property from the dispatched action. 
// The payload usually contains the data associated with the action. In this case, it's assumed that the 
// payload is the ID of the post to be deleted.
// const newArray = state.filter((post) => post.id !== idToDelete);: This creates a new array by filtering 
// out the posts that don't have the same id as the one to be deleted. It uses the filter function to 
// create a new array that contains only the posts that don't match the idToDelete.
// return newArray;: The new filtered array is returned, which becomes the updated state.