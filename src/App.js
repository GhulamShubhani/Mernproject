import React from 'react'
import {Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/login";
import Login1 from "./Components/login1";
import Signin from "./Components/signin";
import Signup from "./Components/signup";
import Contact from "./Components/contact";
import About from "./Components/about";
import Update from "./Components/update";
import FPassword from "./Components/forgetpassword";

const App =()=>{
  return (
   <>
	<Navbar/>
    <Route exact path="/">
		<Home/>
    </Route>
	<Route path="/login1">
		<Login1/>
    </Route>
	<Route path="/login">
		<Login/>
    </Route>
	<Route path="/signin">
		<Signin/>
    </Route>
    <Route path="/signup">
		<Signup/>
    </Route>
	<Route path="/contact">
		<Contact/>
    </Route>
  	<Route path="/update">
		<Update/>
  	</Route>
	<Route path="/about">
		<About/>
  	</Route>
	<Route path="/forgetpassword">
		<FPassword/>
    </Route>
   </>
  )
}

export default App
