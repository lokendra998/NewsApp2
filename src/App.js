import './App.css'
import Home from './Components/Home';
import { Route,useHistory } from 'react-router-dom';
import React from 'react'
import Header from './Components/Layout/Header';
import News from './Components/News/News';
import TopHeadline from './Components/News/Topheadline';
import About from './Components/About/About';
import Auth from './Components/Authentigation/Auth';
import Card from './Components/UI/Card';
import { useState } from 'react';
import { Suspense } from 'react/cjs/react.production.min';
import Spinner from './Spinner';

const NewsForm = React.lazy(()=> import('./Components/News/NewsForm'))


const App = () => {
  const History=useHistory()
  const[cardshow,setCardshow]=useState(false)

  const AddNewsHandler=(NewsData)=>{
  fetch('https://news-app-1cb66-default-rtdb.firebaseio.com/News.json', 
  {
    method:'POST',
    body:JSON.stringify(NewsData),
    headers: {
      'content-Type':'application/json'
    }
  }).then(()=>{
    History.replace('/Topheadlines');
  });
  };


  const CardShowHandler=()=>{
    setCardshow(true);
  };

const CardHiddenHanlder=()=>{
  setCardshow(false);
};

const authantigationHandler=(Auth)=>{
  


}

  return (
    <>
   
      <Header onClick={CardShowHandler} />
     

     {cardshow && <Card onClose={CardHiddenHanlder}/>}
     
      <Suspense fallback={
        <div className="centered">
        <Spinner/>
        </div>
      } >
       
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/NewsForm" exact>
          <NewsForm onAddNews={AddNewsHandler}/>
        </Route>
        <Route path="/News">
          <News />
        </Route>
        <Route path="/Topheadlines">
         <TopHeadline/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/SignIn" >
          <Auth onAddAuth={authantigationHandler}/>
        </Route>
        </Suspense>

    </>
  );
};
export default App;


