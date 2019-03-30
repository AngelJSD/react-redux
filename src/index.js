import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import 'bootstrap/dist/css/bootstrap.css';

// if you're in create-react-app import the files as:

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

/*
    store.getState()
    {articles: Array(0)}
    store.subscribe(() => console.log('Look ma, Redux!!'))
    store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
    VM32:1 Look ma, Redux!!
    {type: "ADD_ARTICLE", payload: {…}}
    store.getState()
    {articles: Array(1)}
*/