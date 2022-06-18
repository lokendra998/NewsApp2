import classes from './NewsForm.module.css';
import Cart from '../UI/Cart';
import {useRef} from 'react';









const NewsForm =(props)=>{


const  titleInputRef=useRef()
const  descriptionInputRef=useRef()
const  imageInputRef=useRef()



const submitHandler =(event)=>{
    event.preventDefault();
const enteredtitle= titleInputRef.current.value;
const entereddescription= descriptionInputRef.current.value;
const enteredimage= imageInputRef.current.value;

if(entereddescription.trim().length===0 ){
  return
}

const NewsData ={
  title: enteredtitle,
  description: entereddescription,
  file:enteredimage,
  
}


props.onAddNews(NewsData);

 


}



    return(
       <Cart>
        <div className={classes.heading}><h1>Add Your News</h1></div>
        <form className={classes.control} onSubmit={submitHandler}>
            <div className={classes.control__title}>

          <label htmlFor="title">Enter Title</label><br />
          <input type="text" id="title"
         ref={titleInputRef}
            />
            </div>

            <div className={classes.control__title}>
          <label htmlFor="textarea">Description</label><br />
        <input type="text"id="textarea" ref={descriptionInputRef}/>
         
        
            </div>

            <div className={classes.control__title}>
          <label htmlFor="picture">Enter Image Url</label><br />
          <input type="ImageToUrl" id="piture"
          ref={imageInputRef}
          />
            </div>

            <div>
         <button className={classes.btn} value="Submit">Add News</button>
         </div>
        </form>
       </Cart>
    );
    };
export default NewsForm;