import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import { Carousel } from 'element-react';
import 'element-theme-default';
class WuLong extends Component{

    //数据放在lbinfo里面时，不加下面的遍历板块，
    //数据放在json时lbinfo为空，写lbinfo：[]
    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"1","imgsrc":"image/LL4.png"},
                {id:"2","imgsrc":"image/LL3.png"},
                {id:"3","imgsrc":"image/LL2.png"},
                {id:"4","imgsrc":"image/LL1.png"}
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
                        &nbsp;&nbsp;[正茗村] 炭烧铁观音（2016）
                    </h3>
                </div>
                <div className="conent">
                    <p>茶语评分：8.7
                        <br/>
                        推荐指数：8.8
                        <br/>
                        参考价格：60元 / 250g
                        <br/>
                        评鉴时间：2017年1月
                        <br/>
                        总评：一款焙火较轻，内质一般的乌龙茶。 香气以火功香和浅花果香为主，香气略显低闷。滋味较厚，带有酸感和涩感，协调性尚好，回甘生津浅，回味一般。
                    </p>
                </div>
                <div className="box3">

                </div>
                <p className="conent">
                    基本信息
                </p>
                <hr/>
                <div className="conent">

                    品牌：正茗村
                    <br/>
                    茶类：乌龙,安溪铁观音
                    <br/>
                    产地：福建
                    <br/>
                    生产时间：2016年
                    <br/>
                    茶树品种：无
                    <br/>
                    规格：250g
                    <br/>
                    包装：普通装
                    <br/>
                    参考价：60元
                    <br/>
                    保质期：180个月
                    <br/>
                    生产许可证：QS350514011601
                    <br/>
                    执行标准：GB/T19598-2006
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
                        颗粒，较圆结，较重实，黄绿稍深，较匀。
                    </p>
                    <div className="img3">
                        <img src="image/LL3.png" alt=""/>
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
                        紫砂壶、玻璃公道杯、白瓷品茗杯、茶船、茶荷、茶巾、茶艺六用、随手泡、茶杯托、电子秤。
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
                        汤色绿黄明亮，火香中带着花香，茶汤入口少了些鲜活感，微微带着水闷感，滋味较醇爽，微甜
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
                        汤色黄较亮，花果香，微带闷感，滋味入口微酸涩，较厚，回甘不错。
                        <br/>
                        <div className="img3">
                            <img src="image/44.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第4泡：
                        <br/>
                        汤色金黄明亮，清香稍闷，滋味较醇厚，稍苦，喝下茶汤后舌面有种被灰尘覆盖住的感觉。                        <br/>
                        <div className="img3">
                            <img src="image/55.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="conent">
                    <p>
                        第6泡：
                        <br/>
                        汤色较黄，明亮，清香稍扬，水闷味散去，滋味上差了，酸感增强，苦味也出现。
                        <br/>
                        <div className="img3">
                            <img src="image/66.png" alt=""/>
                        </div>
                    </p>
                </div>
                <div className="box3">

                </div>
                <div className="conent">
                    <p>
                        <span>叶底</span>
                        <br/>
                        叶底较软，黄绿稍深，泛褐，尚匀，较亮
                        <br/>
                        <div className="img3">
                            <img src="image/TD.png" alt=""/>
                        </div>
                    </p>
                </div>

            </div>

        )
    }
}
export default WuLong