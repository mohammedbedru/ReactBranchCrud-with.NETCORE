import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBranch from "./components/AddBranch";
import BranchList from "./components/BranchList";
import BranchDetails from "./components/BranchDetails";
import EditBranch from "./components/EditBranch";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; // Import Toastr CSS

const App = () => {

  toastr.options = {
    closeButton: true,
    // progressBar: true,
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          spring branch
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/branches"} className="nav-link">
              Branches
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add_branch"} className="nav-link">
              Add Branch
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/branches" element={<BranchList /> }/>
          <Route path="/add_branch" element={<AddBranch />} />
          <Route path="/branches/:id" element={ <BranchDetails />} />
          <Route path="/branches/edit/:id" element={<EditBranch /> } />
        </Routes>
      </div>
    </div>
  );
};

export default App;
