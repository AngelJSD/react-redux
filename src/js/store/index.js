import { createStore } from "redux"
import rootReducer from "../reducers/index"

const store = createStore(rootReducer)

export default store

/*
    The state in redux comes from reducers. 
    Let’s make it clear: reducers produce 
    the state of your application.

    -The Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
    -The state of the application lives as a single, immutable object within the store
    -As soon as the store receives an action it triggers a reducer
    -The reducer returns the next state
*/