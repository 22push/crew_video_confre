import { useState } from "react";
import "./login.css";
import app_logo from './../../assets/app_logo.jpg'
import store from "../../store/store";
import * as loginactions from './../../store/actions/loginaction'
export default function SighUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name ,setName ]= useState("");
  const emailAndPasswordExists = () => {
    return email.length > 0 && password.length > 0;
  };
  function changeloginstate(){
    store.dispatch(loginactions.setloginstate("LOGIN"))
  }
  function changeforgotpassstate(){
    store.dispatch(loginactions.setloginstate("FORGOTPASSWORD"))
  }
  return (
    <div className="LoginWrapper">
    <div className="LoginCard">
      <img
        className="faceavatar"
        src={app_logo}
        alt="avatar"
      />
      <h2>Signup in to Crew</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="name"
        class="primaryInput focus"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        class="primaryInput focus"
        placeholder="E-Mail"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="primaryInput focus"
        placeholder="Password"
      />
      <button onClick={changeloginstate}><small className="forgot_passoword" >Login</small></button>
      <small className="forgot_passoword" onClick={changeforgotpassstate}>Forgot password</small>
      <button
        style={{ cursor: emailAndPasswordExists() ? "pointer" : "not-allowed" }}
        disabled={!emailAndPasswordExists()}
        class="primary-button blue"
      >
        Signup
      </button>
    </div>
    </div>
  );
}
