import React from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import EditBook from "../EditBook/EditBook";
import ManageBook from "../ManageBook/ManageBook";

const Admin = () => {
  return (
    <div className="row m-2 rounded">
      <HashRouter>
        <div className="sidebar col-md-3 d-flex rounded flex-column ">
          <Link className="form-control m-1" to="/addBook">
            Add Book
          </Link>
          <Link className="form-control m-1" to="/manageBook">
            Manage Book
          </Link>
          <Link className="form-control m-1" to="/editBook">
            Edit Book
          </Link>
        </div>

        <div className="content col-md-9 rounded">
          <Route path="/addBook" component={AddBook} />
          <Route path="/manageBook" component={ManageBook} />
          <Route path="/editBook" component={EditBook} />
        </div>
      </HashRouter>
    </div>
  );
};

export default Admin;
