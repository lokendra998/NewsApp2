import NewsList from "./NewsList";
import {useState} from 'react';
import { useEffect } from "react";





const TopHeadline =()=>{
    const[isloading, setIsloading]=useState(false);
    const[loadedNews, setLoadedNews]=useState([]);


  useEffect(()=>{
        setIsloading(true)
        fetch('https://news-app-1cb66-default-rtdb.firebaseio.com/News.json'
        ).then((Response)=>{
            return Response.json();
        }).then((data)=>{
        const lists=[];

        for(const key in data){
            const list={
                id:key,
                ...data[key]
            }
            lists.push(list)
        }

            setIsloading(false)
            setLoadedNews(lists)
            });
        },[])
         if(isloading){
            <section>
                <p>Loading...</p>
            </section>
        }
   



    return(
        <div>
            <h1 style={{textAlign:'center'}}>Top Headlines</h1>
        <NewsList items={loadedNews
        }/>
    </div>
    );
};
export default TopHeadline;