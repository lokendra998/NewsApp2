import NewsItem from "./NewsItem";

const NewsList =(props)=>{
   


    return(
      
             <div>
                 <ul>
                 
                     {props.items.map((item)=> 
                     <NewsItem key={item.id} ImageUrl={item.ImageUrl}
                      title={item.title}
                       description={item.description} />)}
                     
                 </ul>
             </div>   
        
    );
};
export default NewsList;