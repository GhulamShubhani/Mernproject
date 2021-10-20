import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';
import './login.css';




class Login extends Component {
    


    signIn = () => {

        const signInButton = document.getElementById("signInn");
        const container = document.getElementById("container");
        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });


    }
    signUp = () => {
        const signUpButton = document.getElementById("signUpp");

        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {

            container.classList.add("right-panel-active");
        });


    }
    render() {

        return (
            <div>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form method="POST">
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <NavLink to="#" className="social-icon"><i className="fab fa-facebook-f"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-google-plus-g"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></NavLink>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" name="fname" className="rounded" placeholder="Name" />
                            <input type="email" name="email" className="rounded" placeholder="Email" />
                            <input type="password" name="password"className="rounded" placeholder="Password" /><br />
                            <button class="sign">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form method="POST">
                            <h1>Sign in</h1>
                            <div class="social-container">
                                <NavLink to="#" className="social-icon"><i className="fab fa-facebook-f"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-google-plus-g"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></NavLink>
                            </div>
                            <span>or use your account</span>
                            <input type="email" className="rounded" placeholder="Email" />
                            <input type="password" className="rounded" placeholder="Password" /><br />
                            <button class="sign">Sign In</button>
                            <NavLink to="#">Forgot your password?</NavLink>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" id="signInn" onClick={this.signIn}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, User</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUpp" onClick={this.signUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Login;
