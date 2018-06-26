/**
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import './Myself.css'
class Myself extends Component{
    render(){
        let name = localStorage.name;
        return(
            <div>
                <div className="selfname">
                    <a href="/person"><span>&#xe679;</span></a>
                    <h4>编辑个人信息</h4>
                </div>
                <div className="selfbox">
                    <p>昵称</p>
                    <p>{name}</p>
                </div>
                <div className="selfbox">
                    <p>性别</p>
                    <p>
                        <input type="radio" name="sex" defaultChecked/>
                        男
                        <input type="radio" name="sex" className="selfinpu"/>
                        女
                    </p>
                </div>
                <div className="selfbox">
                    <p>生日</p>
                    <p className="selftime">
                        <input type="date" defaultValue="2015-01-01"/>
                    </p>
                </div>
                <div className="selfbox">
                    <p>手机</p>
                    <p>13739461329</p>
                </div>
            </div>
        )
    }
}

export default Myself