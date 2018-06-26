import React,{Component} from 'react'
import './fairDetailCss.css'
import PanelDeatil from './panelDetail'
import PanelMessage from './panelMessage'
import PanelComment from './panelComment'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'

//element ui 组件
import {Carousel} from 'element-react';
import 'element-theme-default';
class FairDetail extends Component{
    constructor(){
        super();
        this.state={
            currentIndex:0,
            panelTitle:["产品详情","基本信息","用户评价"],
            peo_arr:[],
            peo_img:[]
        }
    }
    //动态切换className的函数
    check_title_index( index ){
        return index === this.state.currentIndex ? "tab_title_active" : ""
    }
    check_item_index(index){
        return index === this.state.currentIndex ? "" : "tab_item_active"
    }
    componentWillMount(){
        fetch("/api/proDetail.json").then(resp=>{
            return resp.json();
        }).then(data=>{
            let recode = data.find(selfitem=>selfitem.id==this.props.match.params.index);
            this.setState({
                peo_arr:recode,
                peo_img:recode.peo_imgsrc
            })
        })
    }

    render(){
        //动态切换className
        let title = this.state.panelTitle.map((item,index)=>{
            return <p key={index} onClick={ () => { this.setState({ currentIndex : index }) } } className={ this.check_title_index(index)}>{item}</p>
        });
        return(
            <div>
                <div className="proDetail_head">
                    <div  className="proDetail_head_item">
                        <a href="/z3"><span>&#xe679;</span></a>
                    </div>
                    <div className="proDetail_head_item_center">商品详情</div>
                    <div className="proDetail_head_item"></div>
                </div>
                <div className="swiper">
                    <Carousel height="240px">
                        {
                            this.state.peo_img.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={item.imgsrc} alt=""/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="pro_title">
                    <ul className="pro_title_item_one">
                        <li>&nbsp;&nbsp;{this.state.peo_arr.peo_title}</li>
                        <li><span className="single_price">￥ {this.state.peo_arr.single_price}</span></li>
                    </ul>
                    <ul className="pro_title_item">
                        <li>
                            <span className="addHeart">&#xe669;&nbsp;</span>
                            <span>&nbsp;&nbsp;{this.state.peo_arr.heartNum}</span>
                        </li>
                        <li>
                            <span>已售</span>
                            <span>&nbsp;&nbsp;{this.state.peo_arr.saleNum}</span>
                        </li>
                    </ul>
                </div>
                <div className="addr">
                    {/*&nbsp;*/}
                    <p className="addr_p">
                        <span>送至：四川(运费：￥0.00)</span>
                        <span></span>
                    </p>
                </div>
                <div className="panel_head">
                    {title}
                </div>
                <div className="panel_pro">
                    <div className="panel_detail" className={this.check_item_index(0)}>
                        {/*面板详情的循环*/}
                        <PanelDeatil index={this.props.match.params.index}/>
                    </div>
                    <div className="panel_message"  className={this.check_item_index(1)}>
                        {/*产品详情面板的数据*/}
                        <PanelMessage index={this.props.match.params.index}/>
                    </div>
                    <div className="panel_comment" className={this.check_item_index(2)}>
                        {/*产品评论面板的数据*/}
                        <PanelComment index={this.props.match.params.index}/>
                    </div>
                </div>
                <div className="fixed_bar">
                    <div className="fixed_bar_item_small">
                        <span>&#xe6af;</span>
                        <p>购物车</p>
                    </div>
                    <div className="fixed_bar_item_small">
                        <span>&#xe6ff;</span>
                        <p>客服</p>
                    </div>
                    <div className="fixed_bar_item_small">
                        <span>&#xe7f0;</span>
                        <p>收藏</p>
                    </div>
                    <div className="fixed_bar_item_big">
                        <p>加入购物车</p>
                    </div>
                    <div className="fixed_bar_item_big">
                        <p>立即购买</p>
                    </div>
                </div>
            </div>
        )
    }
}
export  default FairDetail