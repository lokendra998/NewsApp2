import classes from './Cart.module.css';


const Cart=(props)=>{
    return(
        <div className={classes.cart}>{props.children}</div>
    );
};
export default Cart;