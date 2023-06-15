import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function LoginPage({setLoginUser}) {
  const navigate = useNavigate()

  const [user, setUser] = useState({

    email: "",
    password: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:4000/login", user)
    .then(res=>{alert("logged in successfully")
  setLoginUser(res.data.user)
  navigate("/")
  })

    .catch(error=>alert(error))
  }
  return (
    <form className="login" >
      <h1>Login</h1>

      <input type="text"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange} />
      <input type="password"
        name="password"
        placeholder="password"
        value={user.password}
        autoComplete="off"
        onChange={handleChange} />

      <button onClick={handleSubmit} >Login</button>
      <br />
      <button onClick={()=>navigate("/register")} >Register</button>
    </form>
  );
}