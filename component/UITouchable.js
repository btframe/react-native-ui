/**
 * 点击组件
 */

import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';

export default class UITouchable extends Component {
    /**
     * 渲染组件
     */
    render() {
        if(Platform.OS=='android'){
            return (
                <TouchableNativeFeedback {...this.props}/>
            );
        }else if(Platform.OS=='ios'){
            return (
                <TouchableOpacity {...this.props} />
            );
        }
    }
}
