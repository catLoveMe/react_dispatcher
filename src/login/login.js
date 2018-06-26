import React,{Component} from 'react'
import './loginCss.css'
import 'whatwg-fetch'
class Login extends Component{
    constructor(){
        super();
        this.state={
            isToggle:0,
            placeholder:"",
            p_placeholder:""
        }
    }
    componentWillMount(){
        fetch("/api/loginMess.json").then(resp=>{
            return resp.json()
        }).then(data=>{
            localStorage.user=JSON.stringify(data);
        })

    }
    togglePanel(){
        var that = this;
        if(this.state.isToggle=="0"){
            that.setState({
                isToggle:1
            })
        }else {
            that.setState({
                isToggle:0
        })
        }
    }
    checkLogin(){
            let recode = JSON.parse(localStorage.user).find(selfitem=>this.refs.username.value==selfitem.username);
            if(recode){
                let repass = JSON.parse(localStorage.user).find(selfitem=>this.refs.password.value==selfitem.password);
                if(repass){
                    console.log("success login");
                    localStorage.name=this.refs.username.value;
                    window.location.href='/person'
                }else {
                    console.log("pass error");
                }
            }else {
                console.log("no login_num");
            }
            this.refs.username.value="";
            this.refs.password.value="";
    }
    checkNum(){
            let check_num = JSON.parse(localStorage.user).find(selfitem=>this.refs.phone_num.value==selfitem.username)
            if(check_num){
                this.setState({
                    placeholder:'账号已存在'
                })
            }else {
                this.setState({
                    placeholder:''
                })
            }
    }
    checkPass(){
        if(this.refs.rePassword.value==this.refs.surePassword.value){
            this.setState({
                p_placeholder:""
            })
        }else {
            this.setState({
                p_placeholder:"两次输入的密码不同"
            })
        }

    }
    register(){
        this.checkNum();
        this.checkPass();
        let userArr = JSON.parse(localStorage.user);
        console.log(userArr,"userArr");
        userArr.push({"username":this.refs.phone_num.value,"password":this.refs.rePassword.value,"user_login":this.refs.phone_num.value});
        localStorage.user=JSON.stringify(userArr);
        console.log(localStorage.user);
        this.refs.phone_num.value="";
        this.refs.rePassword.value="";
        this.refs.surePassword.value="";
    }
    render(){
        return(
            <div className="fontdd">
                {/*<h1>登录</h1>*/}
                <div className="head">
                    <ul>
                        <li className="logo" >
                            <img src="image/logo-tu.png" alt=""/>
                        </li>
                        <li>
                            <img src="image/logo-word.png" alt=""/>
                        </li>
                    </ul>
                </div>
                    {/*面板*/}
                    <div className="panel">
                        <p className="nav">
                            <span onClick={this.togglePanel.bind(this)}  className={this.state.isToggle == 0 ? 'active' : ''}>账号登录</span>
                            <span onClick={this.togglePanel.bind(this)} className={this.state.isToggle == 1 ? 'active' : ''}>注册账号</span>
                        </p>
                        <div className="login_num" className={this.state.isToggle == 0 ? '' : 'active_panel'}>
                           <div className="login_num_list">
                               <span>&#xe736;</span>
                               <input type="text" placeholder="请输入登录名" ref="username"/>
                           </div>
                            <div className="login_num_list">
                                <span>&#xe6c0;</span>
                                <span className="forgetPassWord">忘记密码?</span>
                                <input type="password" placeholder="请输入登录密码" ref="password" onBlur={this.checkPass.bind(this)}/>
                            </div>
                            <div className="btn">
                                <button onClick={this.checkLogin.bind(this)}>立即登录</button>
                            </div>

                            <div className="otherMethod">
                                <div className="other_Method">
                                    <div className="hr_line">
                                    </div>
                                    <div>其他方式登录</div>
                                    <div className="hr_line">
                                    </div>
                                </div>
                                <div className="otherMethod_img">
                                    <div>
                                        <p>&#xe603;</p>
                                        <span>微信</span>
                                    </div>
                                    <div>
                                        <p>&#xe6b1;</p>
                                        <span>QQ</span>
                                    </div>
                                    <div>
                                        <p>&#xe604;</p>
                                        <span>微博</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login_phone"  className={this.state.isToggle == 1 ? '' : 'active_panel'}>
                            <div className="login_num_list">
                                <span>&#xe736;</span>
                                <span className="forgetPassWord">{this.state.placeholder}</span>
                                <input type="text" placeholder="请输入手机号码" ref="phone_num" onBlur={this.checkNum.bind(this)}/>
                            </div>
                            <div className="login_num_list">
                                <span>&#xe6d6;</span>
                                <input type="password" placeholder="请输入密码" ref="rePassword"/>
                            </div>
                            <div className="login_num_list">
                                <span>&#xe6c0;</span>
                                <span className="forgetPassWord">{this.state.p_placeholder}</span>
                                <input type="password" placeholder="确认密码" ref="surePassword" onBlur={this.checkPass.bind(this)}/>
                            </div>
                            <div className="btn">
                            <button onClick={this.register.bind(this)}>注册</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login