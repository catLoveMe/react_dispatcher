/**
 * Created by Administrator on 2018/1/3.
 */
import React, { Component } from 'react';

class Shiping extends  Component{
    videoplay(){
        var video = document.getElementsByClassName("video");
        var startvideo = document.getElementsByClassName("startvideo");
        for(let i=0;i<video.length;i++){
            startvideo[i].onclick=function () {
                console.log("start");
                if(video[i].paused){
                    video[i].play();
                    startvideo[i].style.display = "none";
                }
            };
           video[i].onclick=function () {
                if(!video[i].paused){
                    video[i].pause();
                    startvideo[i].style.display = "block";
                }
            }
        }
    }
    constructor(){
        super();
        this.state={
            Shipingdivcontent:[]
        }
    }
    componentWillMount() {
        fetch("/api/Shiping.json").then(resp => {
            return resp.json()
        }).then(data => {
            console.log("Shipingdivcontent:", data); //json数据
            this.setState({
                Shipingdivcontent: data
            })
        })
    }


    render(){
        // let  =
        let Shipingdivcontent = this.state.Shipingdivcontent.map((item,index)=> {
            return (
                <div className="Shipingdiv" key={index}>
                    <div className="videodiv">
                        <video src={item.videosrc} className="video" >
                        </video>
                        <div className="startvideo" onClick={this.videoplay}>
                            &#xe7c7;
                        </div>
                    </div>
                    <p>
                        {item.title1}
                    </p>
                    <div className="zanview2">
                        <div>
                            &#xe64c;
                            <span>收藏</span>
                        </div>
                        <div>
                            &#xe644;
                            <span>{item.zan}</span>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                <div className="psname">
                    <a href="/Essay"><span>&#xe679;</span></a>
                    <h4>视频</h4>
                </div>
                {Shipingdivcontent}
            </div>
        )
    }
    
}
export default Shiping;


