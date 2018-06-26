import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import { Carousel } from 'element-react';
import 'element-theme-default';
class PuEr extends Component{

    //数据放在lbinfo里面时，不加下面的遍历板块，
    //数据放在json时lbinfo为空，写lbinfo：[]
    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"1","imgsrc":"image/l5.png"},
                {id:"2","imgsrc":"image/l3.png"},
                {id:"3","imgsrc":"image/l2.png"},
                {id:"4","imgsrc":"image/l4.png"}
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
                        &nbsp;&nbsp;[浮生若茶] 清莲凝香（2012）
                    </h3>
                </div>
                <div className="conent">
                    <p>茶语评分：8.8
                        <br/>
                        综合评分：8.9
                        <br/>
                        参考价格：384元 / 357g
                        <br/>
                        评鉴时间：2017年12月
                        <br/>
                        总评：木香，菌香明显，有稠感的优质熟茶。 类似木头，菌类的香气融于茶汤，
                        嘴里有持久留香； 茶汤入口有稠感，喝完满口回甜，涩感明显，化开缓慢。
                    </p>
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    基本信息
                </p>
                <hr/>
                <div className="conent">

                    品牌：浮生若茶
                    <br/>
                    茶类：普洱,熟茶
                    <br/>
                    产地：云南
                    <br/>
                    生产时间：2012年
                    <br/>
                    茶树品种：无
                    <br/>
                    规格：357g
                    <br/>
                    包装：普通装
                    <br/>
                    参考价：384元
                    <br/>
                    保质期：适宜条件下可长期保存个月
                    <br/>
                    生产许可证：QS532714010120
                    <br/>
                    执行标准：GB/T22111-2008
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
                        干茶压制比较紧，条索以黑褐色为主，带有细小的金色芽头。
                    </p>
                    <div className="img3">
                        <img src="image/l3.png" alt=""/>
                    </div>
                </div>
                <div className="box3">

                </div>
                <div className="conent">
                    <p>
                        <span>准备冲泡</span>
                        <br/>
                        茶样：7g
                        <br/>
                        茶具：紫砂壶、玻璃公道杯、白瓷品茗杯、茶船、茶荷、茶巾、茶艺六用、随手泡、茶杯托、电子秤。
                        <br/>
                        用水：茶语专用水
                        <div className="img3">
                            <img src="image/p2.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        <span>冲泡</span>
                        <br/>
                        第1泡：
                        <br/>
                        汤色浅橙红，比较明亮；茶汤甜润，有干净的木香，一点点菌香；茶汤滋味甜润，清凉。
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

                        我的手机 2018/1/4 11:47:08
                        汤色带着漂亮的酒红色；干木头香、菌香很好融于茶汤；茶汤入口甜润度颇高，喝完嘴里有明显涩感，消退较慢，嘴里有回甘生津。
                        <br/>
                        <div className="img3">
                            <img src="image/4444.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第4泡：
                        <br/>
                        汤色转为比较深的酒红色，茶汤保持在稳定状态；茶汤入口稠感明显，喝完后嘴里留有高度的甜感，舌面依然有涩感，回甘生津更加明显。
                        <br/>
                        <div className="img3">
                            <img src="image/5555.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第5泡：
                        <br/>
                        汤色基本不变；香气有所下降；茶汤顺滑，甜度高，涩感突出影响协调；嘴里的清凉感，生津回甘持续。
                        <br/>
                        <div className="img3">
                            <img src="image/6666.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第7泡：
                        <br/>
                        汤色转橙红色，滋味已经非常淡，还是有持续的甜感和生津，始终有清凉感，可以继续冲泡。
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
                        叶底基本为褐色叶片，大部分还具备一定活性，带少量部分软烂叶片和硬梗。
                        <br/>
                        <div className="img3">
                            <img src="image/p8.png" alt=""/>
                        </div>
                    </p>
                </div>

            </div>

        )
    }
}
export default PuEr