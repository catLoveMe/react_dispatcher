/**
 * Created by Administrator on 2018/1/2.
 */
import React, {Component} from 'react'
import './Xtmes.css'
class Xtmes extends Component{
    constructor(){
        super()
        this.state={
            totalmes:[]
        }
    }
    componentWillMount(){
        fetch("/api/totalmes.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            this.setState({
                totalmes: data
            })
        })
    }
    render(){
        let moremes = this.state.totalmes.map((item,index)=>{
            return(
                <div className="xttext" key={index}>
                    <p>{item.info}</p>
                    <p className="top5">{item.time}</p>
                </div>
            )
        })
        return(
            <div>
                <div className="xtname">
                    <a href="/mymes"><span>&#xe679;</span></a>
                    <h4>系统消息</h4>
                </div>
                {moremes}
            </div>
        )
    }
}

export default Xtmes