import React, {useState} from 'react'
import { NavLink,  useHistory } from 'react-router-dom';
import "../App.css";
import signup from "../images/signup.png";
//import { useState } from 'react';



const Signup =()=>{
	const history = useHistory()
	const [user,setUser] = useState({
		firstname:"",lastname:"",email:"",password:"",cpassword:"",number:""
	})
	let name,value;
	const handleInputs = (e)=>{
		console.log(e)
		name= e.target.name;
		value= e.target.value;

		setUser({...user, [name]:value});
		console.log(setUser)
	} 

	const PostData = async (e)=>{
		e.preventDefault();
		const {firstname,lastname,email,password,cpassword,number } = user;
		 const res= await fetch("/register",{
			 method:"POST",
			headers:{
				"Content-Type" : "application/json"
			},
			body:JSON.stringify({
				firstname,lastname,email,password,cpassword,number
			}),
			 
		 });
		 const data = await res.json();
			if(data.status === 422 || !data){
				console.log("invalid data");
			}else{
				console.log("valid data r");
				history.push("/signin");
			}
	}

  return (
    <>
		<section className="signup s2">
			<div className="container ">
				<div className="signup-content d-flex flex-row">
					<div className="signup-form col-md-6 me-auto ">
						<h1 className="form-tittle text-center"> Sign up</h1>
						<form method="POST" className="register-form" id="register-form">
							<div className="form-group">
							<label htmlFor="firstname">
								<i class="fas fa-user"/>
							</label>
							<input type="text" name="firstname" id="firstname" 
							value={user.firstname}
							onChange={handleInputs}
							 placeholder="firstname" />
							</div>
							<div className="form-group">
							<label htmlFor="lastname">
								<i class="fas fa-user"/>
							</label>
							<input type="text" name="lastname" id="lastname" 
							value={user.lastname}
							onChange={handleInputs}
							 placeholder="lastname" />
							</div>
							<div className="form-group">
							<label htmlFor="email">
								<i class="fas fa-envelope-square"></i>	
							</label>
							<input type="email" name="email" id="email" 
							value={user.email}
							onChange={handleInputs}
							 placeholder="email" />
							</div>
							<div className="form-group">
							<label htmlFor="password">
								<i class="fas fa-key"/>
							</label>
							<input type="text" name="password" id="password" 
							value={user.password}
							onChange={handleInputs}
							 placeholder="password" />
							</div>
							<div className="form-group">
							<label htmlFor="cpassword">
								<i class="fas fa-key"></i>
							</label>
							<input type="text" name="cpassword" id="cpassword" 
							value={user.cpassword}
							onChange={handleInputs}
							 placeholder="cpassword" />
							</div>
							<div className="form-group">
							<label htmlFor="number">
								<i class="fas fa-phone-square-alt"></i>	
							</label>
							<input type="number" name="number" id="number" 
							value={user.number}
							onChange={handleInputs}
							 placeholder="number" />
							</div>
							<div className="form-group form-button">
								<input type="submit" name="signup" className="form-submit" value="register"
								onClick={PostData} />
							</div>
						</form>
					</div>
					
					<div className="signup-image col-md-6 ms-auto d-flex align-items-center ">
						<div>
						<figure>
							<img src={signup} alt="signup pic" />
						</figure>
						
						<NavLink to="/signin" className="signup-image-link">I am alreay register</NavLink>
						</div>
					</div>
					
				</div>
			</div>
		</section>
    </>
  )
}

export default Signup