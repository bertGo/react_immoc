/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import {waterFullHot} from '/home/abcd/immoc_react/src/API.js';
import '/home/abcd/immoc_react/src/js/Content/StudyCard/HotTopic/HotTopic.css'


class HotTopic extends Component{
    constructor(props){
        super(props);
        this.name="HotTopic"
    }
    render(){
        const {item}=this.props;
        return(
                <div  >
                     <div className="waterfull">
                         <div className="aa">
                        <p className="hotpic">{item.tag}</p>
                        <div className = "">
                            <a className="waterA" href="">{item.title}
                            <br/>
                                {item.titleBr}
                            </a>
                            <img src={require("/home/abcd/immoc_react/src/img/"+item.img+".png")}/>
                        </div>
                        <p className="waterP">{item.content}</p>
                        <div>
                            <a className="details" href="">{item.lk}
                            <svg t="1568623336710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="12" height="12"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" p-id="1913" fill="#00b43c"></path></svg>
                            </a>
                        </div>
                        </div>
                            <div className="line">
                                <span>{item.comeBack}</span>
                            </div>
                            {item.inner.map(items=>
                            {
                                return(
                            <div className="comeBack">
                                <a className="lineA">
                                {items.main}
                                <br/>
                                {items.mainBr}
                                </a>
                            <img src={require("/home/abcd/immoc_react/src/img"+items.Img+".png")}/>
                            </div>
                                )
                            })
                            }
                        <div>
                            <a className="details" href="">{item.moreComeBack}
                            <svg t="1568623336710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="12" height="12"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" p-id="1913" fill="#00b43c"></path></svg>
                            </a>
                        </div>
                    </div>
                    
                      }
                </div>
        )
    }
}

export default HotTopic 


