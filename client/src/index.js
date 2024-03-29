import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// TODO: Change Router Name to App 
import Router from './Router';
import { BrowserRouter} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter
// ([
//   {
//     path: "/",
//     element: <div>App</div>,
//   },
//   {
//     path: "/",
//     element: <div>createExam</div>,
//   },
//   {
//     path: "/",
//     element: <div>patientPage</div>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
