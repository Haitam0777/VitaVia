import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { admin_login } from "../../state/actions/AdminActions";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const admin = useSelector((stt) => stt.admin);
  const linkRef = useRef();
  const loginHandler = () => {
    dispatch(admin_login({ email, password }));
  };
  useEffect(() => {
    if (admin.data) {
      sessionStorage.setItem("admin", JSON.stringify(admin.data));
      linkRef.current.click();
    }
  });
  return (
    <div class="login-wrapper">
      <div class="wrapper">
        <div class="header">
          <p>Authentification</p>
        </div>
        <div class="content">
          <input
            type="text"
            name=""
            placeholder="Email"
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="Mot de Passe"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="footer">
          <button onClick={() => loginHandler()}>s'Authentifier</button>
        </div>
      </div>
      <Link
        style={{ display: "none" }}
        ref={(ref) => ref !== null && (linkRef.current = ref)}
        to="/dashboard"
      ></Link>
    </div>
  );
}
