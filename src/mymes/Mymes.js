/**
 * Created by Administrator on 2018/1/2.
 */
import React, {Component} from 'react'
import './Mymes.css'
class Mymes extends Component{
    render(){
        return(
            <div>
                <div className="btname">
                    <a href="/main"><span>&#xe679;</span></a>
                    <h4>我的消息</h4>
                </div>
                <div>
                    <a href="/xtmes"><p className="pxt"><b>&#xe678;</b> 系统消息 <span>&#xe6a3;</span></p></a>
                </div>
                <div>
                    <a href="/kfmes"><p className="pxt"><b>&#xe6ff;</b> 客服消息 <span>&#xe6a3;</span></p></a>
                </div>
            </div>
        )
    }
}

export default Mymes