import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/Admin/AddService/AddService';
import BookService from './components/Client/BookService/BookService';
import StripePayment from './components/Client/StripePayment/StripePayment';
import BookingList from './components/Client/BookingList/BookingList';
import Review from './components/Client/Review/Review';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import NotFound from './components/Shared/404/NotFound';
export const UserContext = createContext([])

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>  
          <Route path="/login">
            <Login></Login>
          </Route> 
          <PrivateRoute path="/admin/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> 
          <PrivateRoute path="/admin/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/client/bookService/:serviceId">
            <BookService></BookService>
          </PrivateRoute>
          <PrivateRoute path="/client/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/client/review">
            <Review></Review>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}