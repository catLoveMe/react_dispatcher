/**
 * Created by Administrator on 2018/1/4.
 */
import React, { Component } from 'react';
import '../quanzi.css';

class Quanziindex extends Component {
    constructor() {
        super();
        this.state = {
            quanzicontent: [],
        }
    }
        componentWillMount() {
            fetch("/api/quanzi.json").then(resp => {
                return resp.json()
            }).then(data => {
                console.log("quanzicontent:", data); //json数据
                this.setState({
                    quanzicontent: data
                })
            })
        }

        render() {
            localStorage.newhref = "/z5";
            let quanzicontent = this.state.quanzicontent.map((item, index) => {
                return (
                    <div className="quanzidetail" key={index}>
                        <img src={item.imgsrc}/>
                        <h3>{item.title}</h3>
                        <h5>关注:{item.guanzhu}</h5>
                        <h5>话题:{item.huati}</h5>
                    </div>
                )
            })
            return (
                <div className="quanzi">
                    <img src="../../images/quanziheader.jpg" className="quanziheader"/>
                    <hr/>
                    <div className="quanziconntent">
                        {quanzicontent}
                    </div>
                </div>
            )
        }
}
export default Quanziindex