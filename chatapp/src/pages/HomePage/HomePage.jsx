
import Chat from "../../components/Chat/Chat";
import SideBar from "../../components/Sidebar/Sidebar";
import './HomePage.scss'


const HomePage = () => {
    return(
        
        <div className="home">
            <div className="container">
                <SideBar/>
                <Chat/>
                
            </div>
        </div>
       
    )
}

export default HomePage;