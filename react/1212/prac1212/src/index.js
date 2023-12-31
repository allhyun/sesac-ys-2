import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppReduxPrac from './AppReduxPrac';
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store'

const store = configureStore ({reducer:rootReducer}, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppReduxPrac />
    </Provider>
);


