import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
* props:
* type: 1.显示红点数 2.只显示一个红点，不显示数量
* mainStyle: 总视图样式
* width: 红点宽度
* text: 红点数
* 
* func:
* evaluateView: 赋值当前视图对象
*
* export func:
* modifyCount(count): 修改红点数
* getCount: 获取当前真实红点数
* */
export default class RedDot extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }
    
    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        let type = this.props.type ? this.props.type : 1;
        if (type == 2) {
            this.state = {
                type: type
            };
        } else {
            //以宽高12为基准，分三种情况 1,11,99+
            let scale = 1;
            if (this.props.width) scale = this.props.width/12;

            let count = parseInt(this.props.text ? this.props.text : '');
            this.state = {
                type: type,
                realCount: isNaN(count) ? 0 : count,
                height: this.props.width ? this.props.width : 12,
                one: 12*scale,
                two: 16*scale,
                three: 20*scale
            };
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 修改红点数
    * */
    modifyCount = (count) => {
        const { type } = this.state;
        if (type == 1) {
            this.setState({
                realCount: parseInt(count)
            });
        }
    }

    /*
    * 获取当前真实红点数
    * */
    getCount = () => {
        return this.state.realCount;
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    render() {
        const { type, realCount, one, two, three, height } = this.state;
        if ( type == 1 && realCount <= 0 ) return null;

        let width = 0;
        let radius = 0;

        //总视图样式
        let mainStyles = [styles.MainView];
        if (type == 2) {
            width = 8;
            radius = 4;
            mainStyles.push({
                width: width,
                height: width,
                borderRadius: radius,
                right: -width/2,
                top: -width/2
            });
            if (this.props.mainStyle) mainStyles.push(this.props.mainStyle);
            return (<View style={mainStyles}></View>);
        } else {
            if (realCount > 0 && realCount < 10) {
                width = one;
                radius = width/2;
            } else if (realCount >= 10 && realCount <= 99) {
                width = two;
                radius = 6;
            } else {
                width = three;
                radius = 6;
            }
            mainStyles.push({
                width: width,
                height: height,
                borderRadius: radius,
                right: -width/2,
                top: -width/2
            });
            if (this.props.mainStyle) mainStyles.push(this.props.mainStyle);
            return (
                <View style={mainStyles}>
                    <Text style={[styles.TextView]}>{realCount > 99 ? '99+' : realCount}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    MainView: {
        backgroundColor: '#FE3113',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextView: {
        fontSize: 9,
        color: 'white',
        fontFamily: 'PingFangSC-Semibold'
    }
})