import React,{Component} from 'react'
import FairList from './fairList'
import './townFairCss.css'

import 'element-theme-default';

class TownFair extends Component{
    constructor(props){
        super(props);
        this.state={
            commentData:[],
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        };

    }
    componentWillMount(){
        fetch("/api/fairCom.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            this.setState({
                commentData:data
            })
        })
    }

    render(){
        localStorage.newhref = "/z3";
        let fairArr = this.state.commentData.map((item,index)=>{
            return (
             <a href={"/fairdatail/"+index} key={index}>
                <FairList  imgsrc={item.imgsrc} title_blod={item.title_blod} title={item.title} price={item.price} saleNum={item.saleNum}/>
            </a>
            )
        })
        return(
            <div>
                <div className="content">
                    <div className="fair_head">
                        <div className=" mytown">集市</div>
                    </div>
                    <div className="fair_select">

                    </div>
                    {fairArr}
                </div>

            </div>
        )
    }
}
export  default TownFair