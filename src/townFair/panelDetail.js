import React,{Component} from 'react'
import './fairDetailCss.css'
import 'whatwg-fetch'
class PanelDetail extends Component{
    constructor(){
        super();
        this.state={
            panelDetail:[]
        }
    }
    componentWillMount(){
        console.log(this.props.index,"1221");
        fetch("/api/detail.json").then(resp=>{
            return resp.json();
        }).then(data=>{
            this.setState({
                panelDetail:data[this.props.index]
            })
        })
    }
    render(){
        let panelDetailList;
        // if(this.state.panelDetail.length>0){
            panelDetailList=this.state.panelDetail.map((item,index)=>{
                return(
                    <div key={index}>
                        <div className="panel_detail_imgBig">
                            <img className="panel_detail_imgBig" src={item.pro_big_imgsrc} alt=""/>
                        </div>
                        <div className="panel_detail_reload">
                            <p>{item.firstWord}</p>
                            <img src={item.pro_mid_imgsrc} alt=""/>
                            <p>{item.lastWord}</p>
                        </div>
                    </div>
                )
            })
        // }
        return(
            <div>
                {panelDetailList}
            </div>
        )
    }
}
export  default PanelDetail