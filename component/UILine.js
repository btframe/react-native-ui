/**
 * 行组件
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch
} from 'react-native';
import {images,utils,UITouchable} from '../react-native-ui';

export default class UILine extends Component {
    /**
     * 定义组件的props属性
     */
    static propsTypes={
        height:React.PropTypes.number.isRequired,   //行高
        border:React.PropTypes.bool.isRequired,     //是否有边框
        next:React.PropTypes.bool.isRequired,       //是否右边显示可点击
        bool:React.PropTypes.bool.isRequired,       //是否显示switch组件
        switchValue:React.PropTypes.bool.isRequired,//switch值
        disabled:React.PropTypes.bool.isRequired,   //switch是否禁用
        lineStyle:React.PropTypes.object,           //行样式
        leftStyle:React.PropTypes.object,           //左边样式
        centerStyle:React.PropTypes.object,         //中间样式
        title:React.PropTypes.string,               //标题
        desc:React.PropTypes.string,                //描述
        icon:React.PropTypes.object,                //图标
        onValueChange:React.PropTypes.func          //Switch改变事件
    }
    /**
     * 定义组件props默认值
     */
    static get defaultProps(){
        return {
            height:48,
            border:true,
            next:false,
            bool:false,
            switchValue:false,
            disabled:false
        }
    }
    /**
     * 渲染组件
     */
    render() {
        const {onPress} = this.props;
        if(onPress){
            return (
                <UITouchable onPress={onPress}>
                    {this._render()}
                </UITouchable>
            );
           
        }else{
            return this._render();
        }
    }
    _render(){
        const {
            height,lineStyle,leftStyle,centerStyle,
            border,title,desc,next,icon,bool,onValueChange,
            switchValue,disabled,render
        } =this.props;
        if(render){
            return render(this.props);
        }else{
            return (
                <View style={[styles.uiline,lineStyle,{height:height}]}>
                    {icon?
                        <View style={[styles.uiline_left,leftStyle]}>
                            <Image style={[styles.uiline_icon,icon.style]} source={icon.source}/>
                        </View>:null
                    }
                    <View style={[styles.uiline_right,centerStyle,!border?{borderBottomWidth:0}:null]}>
                        <View style={[styles.uiline_content]}>
                            {title?
                                <Text style={[styles.uiline_title]}>{title}</Text>:null
                            }
                            {desc?
                                <Text style={[styles.uiline_desc]}>{desc}</Text>:null
                            }
                        </View>
                        <View style={[styles.uiline_operate]}>
                            {next?
                                <Image style={[styles.uiline_next]} source={images.right}/>:null
                            }
                            {bool?
                                <Switch disabled={disabled} value={switchValue} onValueChange={onValueChange}/>:null
                            }
                        </View>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    uiline: {
        flexDirection:'row'
    },
    uiline_left:{
        minWidth:48,
        alignItems:"center",
        justifyContent:'center'
    },
    uiline_right:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ededed'
    },
    uiline_content:{
        flex:1,
        justifyContent:'center'
    },
    uiline_operate:{
        minWidth:48,
        alignItems:"center",
        justifyContent:'center'
    },
    uiline_title:{
        fontSize:14,
        color:'#333333'
    },
    uiline_desc:{
        fontSize:12,
        color:'#999999'
    },
    uiline_next:{
        width:16,
        height:16
    },
    uiline_icon:{
        width:24,
        height:24
    }
});
