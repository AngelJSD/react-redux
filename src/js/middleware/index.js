import { ADD_ARTICLE, FOUND_BAD_WORD, GET_DATA, DATA_LOADED } from "../constants/action-types"

const forbiddenWords = ["spam", "money"]

/*
    A Redux middleware is a function that is able to intercept, 
    and act accordingly, our actions, before they reach the reducer.

    There are a lot of benefits from using a Redux middleware, 
    even for simplest tasks:

    - The logic can live outside React (or any other library/framework)
    - Middlewares become reusable pieces of logic, easily to reason about
    - Middlewares can be tested in isolation
    - We keep the components clean

*/

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // do your stuff
            if (action.type === ADD_ARTICLE) {
            
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                )
                if (foundWord.length) {
                    return dispatch({ type: FOUND_BAD_WORD })
                }
            }

            return next(action);
        }
    }
}

export function ApiCallsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {

            if (action.type === GET_DATA) {
                fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    return dispatch({ type: DATA_LOADED, payload: json });
                });
            }

            return next(action);
        }
    }
}