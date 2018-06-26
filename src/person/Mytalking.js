/**
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import './Mytalking.css'
import TKmoda from './TKmoda'
import TKmodb from './Tkmodb'
import {NavLink} from 'react-router-dom'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
class Mytalking extends Component{
    render(){
        return(
            <Router>
            <div>
                <div className="selfname">
                    <a href="/person"><span>&#xe679;</span></a>
                    <h4>我的评论</h4>
                </div>
                <div className="bttalk">
                    <NavLink to="/tkmoda"><p>我的评论</p></NavLink>
                    <NavLink to="/tkmodb"><p>回复我的</p></NavLink>
                </div>
                <Switch>
                    <Route path="/tkmoda" component={TKmoda}/>
                    <Route path="/tkmodb" component={TKmodb}/>
                    <Redirect to="/tkmoda"/>
                </Switch>
            </div>
            </Router>
        )
    }
}

export default Mytalking