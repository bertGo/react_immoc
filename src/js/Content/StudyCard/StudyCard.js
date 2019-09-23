import React,{Component} from 'react';
import TypesTitle from '../WhiteBackgroundCard/TypesTitle/TypesTitle'
import {TypesTit6} from '/home/abcd/immoc_react/src/API.js'
import {active,waterFullHot,activeGreen} from '/home/abcd/immoc_react/src/API.js'
import HotTopic from './HotTopic/HotTopic'
import $ from 'jquery'
import  Article from './HotTopic/Article';
import ArticleGreen from './HotTopic/ArticleGreen'
import '/home/abcd/immoc_react/src/js/Content/StudyCard/StudyCard.css'
class StudyCard extends Component{
    constructor(props){
        super(props);
        this.name="StudyCard"
    }
    componentDidMount(){
//------------------------------瀑布流-----------------------------
    let len=$(".waterfull").length;
    let ht=[],
            lt=[];
    for(let i=0; i<len;i++){
            if(i<3){
                $(".waterfull").eq(i).css({
                    top:0
                    ,left:(i*390)+"px"
                });
                ht.push($(".waterfull").eq(i).height()+18+24+32);
                lt.push($(".waterfull").eq(i).position().left);
            }
            if(i>=3){
            let index=$.inArray(Math.min(...ht),ht);
            $(".waterfull").eq(i).css({
                top:(Math.min(...ht))+"px"
                ,left:lt[index]+"px"
            });
            ht[index]+=  $(".waterfull").eq(i).height()+18+24+32;
        }
    }
}
    render(){
        return(
            <div style={{backgroundColor:"#f8fafc",width:"100%"}}>
                <div className="ContainerTypesClearFix" >
                <TypesTitle 
                position_left="10"
                position_right="11"
                types={TypesTit6}
                />
                <div className="StudyCard" >
                    {waterFullHot.map(item=>    <HotTopic   item={item} />  )}
                    {active.map(item=>     <Article item={item}/>)}
                    {activeGreen.map(item =>    <ArticleGreen item={item}  />)}
                </div>
                </div>
                <div className="math">aa</div>
                </div>
        )
    }
}
export default StudyCard 