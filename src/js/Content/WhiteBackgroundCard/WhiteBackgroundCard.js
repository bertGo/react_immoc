import React,{Component} from 'react';
import TypesTitle from './TypesTitle/TypesTitle'
import CourseCard from './CourseCard/CourseCard'
import '/home/abcd/immoc_react/src/js/Content/WhiteBackgroundCard/WhiteBackgroundCard.css'

class WhiteBackgroundCard extends Component{
    constructor(props){
        super(props);
        this.name="WhiteBackgroundCard"
    }
    render(){
        const{position_left,position_right,Card,types,card_init,card_group,titles}=this.props;
        //card_init 是一组卡片初始位置　card_group是不同组的卡片
        let row=card_init;
        let col=card_group;
        return(
            <div className="WhiteBackgroundCard">
                <div className = "ContainerTypesClearFix">
                <TypesTitle
                position_left={position_left}
                position_right={position_right}
                types={types}
                />
                {Card.map(item=>{
                row++;
                return(
                <CourseCard
                card_init={row}
                card_group={col}
                titles={titles}
                text1={item.text1}
                text2={item.text2}
                title={item.title}
                item={item}
                />
                )})}
                </div>
            </div>
        )
    }
}

export default WhiteBackgroundCard;