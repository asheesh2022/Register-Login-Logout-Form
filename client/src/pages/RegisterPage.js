import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });
const navigate = useNavigate()


  const handleSubmit =  (e) => {
    e.preventDefault()
    const { name, password, email,reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword )){
      // alert("posted")
      axios.post("http://localhost:4000/register", user)
      .then(res=>{
        alert("registerd successfully")
        navigate("/login")
      })
    }else {
      alert ("invalid input")
    }
  }

  const handleChange = (e) => {
    const {name,value} = e.target

    setUser({
      ...user,
      [name] : value
    })

  }
  return (
    <form className="register" >
      <h1>Register</h1>
      <input type="text"
        name="name"
        placeholder="username"
        value={user.name}
        autoComplete="off"
        // onChange={e => setUsername(e.target.value)} 
        onChange={handleChange} />
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
      <input type="password"
        name="reEnterPassword"
        placeholder="re Enter your password"
        value={user.reEnterPassword}
        autoComplete="off"
        onChange={handleChange} />

      <button onClick={handleSubmit} >Register</button>
      <br />
      <button onClick={()=>navigate("/login")}>Login</button>
    </form>
  );
}