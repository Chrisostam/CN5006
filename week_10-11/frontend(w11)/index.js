import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayData from './components/DisplayData';
import FncDisplayBooks from './components/DsplyBk_fncCompt';
import Book_UpDateForm from './components/BookUpdate';
import DeleteBook from './components/Delete_Book';
import Book_Form from './components/AddBook';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);