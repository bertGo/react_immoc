/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import {active} from '/home/abcd/immoc_react/src/API.js'
import '/home/abcd/immoc_react/src/js/Content/StudyCard/HotTopic/HotTopic.css'


class Article extends Component{
    constructor(props){
        super(props);
        this.name="Article"
    }
    render(){
        const {item}=this.props;
        return(
            <div  className="waterfull">
            <label className="blueArticle">
            <svg t="1568680826151" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2247" width="16" height="16"><path d="M320 864 320 0l480 0 0 192 0 32L1024 224l0 640L320 864zM928 320l-512 0 0 32 512 0L928 320zM928 448l-512 0 0 32 512 0L928 448zM928 576l-512 0 0 32 512 0L928 576zM928 704l-512 0 0 32 512 0L928 704zM832 0l19.2 0L1024 160 1024 192l-192 0L832 0zM288 896l320 0L704 896l0 128L0 1024 0 160l288 0 0 320-192 0L96 512l192 0 0 96-192 0L96 640l192 0 0 96-192 0L96 768l192 0 0 96-192 0L96 896 288 896z" p-id="2248" fill="#1895d7"></path></svg>
            {item.tag}
            </label>
        <div className="title">
            <a href="">{item.title}</a>
            <img src={require("/home/abcd/immoc_react/src/img"+item.img+".png")}/>
        </div>
        <p>{item.content}</p>
        <div className="bottomInfo">
            <span>{item.browse}</span>
            <span>{item.recommend}</span>
            <a href="">
                {item.readMore}
                <svg t="1568623336710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="12" height="12"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" p-id="1913" fill="#008cc899"></path></svg>
            </a>
        </div>
        </div>
        )
    }
}
export default Article ;

//waterfull