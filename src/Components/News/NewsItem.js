
import classes from './NewsItem.module.css';


const NewsItem = (props) => {
    return (
        <div className={classes.cart}>
           <img src={props.ImageUrl} alt="Error" />
            <div className={classes.item}>
                <div>
                    <h3>Title</h3>{props.title}
                </div>
                <div>
                    <h3>Description</h3>{props.description}</div>
            </div>
        </div>


    );

};
export default NewsItem;