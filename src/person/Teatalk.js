/**
 * Created by Administrator on 2018/1/3.
 */
/**
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import './Mytalking.css'
import TTmoda from './TTmoda'
import TTmodb from './TTmodb'
import {NavLink} from 'react-router-dom'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
class Teatalk extends Component{
    render(){
        return(
            <Router>
                <div>
                    <div className="selfname">
                        <a href="/person"><span>&#xe679;</span></a>
                        <h4>我的茶评</h4>
                    </div>
                    <div className="bttalk">
                        <NavLink to="/ttmoda"><p>已发布</p></NavLink>
                        <NavLink to="/ttmodb"><p>待审核</p></NavLink>
                    </div>
                    <Switch>
                        <Route path="/ttmoda" component={TTmoda}/>
                        <Route path="/ttmodb" component={TTmodb}/>
                        <Redirect to="/ttmoda"/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Teatalk