import React, { useState } from 'react'
import LinkedinLogo from "../assets/linkedIn-logo.png"
import { useNavigate } from 'react-router-dom'
import { registerAPI } from '../Api/AuthApi';
import { toast } from 'react-toastify';

export default function RegisterComponent() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});

    const register = async () => {
        try {
            // Validate the input fields
            if (!credentials.email || !credentials.password) {
                toast("Email or password cannot be empty");
                return;
            }
            const res = await registerAPI(credentials.email, credentials.password);
            toast.success("User registered successfully");

        } catch (error) {
            // Check the error code from Firebase and display appropriate messages
            switch (error.code) {
                case "auth/invalid-email":
                    toast.error("Invalid email format. Please enter a valid email.");
                    break;
                case 'auth/email-already-in-use':
                    toast.error("Email already in use. Please use a different email.");
                    break;
                case 'auth/weak-password':
                    toast.error("Password is too weak. It should be 6 characters or more.");
                    break;
                default:
                    toast.error("Registration failed. Please check your credentials and try again.");
            }
        }
    }

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr class="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}
