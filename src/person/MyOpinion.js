/**
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import './MyOpinion.css'
class MyOpinion extends Component{
    render(){
        return(
            <div>
                <div className="selfname">
                    <a href="/person"><span>&#xe679;</span></a>
                    <h4>意见与看法</h4>
                </div>
                <textarea className="motext" placeholder="亲爱的用户：请在此填写您遇到的问题和建议，您的意见对我们非常重要，您的关注是我们前进的动力！"></textarea>
                <div className="mobox">
                    <p>您的邮箱</p>
                    <input type="" placeholder="选填"/>
                </div>
                <div className="mobox">
                    <p>您的电话</p>
                    <input type="" placeholder="选填"/>
                </div>
                <button className="motj">提交</button>
            </div>
        )
    }
}

export default MyOpinion