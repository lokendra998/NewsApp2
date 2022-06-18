import { useRef } from 'react';
import classes from './Auth.module.css'

const Auth=()=>{
const emailInputref=useRef();
const passwordInputref=useRef();

const formsubmitHandler=(event)=>{
event.preventDefault();

const enteredEmail=emailInputref.current.value;
const enteredPassword=passwordInputref.current.value;

fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFzLPSpyTdm1e7l5-xq4vmX3RpAReDIOQ'
,{
    method:'POST',
    body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
    }),
    Headers:{
        'Content-Type':'application/json'
    }
}).then(res=>{
  if(res.ok){
    //..
  }
  else{
    res.json().then(data=>{
 
  console.log(data)
    })
  }
})

}



    return(
       <div className={classes.Auth}>
           <h1>SignIn</h1>
           <form className={classes.form} onSubmit={formsubmitHandler}>
        <div className={classes.control}>
            <label htmlFor="email">Enter Your Email</label><br />
            <input type="email"id="email" ref={emailInputref}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="number">Enter Your Password</label><br />
            <input type="password" id="number" ref={passwordInputref}/>
        </div>
    <button className={classes.btn} value='Submit'>SignIn</button>
    </form>
       </div>
    );
};
export default Auth;
