import { useState } from "react";
import "./login.css";
import app_logo from './../../assets/app_logo.jpg'
import store from "../../store/store";
import * as loginactions from './../../store/actions/loginaction'
export default function Resetpassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name ,setName ]= useState("");
  const emailAndPasswordExists = () => {
    return email.length > 0;
  };
  function changeloginstate(){
    store.dispatch(loginactions.setloginstate("LOGIN"))
  }
  return (
    <div className="LoginWrapper">
    <div className="LoginCard">
      <img
        className="faceavatar"
        src={app_logo}
        alt="avatar"
      />
      <h2>Reset your password</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="Email"
        class="primaryInput focus"
        placeholder="Enter your email address"
      />
      <button onClick={changeloginstate}><small className="forgot_passoword" >Login</small></button>
      <button
        style={{ cursor: emailAndPasswordExists() ? "pointer" : "not-allowed" }}
        disabled={!emailAndPasswordExists()}
        class="primary-button blue"
      >
        Reset
      </button>
    </div>
    </div>
  );
}
