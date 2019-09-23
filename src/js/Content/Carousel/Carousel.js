import React,{Component} from 'react';
import Sidebar from './Sidebar'
import Main from './Main/Main'
import './Carouse.css'
class Carousel extends Component{
    render(){
        return(
            <div className="carousel"> 
            <Sidebar />
            <Main />
            </div>
        )
    }
}

export default Carousel 