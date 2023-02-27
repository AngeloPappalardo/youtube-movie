import { useEffect, useRef, useState, useContext, Fragment } from "react";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";
import "./styles/login.css";
import NavbarSection from "./components/NavbarSection";
const LOGIN_URL = "/auth";

export const Login = ({ onFormSwitch }) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //solo di prova sensa back-and
    setPassword("");
    setEmail("");
    setSuccess(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data.accessToken;
      const roles = response?.data.roles;
      setAuth({ email, password, roles, accessToken });
      setPassword("");
      setEmail("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("NO Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  return (
    <>
      {success ? (
        <Fragment>
          <Navbar />
        </Fragment>
      ) : (
        <section>
          <header className="container">
            <NavbarSection />
          </header>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="form-title">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              ref={userRef}
              autoComplete="off"
              placeholder="youremail@gmail.com"
              required
            />
            <label htmlFor="email">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="*****"
              required
            />
            <button type="submit">Log In</button>
            <p onClick={() => onFormSwitch("register")}>
              Don't have an account? Register here.
            </p>
          </form>
        </section>
      )}
    </>
  );
};
