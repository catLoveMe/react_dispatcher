import React,{Component} from "react"
import './fairDetailCss.css'
import 'whatwg-fetch'
class PanelComment extends Component{
    constructor(){
        super();
        this.state={
            commentArr:[]
        }
    }
    componentWillMount(){
        console.log(this.props.index);
        fetch("/api/comment.json").then(resp=>{
            return resp.json();
        }).then(data=>{
            this.setState({
                commentArr:data[this.props.index]
            })
        })
    }
    render(){
        let commentList;
        if(this.state.commentArr.length>0){
            commentList= this.state.commentArr.map((item,index)=>{
                return (
                    <div className="panel_comment_reload"  key={index}>
                        <div className="panel_comment_reload_flex">
                            <div>
                                <img src={item.commentImgsrc} alt="" className="flex-img" />
                                <span>{item.commentName}</span>
                                <p>xingping</p>
                            </div>
                            <div>{item.time}</div>
                        </div>
                        <p className="comment_content">{item.comment_content}</p>
                        <p className="content_tea_num">净含量：{item.pro_content}</p>
                    </div>
                )
            })
        }
        return(
                <div>
                    {commentList}
                </div>
        )
    }
}
export  default PanelComment