import classes from './NavBar.module.css'

const NavBar =(props)=>{
return(
    <>
   <div className={classes.navbar}>
       
       <h1> NewsCitizen</h1>
       <h2>daily current news for indian citizen</h2>
       <button className={classes.btn} onClick={props.onClick}>LogIn</button>
   </div>
  
   </>
);
};
export default NavBar;