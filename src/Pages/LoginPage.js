import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function LoginPage(){
    

     const url='https://localhost:8080/customer'
     const [username,setUsername]=useState('')
     const [password,setPassword]=useState('')
     const navigate = useNavigate()

     const handleUsername=(e)=>{
         setUsername(e.target.value)
     }
     const handlePassword=(e)=>{
         setPassword(e.target.value)
     }
    const submitLogin=()=>{
         axios.post(url,{
             username:username,
             password:password
         }).then(result=>{
             alert("success")
         })
     }
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
   // User Login info
    const database = [
      {
        username: "Alex",
      password: "pass"
      } 

   ];
   const errors = {
     uname: "invalid username",
     pass: "invalid password"
   };
   const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/home")
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   var { uname, pass } = document.forms[0];
  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);
  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //       navigate("/home")
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };
  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  // // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" value={username} onChange={handleUsername} name="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         {/* <input type="password" name="pass" required /> */}
  //         <input type="password" value={password} onChange={handlePassword} name="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         {/* <input type="submit" /> */}
  //         <input type="submit" value={submitLogin} onChange={handleSubmit} name="usubmit" required />
  //       </div>
  //     </form>
  //   </div>
  // );
  // return (
  //   <div className="app">
  //     <div className="login-form">
  //       <div className="title">Sign In</div>
  //       {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
  //     </div>
  //   </div>
  // );

  
