import React,{Component} from 'react'
import './fairListCSs.css'
import 'whatwg-fetch'

class FairList extends  Component{

    render(){
        return(
            <div className="fontfl">
                <div className="content_item" >
                    <div className="content_img">
                        <p className="hot_product">热销</p>
                        <img src={this.props.imgsrc} alt=""/>
                    </div>
                    <div className="content_p">
                        <p className="content_p_p">
                            <span className="h5_head">{this.props.title_bold}</span>
                            <span>{this.props.title}</span>
                        </p>
                        <p className="content_p_p">
                            <span className="pirce">￥{this.props.price}</span>
                            <span className="sale_num">已售  {this.props.saleNum}</span>
                        </p>
                    </div>
                </div>
                {/*<div className="content_item">*/}
                    {/*<div className="content_img">*/}
                        {/*<img src="" alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="content_p">*/}
                        {/*<p>*/}
                            {/*<span className="h5_head">zhuangtai|zhu</span>*/}
                            {/*<span>来源地来自哪里的茶有什么作用</span>*/}
                        {/*</p>*/}
                        {/*<p>*/}
                            {/*<span>￥120</span>*/}
                            {/*<span>已售商品数量</span>*/}
                        {/*</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}
export  default FairList