import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import { Carousel } from 'element-react';
import 'element-theme-default';
class JinJunMei extends Component{

    //数据放在lbinfo里面时，不加下面的遍历板块，
    //数据放在json时lbinfo为空，写lbinfo：[]
    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"1","imgsrc":"image/lun1.png"},
                {id:"2","imgsrc":"image/lun3.png"},
                {id:"3","imgsrc":"image/5555.png"},
                {id:"4","imgsrc":"image/lun4.png"}
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
                        &nbsp;&nbsp;[丝茅岭] 金骏眉（2016）
                    </h3>
                </div>
                <div className="conent">
                    <p>茶语评分：8.5
                        <br/>
                        综合评分：8.6
                        <br/>
                        参考价格：99元 / 100g
                        <br/>
                        评鉴时间：2016年10月
                        <br/>
                        总评：一款用料级别高，但工艺略显不足的红茶。
                        此款外形很漂亮，但香气略有缺陷，整体为甜香，
                        但烟味较重，而且烟味入到茶汤里,且茶水入口不够干净，带浊。
                    </p>
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    基本信息
                </p>
                <hr/>
                <div className="conent">

                    品牌：丝茅岭
                    <br/>
                    茶类：红茶,金骏眉
                    <br/>
                    产地：湖北
                    <br/>
                    生产时间：2016年
                    <br/>
                    茶树品种：无
                    <br/>
                    规格：100g
                    <br/>
                    包装：普通装
                    <br/>
                    参考价：99元
                    <br/>
                    保质期：适宜条件下可长期保存个月
                    <br/>
                    生产许可证：QS421114010066
                    <br/>
                    执行标准：GB/T13738.2
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
                        干茶条索紧结，全芽头制作，满披金色的茸毛，匀整度高，干闻带烟味。
                    </p>
                    <div className="img3">
                        <img src="image/1111.png" alt=""/>
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
                        汤色金黄，较明亮；甜香为主，略带烟味；茶汤甜润，似喝桂圆汤。
                        <br/>
                        <div className="img3">
                            <img src="image/3333.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第2泡：
                        <br/>
                        汤色橙黄，较第一泡颜色深；香气甜香为主，依然带烟味，茶汤含香，滋味甜润，入口顺滑。
                        <br/>
                        <div className="img3">
                            <img src="image/4444.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第3泡：
                        <br/>
                        汤色橙黄，明亮；香气为甜香，烟味更为明显；茶汤甜软，但是浓度略下降，且入口稍浊。
                        <br/>
                        <div className="img3">
                            <img src="image/5555.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第4泡：
                        <br/>
                        汤色橙黄明亮，烟味几乎消失，甜香明显；汤水浓度下降，滋味甜润，稍平淡。
                        <br/>
                        <div className="img3">
                            <img src="image/6666.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第5泡：
                        <br/>
                        汤色橙黄明亮，变得清澈，甜香下降，滋味淡薄，略带一点点甜味。
                        <br/>
                        <div className="img3">
                            <img src="image/7777.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="box3">

                </div>
                <div className="conent">
                    <p>
                        <span>叶底</span>
                        <br/>
                        叶底为古铜红色，全芽头，嫩匀柔软，有光泽，稍碎。
                        <br/>
                        <div className="img3">
                            <img src="image/8888.png" alt=""/>
                        </div>
                    </p>
                </div>

            </div>

        )
    }
}
export default JinJunMei