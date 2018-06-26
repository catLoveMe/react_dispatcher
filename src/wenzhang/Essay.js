/**
 * Created by Administrator on 2018/1/1.
 */
import React, { Component } from 'react';
import '../Essay.css';
import { Carousel } from 'element-react';
import 'element-theme-default';
class Essay extends Component {
    constructor(){
        super();
        this.state={
            Essaycontent:[],
            lbinfo: [{"bt":"如果我被茶叶问答笑死了，请刻成我的墓志铭","imgsrc":"images/word1img1.jpg"},
                {"bt":"为什么你家里的垃圾茶堆积如山","imgsrc":"images/zhuanti1.jpg"},
                {"bt":"茶界罗生门：总有人非要给生普戴上绿帽茶","imgsrc":"images/cha3.jpg"}]
        }
    }
    componentWillMount(){
        //axios ajax
        //fetch
        fetch("/api/Essaycontent.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            console.log("Essaycontent:",data); //json数据
            this.setState({
                Essaycontent:data
            })

        })
    }
    render() {
        localStorage.newhref = "/z4";
        let Essaycontent = this.state.Essaycontent.map((item,index)=>{
            return(
                <a href={"/essaycontentdetail/"+item.id} key={index}>
                <div className="Essaycontent" >
                    <div className="img">
                        <img src={item.imgsrc}></img>
                    </div>
                    <div className="word">
                        <h3>
                            {item.title}
                        </h3>
                        <div className="zanview">
                            <div>
                                &#xe644;
                                <span>{item.zan}</span>
                            </div>
                            <div>
                                &#xe819;
                                <span>{item.view}万</span>
                            </div>

                        </div>
                    </div>
                </div>
                </a>
            )
        });


        return(
            <div className="Essay">
                <Carousel height="200px" className="lunbo">
                    {
                        this.state.lbinfo.map((item,index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className="navbox">
                                        <span className="lunbotitle">{item.bt}</span>
                                        <img src={item.imgsrc} alt=""/>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <div className="Essaynav">

                    <div>
                        <a href={"/zhuanti"} >
                        <div>
                            &#xe791;
                        </div>
                        <h3>
                            专题
                        </h3>
                        </a>
                    </div>

                    <div>
                        <a href={"/shiping"} >
                        <div>
                            &#xe7c8;
                        </div>
                        <h3>
                            视频
                        </h3>
                        </a>
                    </div>
                </div>
                {Essaycontent}
            </div>
            )
    }
}
export default Essay;
