import MainNavigation from "./MainNavigation";
import NavBar from "./NavBar";


const Header=(props)=>{
    return(
        <div>
           <NavBar onClick={props.onClick}/> 
           <MainNavigation />
        </div>
    );
};
export default Header;