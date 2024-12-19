import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FncDisplayBooks from "./components/DsplyBk_fncCompt";
import Book_UpDateForm from "./components/BookUpdate";
import DeleteBook from "./components/Delete_Book";
import Book_Form from "./components/AddBook";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <center>
            <h2> Online Book Library using React </h2>{" "}
          </center>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/addbook" className="navbarbrand">
              <h4>Add a Book</h4>
            </Link>
            <Link to="/" className="navbar-brand">
              <h4>Display All books</h4>
            </Link>
          </nav>
          <br />
          <Routes>
            <Route path="/" element={<FncDisplayBooks />} />
            <Route path="/edit/:id" element={<Book_UpDateForm />} />
            <Route path="/Delete/:id" element={<DeleteBook />} />
            <Route path="/addbook" element={<Book_Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
