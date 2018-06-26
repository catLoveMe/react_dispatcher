/**
 * Created by Administrator on 2018/1/2.
 */
import React, {Component} from 'react'
import './Person.css'
import { Upload,Message } from 'element-react';
import 'element-theme-default';
class Person extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'images/gtea.png',
        };
    }
    render(){
        const { imageUrl } = this.state;
        let name = localStorage.name;
        return(
            <div>
                <div className="psname">
                    <a href="/main"><span>&#xe679;</span></a>
                    <h4>个人信息</h4>
                </div>
                <div className="psmymes">
                    {/*<img src="images/gtea.png" alt="" className="psmyimg"/>*/}
                    <Upload
                        className="avatar-uploader pmgbox"
                        action="//jsonplaceholder.typicode.com/posts/"
                        showFileList={false}
                        onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
                        beforeUpload={file => this.beforeAvatarUpload(file)}
                    >
                        { imageUrl ? <img src={imageUrl} className="avatar psmyimg" /> : <i className="el-icon-plus avatar-uploader-icon"></i> }
                    </Upload>
                    <div className="psmyinfo">
                        <p>{name}</p>
                        <p><span>&#xe6c3;&nbsp;</span>用户</p>
                    </div>
                </div>
                <a href="/myself"><div className="psset">
                    <p><span>&#xe68a;</span><span>&#xe6a3;</span></p>
                    <p>设置</p>
                </div></a>
                <a href="/mytalking"><div className="psset">
                    <p><span>&#xe731;</span><span>&#xe6a3;</span></p>
                    <p>评论</p>
                </div></a>
                <a href="/teatalk"><div className="psset">
                    <p><span>&#xe815;</span><span>&#xe6a3;</span></p>
                    <p>茶评</p>
                </div></a>
                <a href="/myopinion"><div className="psset">
                    <p><span>&#xe6ff;</span><span>&#xe6a3;</span></p>
                    <p>意见</p>
                </div></a>
            </div>
        )
    }
    handleAvatarScucess(res, file) {
        this.setState({ imageUrl: URL.createObjectURL(file.raw) });
    }

    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            Message('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
            Message('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }
}

export default Person