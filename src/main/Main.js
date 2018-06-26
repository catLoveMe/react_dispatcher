/**
 * Created by Administrator on 2017/12/31.
 */
import React, {Component} from 'react';
import './Main.css'
import {NavLink} from 'react-router-dom'
import ShouYe from '../shouye/ShouYe'
import TownFair from '../townFair/townFair'
import TeaEval from '../File/TeaEvaluation'
import WenZhang from '../wenzhang/Essay'
import Quanzi from '../Quanzi/Quanziindex'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
class Main extends Component{
    render(){
        let name = localStorage.name;
        let logn = <a href="/login">&#xe78b;</a>;
        let mogo = <a href="/login">&#xe78b;</a>;
        if(name){
            logn = <a href="/person">&#xe78b;</a>;
            mogo = <a href="/mymes">&#xe7e2;</a>
        }
        let newhref = localStorage.newhref;
        let redit = <Redirect to="/z1"/>;
        if(newhref){
            redit = <Redirect to={newhref}/>
        }
        return(
            <Router>
            <div>
                <div className="zheader">
                    <div className="zmes">
                        {mogo}
                    </div>
                    <div className="zperson">
                        {logn}
                    </div>
                    <div className="zbox">
                        <input type="text" placeholder="&#xe65c; 搜索" className="zcheck"/>
                    </div>
                </div>
                <div className="zsession">
                    <Switch>
                        <Route path="/z1" component={ShouYe}/>
                        <Route path="/z2" component={TeaEval}/>
                        <Route path="/z3" component={TownFair}/>
                        <Route path="/z4" component={WenZhang}/>
                        <Route path="/z5" component={Quanzi}/>
                        {redit}
                    </Switch>
                </div>
                <div className="zbotm">
                    <div className="zmeau">
                        <NavLink to="/z1"><p>&#xe7d5;<br/><span>首页</span></p></NavLink>
                        <NavLink to="/z2"><p>&#xe815;<br/><span>茶评</span></p></NavLink>
                        <NavLink to="/z3"><p>&#xe676;<br/><span>市集</span></p></NavLink>
                        <NavLink to="/z4"><p>&#xe649;<br/><span>文章</span></p></NavLink>
                        <NavLink to="/z5"><p>&#xe7f5;<br/><span>圈子</span></p></NavLink>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

export default Main