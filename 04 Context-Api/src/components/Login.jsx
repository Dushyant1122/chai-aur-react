import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = useContext(UserContext);
  const handelSubmit = (e) => {
    console.log("Me chal gyaaa");
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default Login;
