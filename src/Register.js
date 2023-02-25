import { useState } from "react";

export const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input type="name" value={name} name="name" id="name" placeholder="Full name" />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
        />
        <label htmlFor="email">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="*****"
        />
        <button type="submit">Log In</button>
        <p onClick={() => onFormSwitch("login")}>
        Alredy have an account? Login here.
      </p>
      </form>

    </>
  );
};
