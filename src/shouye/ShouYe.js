/**
 * Created by Administrator on 2017/12/31.
 */
import React, {Component} from 'react'
import { Carousel } from 'element-react';
import 'element-theme-default';
import './ShouYe.css'
import ModA from './ModA'
import "whatwg-fetch"
class ShouYe extends Component{
    constructor(){
        super()
        this.state={
            lbinfo:[]
        }
    }
    componentWillMount(){
        fetch("/api/sylb.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            this.setState({
                lbinfo: data
            })
        })
    }
    render(){
        localStorage.newhref = "/z1";
        return(
            <div className="bodyright">
                <div className="znav">
                    <div className="demo-2 medium">
                        <Carousel height="120px">
                            {
                                this.state.lbinfo.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="navbox">
                                                <span>{item.bt}</span>
                                                <img src={item.imgsrc} alt={item.bt}/>
                                            </div>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="zttalk">
                    <p>茶评</p>
                    <div className="cpshow">
                        <div className="sybox">
                            <img src="images/gtea.png" alt="" className="ttimg"/><br/>
                            <span>西湖龙井</span>
                        </div>
                        <div className="sybox">
                            <img src="images/wtea.png" alt="" className="ttimg"/><br/>
                            <span>乌龙茶</span>
                        </div>
                        <div className="sybox">
                            <img src="images/htea.png" alt="" className="ttimg"/><br/>
                            <span>普洱茶</span>
                        </div>
                        <div className="sybox">
                            <img src="images/ptea.png" alt="" className="ttimg"/><br/>
                            <span>金骏眉</span>
                        </div>
                        <div className="sybox">
                            <img src="images/btea.png" alt="" className="ttimg"/><br/>
                            <span>花茶</span>
                        </div>
                    </div>
                </div>
                <ModA/>
            </div>
        )
    }
}

export default ShouYe