import React,{Component} from "react"
import "./TeaEvaluation.css"
import { Carousel } from 'element-react';
import 'element-theme-default';
class TeaEvaluation extends Component{

    constructor(){
        super()
        this.state={
            lbinfo:[
                {id:"2","imgsrc":"image/555.png"},
                {id:"3","imgsrc":"image/lun1.png"},
                {id:"4","imgsrc":"image/l5.png"},
                {id:"5","imgsrc":"image/LL4.png"}
            ]
        }
    }
    render(){
        localStorage.newhref = "/z2";
        return(
            <div>
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
                <nav>
                    <ul>
                        <li>
                            <a href="/longjing">
                                <div className="img1">
                                    <img src="images/gtea.png" alt=""/>
                                    &nbsp;&nbsp;
                                    西湖龙井
                                    <span className="Z">
                                        >
                                    </span>
                                </div>
                            </a>

                        </li>
                        <hr/>
                        <li>
                            <a href="/wulong">
                                <div className="img1">
                                    <img src="images/wtea.png" alt=""/>
                                    &nbsp;&nbsp;
                                    乌龙茶
                                    <span className="Z">
                                        >
                                    </span>
                                </div>
                            </a>

                        </li>
                        <hr/>
                        <li>
                            <a href="/puer" >
                                <div className="img1">
                                    <img src="images/htea.png" alt=""/>
                                    &nbsp;&nbsp;
                                    普洱茶
                                    <span className="Z">
                                        >
                                    </span>
                                </div>
                            </a>

                        </li>
                        <hr/>
                        <li>
                            <a href="/jinjunmei" >
                                <div className="img1">
                                    <img src="images/ptea.png" alt=""/>
                                    &nbsp;&nbsp;
                                    金骏眉
                                    <span className="Z">
                                        >
                                    </span>
                                </div>
                            </a>

                        </li>
                        <hr/>
                        <li>
                            <a href="/huacha" >
                                <div className="img1">
                                    <img src="images/btea.png" alt=""/>
                                    &nbsp;&nbsp;
                                    花茶
                                    <span className="Z">
                                        >
                                    </span>
                                </div>
                            </a>
                        </li>
                        <hr/>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default TeaEvaluation