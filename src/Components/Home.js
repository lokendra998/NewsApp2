import PUBLICimage from './PUBLIC.jpg';
import classes from './Home.module.css';
import CARTimage from './CART.jpg';
import imagesimage from './images.jpg';
import breakingimage from './breacking.jpg';



const Home =()=>{


    return(
       <div style={{backgroundColor:'black'}}>
           <div className={classes.main}>
                <img src={PUBLICimage} alt="top news for you" />

            </div>
            <div className={classes.image}>
                <img src={CARTimage} alt="Covid-19 update" />
                <img src={breakingimage} alt="breaking news" />
                <img src={imagesimage} alt="Covid-19 vaccine" />
            </div>
            
            <footer className={classes.footer}>
                <h1>More sites for News...</h1><hr />

                <a href="https://www.ndtv.com/" target="blank">Ndtv News</a>
                <a href="https://www.aajtak.in/" target="blank">AajTak</a>
                <a href="https://www.abplive.com/" target="blank">Abp-News</a>
                <a href="https://indianexpress.com/" target="blank">Indian-Express</a>
                <a href="https://www.news18.com/" target="blank">News18</a>
                <a href="https://www.hindustantimes.com/" target="blank">Hindustantimes</a>
                <a href="https://zeenews.india.com/" target="blank">ZeeNews</a>
   
            </footer>
          
        
        </div>
    );
};
export default Home;