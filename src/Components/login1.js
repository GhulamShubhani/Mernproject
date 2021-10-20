import React from 'react'
import { useState } from 'react';
import { NavLink,  useHistory } from 'react-router-dom';
import './login.css';


const Login1 =()=>{
    console.log("8");
	//const history1 = useHistory()
	const [user,setUser] = useState({
		fname:"", email:"", password:""
	})
	let name,value;
	const handleInputs = (e)=>{
		console.log(e)
		name= e.target.name;
		value= e.target.value;
        console.log(name);
        console.log(value);
        console.log("9");
		setUser({...user, [name]:value});
		//console.log(setUser)
	} 

	const PostData1 = async (e)=>{
		e.preventDefault();
        const signUpButton = document.getElementById("signUpp");
        const container = document.getElementById("container");
        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
           });
        console.log("10");
		const {fname,email,password } = user;
		//var res= await fetch("/register1",{
        //method:"POST",
		//	headers:{
		//		"Content-Type" : "application/json"
		//	},
		//	body:JSON.stringify({
		//		fname,email,password
		//	}),
		//	
		//});
		//const data = await res.json();
		//	if(data.status === 422 || !data){
		//		console.log("invalid data");
		//	}else{
		//		console.log("valid data r");
		//		//history1.push("/signin");
		//	}
	}
	//login
    console.log("11"); 
	const history = useHistory()
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");


	const PostData = async (e)=>{
		e.preventDefault();
        const signInButton = document.getElementById("signInn");
        const container = document.getElementById("container");
        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });
		console.log("12");
		
		//const res= await fetch("/login",{
		//	 method:"POST",
		//	headers:{
		//		"Content-Type" : "application/json"
		//	},
		//	body:JSON.stringify({
		//		email,password
		//	}),
		//	 
		//});
		 console.log("13");
		// const data = await res.json();
		//	if(data.status === 422 || !data){
		//		console.log("invalid data");
		//	}else{
		//		console.log("valid data r");
		//		history.push("/");
		//	}
			console.log("14");
	}
  	
     //const signIn = () => {
     //
     //   const signInButton = document.getElementById("signInn");
     //   const container = document.getElementById("container");
     //   signInButton.addEventListener("click", () => {
     //       container.classList.remove("right-panel-active");
     //   });
    //}
    //const signUp = () => {
    //const signUpButton = document.getElementById("signUpp");
    //const container = document.getElementById("container");
    //signUpButton.addEventListener("click", () => {
    //        container.classList.add("right-panel-active");
    //    });
    //}
   

        return (
            <div>
                <div className="container" id="container">
                {console.log("1")}
                    <div className="form-container sign-up-container">
                        <form method="POST" >
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <NavLink to="#" className="social-icon"><i className="fab fa-facebook-f"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-google-plus-g"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></NavLink>
                            </div>
                            {console.log("2")}
                            <span>or use your email for registration</span>
                            <input type="text" name="fname" className="rounded"value={user.fname}
							onChange={handleInputs} placeholder="Name" />
                            <input type="email" name="email" className="rounded"value={user.email}
							onChange={handleInputs} placeholder="Email" />
                            <input type="password" name="password"className="rounded"value={user.password}
							onChange={handleInputs} placeholder="Password" /><br />
                            {console.log("3")}
                            <button class="sign">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form method="POST">
                        {console.log("4")}
                            <h1>Sign in</h1>
                            <div class="social-container">
                                <NavLink to="#" className="social-icon"><i className="fab fa-facebook-f"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-google-plus-g"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></NavLink>
                            </div>
                            <span>or use your account</span>
                            <input type="email" name="email" className="rounded" value={email}
							onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                            <input type="password" name="password" className="rounded" value={password}
							onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" /><br />
                            {console.log("5")}
                            <button class="sign">Sign In</button>
                            <NavLink to="#">Forgot your password?</NavLink>
                        </form>
                    </div>
                    <div className="overlay-container">
					{console.log("6")}
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
								{console.log("7")}
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" id="signInn" onClick={PostData} >Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, User</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUpp" onClick={PostData1} type="submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

				
            </div>
        );
    

}

export default Login1