import React, { useState } from 'react'
import { loginAPI, GoogleSignInAPI } from '../Api/AuthApi';
import LinkedinLogo from "../assets/linkedIn-logo.png";
import '../Sass/LoginComponent.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();

    const login = async () => {
        try {
          // Validate the input fields
          if (!credentials.email || !credentials.password) {
            toast("Email or password cannot be empty");
            return;
          }

          let res = await loginAPI(credentials.email, credentials.password);
          toast.success("Successfully signed in to Linkedin");
          navigate("/home");

        } catch (err) {
            toast.error("Please check your credentials");
        }
    }

    const googleSignIn = async () => {
      try {
        let response = await GoogleSignInAPI();  // Wait for the sign-in to complete
        console.log(response.user.email);
        toast.success("Successfully signed in with Google");
        navigate("/home");
      } catch (error) {
          console.error("Google sign-in failed:", error);
      }
    }

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div>
        <button onClick={googleSignIn}>Sign in with Google</button>
      </div>
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  )
}
