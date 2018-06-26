import React,{Component} from 'react'
import './fairDetailCss.css'
class PanelMessage extends Component{
    render(){
        return(
        <ul className="panel_message_ul">
        <li>
        <span>厂名：</span>
        <span>云南西双版纳易武正山茶叶有限公司</span>
        </li>
        <li>
        <span>厂址：</span>
        <span>云南西双版纳易武</span>
        </li>
        <li>
        <span>配料表：</span>
        <span>云南大叶种晒青毛茶</span>
        </li>
        <li>
        <span>储藏方式：</span>
        <span>通风、阴凉、干燥、清洁、无异味、无污染处存放，避免阳光暴晒</span>
        </li>
        <li>
        <span>食品添加剂：</span>
        <span>无</span>
        </li>
        <li>
        <span>产品名称：</span>
        <span></span>
        </li>
        <li>
        <span>净含量：</span>
        <span>375g</span>
        </li>
        <li>
        <span>茶类：</span>
        <span>普洱</span>
        </li>
        </ul>
        )
    }
}
export default PanelMessage