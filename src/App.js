import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBook from "./Components/AddBook/AddBook";
import Admin from "./Components/Admin/Admin";
import BookDetails from "./Components/BookDetails/BookDetails";
import Orders from "./Components/BookDetails/Orders/Orders";
import Deals from "./Components/Deals/Deals";
import Header from"./Components/Header/Header";
// import Headers from"./Components/Headers/Headers";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext("");
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addBook">
            <AddBook></AddBook>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/bookDetails/:id">
            <BookDetails></BookDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/deals">
            <Deals></Deals>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
