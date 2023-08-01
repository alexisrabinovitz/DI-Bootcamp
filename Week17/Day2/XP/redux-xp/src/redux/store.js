// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counter'

// export default configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })

// exercise 2

// import { configureStore } from "@reduxjs/toolkit";
// import dayReducer from './counter'

// export default configureStore({
//     reducer: {
//         day: dayReducer
//     }
// })

// exercise 3 - ambos ejercicios en 1

import { configureStore } from "@reduxjs/toolkit";
import dayReducer from './dayReducer'
import numberReducer from './numberReducer'

export default configureStore({
    reducer: {
        day: dayReducer,
        number: numberReducer,
    }
})