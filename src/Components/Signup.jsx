import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [user, setUser] = useState({ "name":"","email":"","password":""});
  const navigate = useNavigate();
  
  const onchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value }
  )
  }
  
  const onclick= async (e)=>{
    e.preventDefault()
    
    const response = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST", 
   headers: {
     "Content-Type": "application/json",

   },
   
        body: JSON.stringify({"name":user.name,"email":user.email,"password":user.password}) 
   });
      let json= await response.json(); 
      if(json.success){
        
        localStorage.setItem("token", json.token);
        navigate("/")
        props.showalert("success","You have logged in to your account")
      }else{
        props.showalert("danger",json.result?json.result.errors[0].msg:json.err)
      }
    
    
  }
  
  
  
  return (
    <>
   <form className="container my-5">
   
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name </label>
    <input type="text" name="name"  className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp"/>
     </div>
   
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp"/>
     </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password"  className="form-control"  onChange={onchange} id="eexampleInputPassword1"/>
  </div>
  <div className="container">
  <button type="submit" className="btn btn-primary my-2" onClick={onclick}>signup</button>
    </div>
</form></>
  )
}

export default Signup;