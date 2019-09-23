import React,{Component} from 'react';
import BannerBox from './BannerBox'
import PathBanner from './PathBanner'
import './Css/Main.css'
class Main extends Component{
    render(){
        return(
            <div className="main"> 
            <BannerBox />
            <PathBanner />
            </div>
        )
    }
}

export default Main 