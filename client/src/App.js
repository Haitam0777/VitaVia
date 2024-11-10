import React from "react";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Services from "./pages/services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import TopBar from "./components/TopBar/TopBar";
import Service from "./pages/SingleService/Service";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./admin/login/Login";
import AdminPage from "./admin/adminPage/AdminPage";
import "./app.scss"

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <TopBar/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="aboutUs" exact element={<AboutUs/>}/>
            <Route path="/services" exact element={<Services/>}/>
            <Route path="contactUs" exact element={<ContactUs/>}/>
            <Route path="/service" exact element={<Service/>}/>
            <Route path="/service/:id" exact element={<Service/>}/>

            <Route path="/auth" exact element={<Login/>}/>
            <Route path="/dashboard" exact element={<AdminPage/>}/>
          </Routes>
        </Router>
     </React.StrictMode>
    </Provider>
  );
}

export default App;
