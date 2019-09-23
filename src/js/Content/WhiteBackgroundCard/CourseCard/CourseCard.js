/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import Img from '../Img/Img'
import CardContent from '../CardContent/CardContent'
import Title2 from '../Title2/Title2'
import './CourseCard.css'

class CourseCard extends Component{
    constructor(props){
        super(props);
        this.name="CourseCard"
    }
    //card_init 卡片图片初始值
    //card_group 不同的卡片组
    render(){
        const {
            card_init,card_group
            ,item
            ,titles
        }=this.props;
        return(
            <div>
            {item.title2?
            <Title2 item={item}  titles={titles}/>  :   null }
            <div className="CourseCard">
                 <a  href="#">
                <div className="Card">
                <Img    card_init={card_init}   card_group={card_group}   item={item}  />
                <CardContent    item={item}/>
                </div>
                </a>
            </div>
            </div>
            )
    }
}

export default CourseCard;