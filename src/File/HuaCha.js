import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import { Carousel } from 'element-react';
import 'element-theme-default';
class HuaCha extends Component{

    //数据放在lbinfo里面时，不加下面的遍历板块，
    //数据放在json时lbinfo为空，写lbinfo：[]
    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"1","imgsrc":"image/11111.png"},
                {id:"2","imgsrc":"image/22222.png"},
                {id:"3","imgsrc":"image/222.png"},
                {id:"4","imgsrc":"image/44444.png"}
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
                        &nbsp;&nbsp;[峨眉雪芽] 峨香雪•慧欣（2016）
                    </h3>
                </div>
                <div className="conent">
                    <p>茶语评分：8.7
                        <br/>
                        推荐指数：8.7
                        <br/>
                        参考价格：198元 / 108g
                        <br/>
                        评鉴时间：2017年1月
                        <br/>
                        总评：一款外形漂亮，茉莉花香纯正的茉莉花茶。 这款茉莉花茶，外形隽秀，紧细弯曲带着锋苗，墨绿油润的叶色有白毫隐隐。茶中点缀着花朵，只是颜色微偏黄。 茉莉花和茶整体融合度较好。茉莉花香很纯正，汤内有香。茶汤入口顺滑，滋味较鲜甜，冲泡中期入口微有苦，苦味化得快；后期带涩，涩化得较慢。但是生津迅速而且回甘强烈，并且回味持久。五泡出水味。
                    </p>
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    基本信息
                </p>
                <hr/>
                <div className="conent">

                    品牌：峨眉雪芽
                    <br/>
                    茶类：花茶,茉莉花茶
                    <br/>
                    产地：四川
                    <br/>
                    生产时间：2016年
                    <br/>
                    茶树品种：无
                    <br/>
                    规格：108g
                    <br/>
                    包装：普通装
                    <br/>
                    参考价：198元
                    <br/>
                    保质期：18个月
                    <br/>
                    生产许可证：QS511114010062
                    <br/>
                    执行标准：GB/T22292
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
                        干茶外形漂亮，条索紧细弯曲带锋苗，白毫隐现，整体颜色墨绿油润。茶中带花朵，花偏黄。
                    </p>
                    <div className="img3">
                        <img src="image/22222.png" alt=""/>
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
                        盖碗、玻璃公道杯、白瓷品茗杯、茶船、茶荷、茶巾、茶艺六用、随手泡、茶杯托、电子秤。

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
                        汤色绿黄而油，白毫悬浮。茉莉花香纯正较扬，汤内含花香，入口顺滑，有鲜味。
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
                        汤色绿黄油亮，有少量白毫悬浮。茉莉花香依旧高扬。汤内有茉莉花香，入口顺、汤质较厚滑，但喝后舌面有涩感，化得较慢，生津舒缓。茉莉花与茶整体较为协调。
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
                        汤色仍是黄绿明亮。茉莉花香略降。汤香较显，入口微苦，但汤顺、有厚感，舌面涩略加重，但两颊生津快速，回甘明显。                       <br/>
                        <div className="img3">
                            <img src="image/55.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第4泡：
                        <br/>
                        汤色黄绿明亮。茉莉花香持久，较扬。茶汤依旧含茉莉花香。茶汤滋味变薄，汤内甜味凸显，但仍带涩味。生津快而显，回甘强烈持久。
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
                        汤色略变浅，黄绿明亮。仍有较明显的茉莉花香，但茶汤出水味。
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
                        叶底选料较为细嫩，多芽头，但茶叶稍有断碎。茶质柔韧。整体颜色黄绿较润。
                        <br/>
                        <div className="img3">
                            <img src="image/88888.png" alt=""/>
                        </div>
                    </p>
                </div>

            </div>

        )
    }
}
export default HuaCha