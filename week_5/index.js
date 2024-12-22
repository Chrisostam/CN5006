import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import GreetingElement from './Greeting';
import GreetingElementwithProp from './Greeting_PROP';
import AppColor from './Appbgcolor';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GreetingElement />
    <GreetingElementwithProp msg = "Hi! its Monday "/>
    <GreetingElementwithProp msg = "Hi! its Tuesday "/>
    <GreetingElementwithProp msg = "Hi! its Wednesday "/>
    <GreetingElementwithProp msg = "Hi! its Thursday "/>
    <GreetingElementwithProp msg = "Hi! its Friday "/>
    <GreetingElementwithProp msg = "Hi! its Saturday "/>
    <GreetingElementwithProp msg = "Hi! its Sunday "/>

    <AppColor heading="This is first element" lbl="Name :"color="green"/>
    <AppColor heading="This is second element" lbl="Name :"color="blue"/>
    <AppColor heading="This is third third element" lbl="Name :"color="Yellow"/>

  </React.StrictMode>
);

reportWebVitals();
