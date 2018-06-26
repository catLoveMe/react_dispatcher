/**
 * Created by Administrator on 2018/1/2.
 */
import React, {Component} from 'react'
import './Kfmes.css'
class Kfmes extends Component{
    render(){
        return(
            <div>
                <div className="kfname">
                    <a href="/mymes"><span>&#xe679;</span></a>
                    <h4>客服消息</h4>
                </div>
                <p className="kfp">暂无客服消息</p>
            </div>
        )
    }
}

export default Kfmes