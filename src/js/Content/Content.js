import React,{Component} from 'react';
import Bk from './Carousel/Bk/Bk'
import Carousel from './Carousel/Carousel'
import WhiteBackgroundCard from './WhiteBackgroundCard/WhiteBackgroundCard'
import BlueBackgroundCard from './WhiteBackgroundCard/Blue/BlueBackgroundCard'
import StudyCard from './StudyCard/StudyCard'
import {Card1,Card2,TypesTit1,TypesTit2,TypesTit3,TypesTit4,TypesTit5, Card3,Card4} from '/home/abcd/immoc_react/src/API.js';
import Teacher from './Teacher/Teacher'
import Celebrity from './Celebrity/Celebrity'

class Content extends Component{
    render(){
        return(
            <div className="content" style={{overflow: "hidden"}}>
                {/* 轮播背景 */}
                <Bk />
                {/* 轮播图 */}
                <Carousel />
                {/* position_left/right是card_title背景雪碧图的position
                types接受card_title文字数据
                Card需要接受课程卡片的数据
                card_init是卡片组的初始值
                card_group是不同的卡片组
                titles是二级标题的背景图片顺序索引
                */}
                <WhiteBackgroundCard position_left="0"   position_right="1" Card={Card1} types={TypesTit1}   card_init="0"  card_group="1"
                />
                <BlueBackgroundCard position_left="2"   position_right="3"  Card={Card2}   types={TypesTit2}   card_init="0"   card_group="2"   
                />
                <WhiteBackgroundCard position_left="4"   position_right="5"Card={Card3}   types={TypesTit3}   card_init="0"   card_group="3"   titles="0"
                />
                <BlueBackgroundCard position_left="6"   position_right="7"  Card={Card4}    types={TypesTit4}   card_init="0"   card_group="4"   titles="2"
                />
                 <WhiteBackgroundCard position_left="8"   position_right="9"Card={Card3}   types={TypesTit5}   card_init="0"   card_group="5"   titles="4"
                />
                {/* 下侧 小卡片*/}
                <StudyCard/>
                {/* 下侧轮播图 */}
                <Teacher/>
                {/* 下侧动画框 */}
                <Celebrity/>
            </div>
        )
    }
}

export default Content;