/**
 * Created by Administrator on 2018/1/2.
 */
import React,{Component} from 'react'
class EssaycontentDetail extends Component{
    constructor(){
        super();
        this.state={
            detailmes:{}
        }
    }
    componentWillMount(){
        console.log("detail_id:",this.props.match.params.id);
        fetch("/api/Essaycontent.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            //获取到的数据
            console.log("datadetail:",data[this.props.match.params.id-1]);
            this.setState({
                // detailmes:data[this.props.match.params.id-1]
                detailmes:this.props.match.params.id==2?data[1]:data[0]
            })
        })
    }
    render(){
        if(this.props.match.params.id!=2){
            return(
                <div className="EssaycontentDetail">
                    <div className="psname">
                        <a href="/Essay"><span>&#xe679;</span></a>
                        <h4>文章详情</h4>
                    </div>
                    <h1>
                        { this.state.detailmes.titlemore}
                    </h1>
                    <div className="headercon">
                    <span>
                         { this.state.detailmes.author}
                    </span>
                        <span>
                         { this.state.detailmes.time}
                    </span>
                        <span>
                         阅读量：{ this.state.detailmes.time}万
                    </span>
                    </div>
                    <p>
                        { this.state.detailmes.p1}
                    </p>
                    <p>
                        { this.state.detailmes.p2}
                    </p>
                    <p>
                        { this.state.detailmes.p3}
                    </p>
                    <p>
                        { this.state.detailmes.p3}
                    </p>
                    <p>
                        { this.state.detailmes.p4}
                    </p>
                    <p>
                        { this.state.detailmes.p5}
                    </p>
                    <p>
                        { this.state.detailmes.p6}
                    </p>
                    <img src={this.state.detailmes.img1} alt="" />
                    <p>
                        { this.state.detailmes.p7}
                    </p>
                    <p>
                        { this.state.detailmes.p8}
                    </p>
                    <p>
                        { this.state.detailmes.p9}
                    </p>
                    <img src={this.state.detailmes.img2} alt="" className="Essay1foot"/>
                    <div className="pinglun">
                        评论
                    </div>
                </div>
            )
        }else{
            return(
                <div className="EssaycontentDetail">
                    <div className="psname">
                        <a href="/Essay"><span>&#xe679;</span></a>
                        <h4>文章详情</h4>
                    </div>
                    <h1>
                        { this.state.detailmes.titlemore}
                    </h1>
                    <div className="headercon">
                    <span>
                         { this.state.detailmes.author}
                    </span>
                        <span>
                         { this.state.detailmes.time}
                    </span>
                        <span>
                         阅读量：{ this.state.detailmes.time}万
                    </span>
                    </div>
                    <img src={this.state.detailmes.img1} alt="" />
                    <p>
                        <strong>{ this.state.detailmes.p1}</strong>
                    </p>
                    <p>
                        { this.state.detailmes.p2}
                    </p>
                    <p>
                        { this.state.detailmes.p3}
                    </p>
                    <p>
                        { this.state.detailmes.p3}
                    </p>
                    <p>
                        { this.state.detailmes.p4}
                    </p>
                    <p>
                        { this.state.detailmes.p5}
                    </p>
                    <p>
                        { this.state.detailmes.p6}
                    </p>
                    <img src={this.state.detailmes.img2} alt="" />
                    <p>
                        { this.state.detailmes.p7}
                    </p>
                    <p>
                        { this.state.detailmes.p8}
                    </p>
                    <img src={this.state.detailmes.img3} alt="" className="Essay2foot"/>
                    <div className="pinglun">
                        评论
                    </div>
                </div>

            )
        }

    }
}
export  default EssaycontentDetail