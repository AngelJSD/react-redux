import { ADD_ARTICLE } from "../constants/action-types"

const initialState = {
    articles: []
}

/*
    As soon as the store receives an action it triggers a reducer.
    The reducer calculates the next state depending on the action type,
    when the action type matches a valid clause the reducer 
    calculates the next state and returns a new object.
*/

function rootReducer(state = initialState, action) {
    
    if (action.type === ADD_ARTICLE) {
        
        /*
            Return a new object that have a copy of all the values
            of state (2nd parameter) join with the values of the other
            object (3th parameter) if there are values with the same key,
            this value will be replaced in the result, any object is 
            modified but the target. The first parameter is usually the
            target where we store the join result and is the same as
            what Object.assign returns. In this case is just
            an empty object because we only want to return the result
            not storing it in this scope.
        */
        return Object.assign({}, state, {

            articles: state.articles.concat(action.payload)
            /* 
                .concat creates a new array with the values of the original
                array and a new value appended.
            */
        });

        /*
            With Object.assign and .concat we can be sure that the original
            state is not being modified.
        */
    }

    /*
        We can add more cases if (action.type ===... is recomended to create
        a switch(action.type). If any there isn't any match the reducer must
        return the same state.
    */
    return state;
}

export default rootReducer