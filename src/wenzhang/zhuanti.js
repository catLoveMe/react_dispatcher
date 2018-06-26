/**
 * Created by Administrator on 2018/1/3.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Zhuanti extends  Component{
    constructor(){
        super();
        this.state={
            Zhuanticontent:[]
        }
    }
    componentWillMount(){
        fetch("/api/Zhuanti.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            console.log("Zhuanticontent:",data); //json数据
            this.setState({
                Zhuanticontent:data
            })

        })
    }
    render(){
        let Zhuanticontent = this.state.Zhuanticontent.map((item,index)=> {
          return(
              <Link to={"/zhuantidetail/"+item.id}  key={index}>
              <div className="zhuantidiv">
                  <div className="topdiv" >
                      <img src={item.imgsrc}/>
                      <div>
                          {item.title1}
                      </div>
                      <div>
                          {item.title2}
                      </div>

                  </div>
                  <p>
                      {item.title3}
                  </p>
                  <div className="numberview">
                      <div>
                          &#xe791;
                          <span>{item.page}</span>
                      </div>
                      <div>
                          &#xe819;
                          <span>{item.view}万</span>
                      </div>

                  </div>
              </div>
              </Link>
          )
        });

        return(
            <div>
                <div className="psname">
                    <a href="/Essay"><span>&#xe679;</span></a>
                    <h4>专题</h4>
                </div>
                {Zhuanticontent}


            </div>
        )
    }
}
export default Zhuanti;