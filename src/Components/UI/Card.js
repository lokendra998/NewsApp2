import Modal from "./Modal";
import {Link, useHistory} from 'react-router-dom';
import classes from './Card.module.css'
import { useRef ,useState} from "react";



const Card=(props)=>{
  const history=  useHistory()
  const[login, setLogin]=useState(false)

    const emailInputref=useRef();
const passwordInputref=useRef();

const formsubmitHandler=(event)=>{
event.preventDefault();


const enteredEmail=emailInputref.current.value;
const enteredPassword=passwordInputref.current.value;




fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFzLPSpyTdm1e7l5-xq4vmX3RpAReDIOQ'
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
        
    }
    else{
        res.json().then(data=>{
            console.log(data)
        })
    }
}).then(()=>{
    setLogin(true)
    history.replace('/')
})
}

return(
<Modal onClose={props.onClose}>
    <div className={classes.heading}><h1>LogIn</h1></div>
` 

    <form className={classes.form} onSubmit={formsubmitHandler}>
        <div className={classes.control}>
            <label htmlFor="email">Enter Your Email</label><br />
            <input type="email"id="email" ref={emailInputref} />
        </div>
        <div className={classes.control}>
            <label htmlFor="password">Enter Your Password</label><br />
            <input type="password"id="password"ref={ passwordInputref} />
        </div>
    <button className={classes.btn}>LogIn</button>
    <button className={classes.btn} onClick={props.onClose}>Go Back</button>
    </form>
    <div className={classes.link}>
        <Link to="/SignIn" style={{padding:'1rem'}} onClick={props.onClose}>Create New Account</Link>
    </div>
    


</Modal>

);
};
export default Card;