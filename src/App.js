import React, { Component } from 'react';
import './App.css';
import Main from './main/Main'
import Mymes from './mymes/Mymes'
import Xtmes from './mymes/Xtmes'
import Kfmes from './mymes/Kfmes'
import Person from './person/Person'
import Myself from './person/Myself'
import Mytalking from './person/Mytalking'
import Teatalk from './person/Teatalk'
import MyOpinion from './person/MyOpinion'
import Login from './login/login'
import FairDetil from './townFair/fairDatail'
import LongJing from "./File/LongJing"
import JinJunMei from "./File/JinJunMei"
import PuEr from "./File/PuEr"
import WuLong from "./File/WuLong"
import HuaCha from "./File/HuaCha"
import Zhuanti from "./wenzhang/zhuanti"
import Shiping from "./wenzhang/shiping"
import EasDtail from "./wenzhang/EssaycontentDetail"
import Ztdeatil from "./wenzhang/Zhuantidetail"
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/main" component={Main}/>
              <Route path="/mymes" component={Mymes}/>
              <Route path="/xtmes" component={Xtmes}/>
              <Route path="/kfmes" component={Kfmes}/>
              <Route path="/person" component={Person}/>
              <Route path="/myself" component={Myself}/>
              <Route path="/mytalking" component={Mytalking}/>
              <Route path="/teatalk" component={Teatalk}/>
              <Route path="/myopinion" component={MyOpinion}/>
              <Route path="/login" component={Login}/>
              <Route path="/longjing" component={LongJing}/>
              <Route path="/jinjunmei" component={JinJunMei}/>
              <Route path="/puer" component={PuEr}/>
              <Route path="/wulong" component={WuLong}/>
              <Route path="/huacha" component={HuaCha}/>
              <Route path="/fairdatail/:index" component={FairDetil}/>
              <Route path="/essaycontentdetail/:id" component={EasDtail}/>
              <Route path="/zhuantidetail/:id" component={Ztdeatil}/>
              <Route path="/zhuanti" component={Zhuanti}/>
              <Route path="/shiping" component={Shiping}/>
              <Redirect to="/main"/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
