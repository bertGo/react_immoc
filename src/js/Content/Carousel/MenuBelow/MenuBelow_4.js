import React,{Component} from 'react'
import './MenuBelowCss/MenuBelow.css'

//无状态组件
const  Red=()=>
<span>限时优惠</span>

//点点
export const Point=()=>
    <i>·</i>

class MenuBelow_4 extends Component {
    constructor(props){
        super(props)
        this.name="MenuBelow"
    }
    render(){
        let {col,item}=this.props;
        let j =col;
        return(
            <div className="banner_course_card">
                    <a href="">
                        <img src={require("/home/abcd/immoc_react/src/img/comment"+j+"_"+item.id+".png")} alt=""/>
                        <div className="source_card">
                            <div className="source_card_name">
                            {item.content}
                            </div>
                         {/* 判断是否显示价格 */}
                            {item.moneys  ? <div className={item.red ? "red_bold" : "bold"}>{item.money} </div>  :  null}
                            {/* 判断是否添加限时优惠标签 */}
                            {item.red ? <Red/> : null}
                            {/* 判断添加小点 */}
                            {item.first_star ? <Point /> : null}
                            <div className = "garde">
                                {item.grade}
                            </div>
                            {item.last_star? <Point/> : null }
                            <div className="number">
                            <svg t="1568207361238" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7240" width="12" height="12"><path d="M511.3 573.8c-59.5 0-115.4-23.2-157.4-65.2-42.1-42.1-65.2-98-65.2-157.4s23.2-115.4 65.2-157.4 98-65.2 157.4-65.2c59.5 0 115.4 23.2 157.4 65.2 42.1 42.1 65.2 98 65.2 157.4s-23.2 115.4-65.2 157.4-97.9 65.2-157.4 65.2z m0-381.3c-87.5 0-158.6 71.2-158.6 158.6s71.2 158.6 158.6 158.6c87.5 0 158.6-71.2 158.6-158.6s-71.1-158.6-158.6-158.6zM263.5 904.5l-62.7-12.8c14.5-71 53.5-135.6 109.7-182 28-23.1 59.4-41.1 93.3-53.5 35.1-12.9 72-19.4 109.7-19.4 37.4 0 74 6.4 108.9 19.1 33.7 12.2 64.9 29.9 92.8 52.7 55.9 45.6 95.1 109.3 110.3 179.4L763 901.6c-12.2-56-43.5-106.9-88.2-143.4-22.3-18.2-47.2-32.3-74.1-42.1-27.8-10.1-57.1-15.2-87-15.2-59.1 0-116.8 20.7-162.3 58.3-45.1 37-76.3 88.6-87.9 145.3z" p-id="7241"></path></svg>
                                {item.number}
                            </div>
                        </div>
                    </a>
                </div>
        )
    }
}


export default MenuBelow_4