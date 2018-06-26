import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import { Carousel } from 'element-react';
import 'element-theme-default';
class LongJing extends Component{

    //数据放在lbinfo里面时，不加下面的遍历板块，
    //数据放在json时lbinfo为空，写lbinfo：[]
    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"1","imgsrc":"image/555.png"},
                {id:"2","imgsrc":"image/333.png"},
                {id:"3","imgsrc":"image/222.png"},
                {id:"4","imgsrc":"image/444.png"}
            ]
        }
    }
//如果数据在json里面，加这个板块，用下面的方法遍历数据
    // componentWillMount(){
    //     fetch("/api/sylb.json").then(resp=>{
    //         return resp.json()
    //     }).then(data=>{
    //         this.setState({
    //             lbinfo: data
    //         })
    //     })
    // }

    render(){
        return(
            <div>
                <div className="ping">
                    <p className="pingjia">
                    <span>
                        <NavLink to="/TeaEvaluation">＜</NavLink>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                        茶叶评价详情
                    </p>
                </div>
                <div className="img2">
                    <div className="demo-2 medium">

                        <Carousel height="280px">
                            {
                                this.state.lbinfo.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="navbox">
                                                <img src={item.imgsrc} alt=""/>
                                            </div>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="box2">
                    <h3>
                        &nbsp;&nbsp;龙井茶（2017）
                    </h3>
                </div>
                <div className="conent">
                    <p>茶语评分：8.1
                        <br/>
                        推荐指数：7.8
                        <br/>
                        参考价格：60元/50g
                        <br/>
                        评鉴时间：2015年11月
                        <br/>
                        总评：一款内置清爽、稍苦涩的绿茶，茶汤滋味较淡，整体品质一般。炒豆香，嫩香渐显。茶汤色泽较清亮，
                        滋味柔和，入口清爽甘甜，有回甘，涩味随泡数增加而加重。
                    </p>
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    基本信息
                </p>
                <hr/>
                <div className="conent">

                    品牌：天福茗茶
                    <br/>
                    茶类：绿茶，西湖龙井
                    <br/>
                    产地：浙江
                    <br/>
                    生产时间：2017年
                    <br/>
                    茶树品种：无
                    <br/>
                    规格：100g
                    <br/>
                    包装：普通装
                    <br/>
                    参考价：90元
                    <br/>
                    保质期：18个月
                    <br/>
                    生产许可证：QS330614011097
                    <br/>
                    执行标准：GB/T18650-2008
                    <br/>
                    相关认证：QS认证
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    冲泡过程
                </p>
                <hr/>
                <div className="conent">
                    <p>
                        <span>干茶</span>
                        <br/>
                        外形扁平挺直，光滑，较匀齐，色泽翠绿带黄，一芽一叶较多。
                    </p>
                    <div className="img3">
                        <img src="image/88.png" alt=""/>
                    </div>
                </div>
                <div className="box3">

                </div>
                <div className="conent">
                    <p>
                        <span>准备冲泡</span>
                        <br/>
                        茶样：3g
                        <br/>
                        茶具：盖碗、玻璃公道杯、白瓷品茗杯、茶船、茶荷、茶巾、茶艺六用、随手泡、电子秤、茶杯托
                        <br/>
                        用水：茶语专用水
                        <div className="img3">
                            <img src="image/22.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        <span>冲泡</span>
                        <br/>
                        第1泡：
                        <br/>
                        汤色浅绿，明亮度较高，炒豆香浓郁，香气持久，香入茶汤；汤色柔和，滋味清爽，鲜甜，口齿留香。
                        <br/>
                        <div className="img3">
                            <img src="image/33.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第2泡：
                        <br/>
                        汤色浅绿，稍有混浊，嫩香明显，豆香稍退，茶汤滋味爽口，有新鲜橄榄的回味。
                        <br/>
                        <div className="img3">
                            <img src="image/44.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第3泡：
                        <br/>
                        汤色黄绿，较上一泡加深，香气清新。略有豆香；茶汤滋味鲜爽，口感顺滑，略带苦涩，但很快能化开，有回甘。
                        <br/>
                        <div className="img3">
                            <img src="image/55.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第4泡：
                        <br/>
                        汤色黄绿，香气不明显，茶汤入口少许鲜甜，苦涩味加重，涩留两颊。
                        <br/>
                        <div className="img3">
                            <img src="image/66.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第5泡：
                        <br/>
                        汤色黄绿，无明显香气不明显，茶汤苦涩，出水味，但仍有回甘。
                        <br/>
                        <div className="img3">
                            <img src="image/77.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="box3">

                </div>
                <div className="conent">
                    <p>
                        <span>叶底</span>
                        <br/>
                        色泽嫩绿带黄，明亮，厚实，芽叶尚成朵
                        <br/>
                        <div className="img3">
                            <img src="image/11.png" alt=""/>
                        </div>
                    </p>
                </div>

            </div>

        )
    }
}
export default LongJing