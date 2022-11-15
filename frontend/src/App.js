import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Payment from "./pages/portalpages/Payment";
import MaintanceRequest from "./pages/portalpages/MaintanceRequest";
import Announcement from "./pages/portalpages/Announcement";
import Lease from "./pages/portalpages/Lease";
import Contacts from "./pages/portalpages/Contacts";
import TicketEdit from "./pages/TicketEdit";
import Adminlogin from "./pages/Adminlogin";
import Adminportal from "./pages/Adminportal";


function App() {

  const { user } = useSelector((state) => state.auth);
  let routes;
  if (user) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/payment" element={<Payment/>} />
        <Route path="/profile/maintancerequest" element={<MaintanceRequest/>} />
        <Route path="/profile/announcement" element={<Announcement/>} />
        <Route path="/profile/lease" element={<Lease/>} />
        <Route path="/profile/contacts" element={<Contacts/>} />
        <Route path='/ticket/:id' element={<TicketEdit/>}/>

      </Routes>
    );
  } else if(user && user.isadmin) {
<Routes>
<Route path="/admin/adminportal" element={<Adminportal/>} />
</Routes>
  }else{
    routes = (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/adminlogin" element={<Adminlogin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Login/>}  />
      </Routes>
    );
  }
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          {routes}
          <Routes></Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
