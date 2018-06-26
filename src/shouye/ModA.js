/**
 * Created by Administrator on 2017/12/31.
 */
import React, {Component} from 'react';
import './ModA.css'
import "whatwg-fetch"
class ModA extends Component{
    constructor(){
        super()
        this.state={
            countent:[]
        }
    }
    componentWillMount(){
        fetch("/api/sy.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            this.setState({
                countent: data
            })
        })
    }
    render(){
        let counter = this.state.countent.map((item,index)=>{
            return(
                <div className="sysj" key={index}>
                    <p><span>{item.name}</span><a href={item.goto}><span className="symoresj">更多> </span></a></p>
                    <div className="mabox">
                        <img src={item.imgsrc} alt="" className="maimg"/>
                        <h4>{item.btcount}</h4>
                        <span>{item.fbtcount}</span>
                    </div>
                </div>
            )
        })
        return(
            <div>
                {counter}
            </div>
        )
    }
}

export default ModA