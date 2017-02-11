/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TabBarIOS
} from 'react-native';







var cc = "不不不不可以";

var kk = "还是我";





var CTabBarDemo = React.createClass({
    getInitialState:function () {
        return {
            selectedTabBarItem:"第一页"
        }
    },
  render:function () {
    return (
        <View style={styles.container}>
            {/*头部的view*/}
            <View style={styles.headerViewStyle}>
                <Text style={{color:"white"}}>Tab选项卡切换</Text>
            </View>
            {/*页面最下面的切换栏*/}
            <TabBarIOS
                barTintColor="black"//设置颜色(背景)
                tintColor="orange"//修改选中颜色
            >
                {/*第一块*/}
               <TabBarIOS.Item
                   //如果添加systemIcon则title和icon无效
                   systemIcon="contacts"
                   //title="龙哥"//文字
                   //icon={}//设置图片
                   badge="3"//有几条
                   //当这个属性为真的时候切换到这个选项卡对应的页面
                   selected={this.state.selectedTabBarItem == "第一页"}
                   onPress={()=>{this.setState({
                       selectedTabBarItem:"第一页"
                   })}}
               >
                   <View style={[styles.commonViewStyle,{backgroundColor:"orange"}]}>
                       <Text>第一页</Text>
                   </View>
               </TabBarIOS.Item>
                   {/*第二块*/}
                   <TabBarIOS.Item
                       //如果添加systemIcon则title和icon无效
                       systemIcon="bookmarks"
                       selected={this.state.selectedTabBarItem == "第二页"}
                       onPress={()=>{this.setState({
                           selectedTabBarItem:"第二页"
                       })}}

                   >
                       <View style={[styles.commonViewStyle,{backgroundColor:"red"}]}>
                           <Text>第二页</Text>
                       </View>
                   </TabBarIOS.Item>
                {/*第三块*/}
                <TabBarIOS.Item
                    //如果添加systemIcon则title和icon无效
                    systemIcon="downloads"
                    selected={this.state.selectedTabBarItem == "第三页"}
                    onPress={()=>{this.setState({
                        selectedTabBarItem:"第三页"
                    })}}

                >
                    <View style={[styles.commonViewStyle,{backgroundColor:"cyan"}]}>
                        <Text>第三页</Text>
                    </View>
                </TabBarIOS.Item>
                {/*第四块*/}
                <TabBarIOS.Item
                    //如果添加systemIcon则title和icon无效
                    systemIcon="search"
                    selected={this.state.selectedTabBarItem == "第四页"}
                    onPress={()=>{this.setState({
                        selectedTabBarItem:"第四页"
                    })}}

                >
                    <View style={[styles.commonViewStyle,{backgroundColor:"pink"}]}>
                        <Text>第四页</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        </View>
        );

  },
});



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
    headerViewStyle:{
      height:64,
      backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",

    },
    commonViewStyle:{
      flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

});

AppRegistry.registerComponent('CTabBarDemo', () => CTabBarDemo);
