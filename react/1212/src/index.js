// 1. props drilling예시

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// 2.reduc 적용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux2 from './AppRedux2';

// import { Provider } from "react-redux"
// import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './store'

// const store = configureStore ({reducer:rootReducer}, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux2/>
//   </Provider>)

// ver.3 리덕스 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );


// ver4 리덕스 구조화 +  containers 컴포넌트 폴더 / presentational 컴포넌트 폴더 분리
// presentational UI같은 부분을 모아놓는 폴더라고 생각하면된다..

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux3 from './AppRedux3';

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store'

const store = configureStore ({reducer:rootReducer}, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRedux3/>
  </Provider>)
