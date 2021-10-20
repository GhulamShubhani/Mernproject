import React , {useState} from 'react'
import { NavLink ,  useHistory } from 'react-router-dom';
import "../App.css";
import signin from "../images/signin.jpeg";

const Signin =()=>{
	const history = useHistory()
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");


	const PostData = async (e)=>{
		e.preventDefault();
		
		 const res= await fetch("/login",{
			 method:"POST",
			headers:{
				"Content-Type" : "application/json"
			},
			body:JSON.stringify({
				email,password
			}),
			 
		 });
		 const data = await res.json();
			if(data.status === 422 || !data){
				console.log("invalid data");
			}else{
				console.log("valid data r");
				history.push("/");
			}
	}
  return (
    <>
		<section className="signup s2">
			<div className="container d-flex align-items-center ">
				<div className="signup-content d-flex flex-row">
					<div className="signup-image col-md-6 me-auto  align-items-center">
						<figure className="align-items-center mt-150">
							<img src={signin} alt="signup pic" />
						</figure>
						<NavLink to="/signup" className="signup-image-link">I am register</NavLink>
					</div>
					<div className="signup-form col-md-6 ms-auto ">
						<h1 className="form-tittle text-center"> Sign up</h1>
						<form method="POST" className="register-form" id="register-form">
							<div className="form-group">
							<label htmlFor="email">
								<i className="fas fa-envelope-square"></i>	
							</label>
							<input type="email" name="email" id="email"value={email}
							onChange={(e)=>{setEmail(e.target.value)}} placeholder="enail" />
							</div>
							<div className="form-group">
							<label htmlFor="password">
								<i className="fas fa-key"/>
							</label>
							<input type="text" name="password" id="password"value={password}
							onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
							</div>
							<div className="form-group form-button">
								<input type="submit" name="signin" onClick={ PostData} className="form-submit" value="login" />
							</div>
						</form>
					</div>
					
				</div>
			</div>
		</section>
   </>
  )
}

export default Signin