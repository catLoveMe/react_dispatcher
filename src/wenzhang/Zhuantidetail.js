/**
 * Created by Administrator on 2018/1/3.
 */
import React,{Component} from 'react'

class Zhuantidetail extends Component{
    constructor(){
        super();
        this.state={
            detailmes:{}
        }
    }
    componentWillMount(){
        console.log("detail_id---:",this.props.match.params.id);
        fetch("/api/Zhuanti.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            //获取到的数据
            console.log("zhuantidetail:",data[this.props.match.params.id-1]);
            this.setState({
                // detailmes:data[this.props.match.params.id-1]
                detailmes:data[this.props.match.params.id-1]
            })
        })
    }

    render(){
        return(
            <div className="zhuantidetail">
                <div className="psname">
                    <a href="/Zhuanti"><span>&#xe679;</span></a>
                    <h4>{this.state.detailmes.title1}</h4>
                </div>
                <img src=  { this.state.detailmes.imgsrc} alt=""/>
                <p>
                    { this.state.detailmes.detailword}
                </p>
            </div>
        )
    }
}
export default Zhuantidetail