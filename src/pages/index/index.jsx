import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import cc from '@src/assets/cc.png';
import imgUrl from '@src/imgUrl.js';

const DISPLAY_NUM = 4;
export default class Index extends Component {
  handleClickImg(cc,e){
    console.log(e,cc)
  }
  componentWillMount () { }

  componentDidMount () { 
    // Taro.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userInfo']) {
    //       Taro.authorize({
    //         scope: 'scope.userInfo',
    //         success () {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           Taro.getUserInfo({
    //             success:function(res){
    //               console.log(res,'userInfo')
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    Taro.getStorage({
      key:'collectList',
      success(res){
        console.log(res)
      },
      fail(){
        Taro.setStorage({
          key: "collectList",
          data: []
        })
      }
    })

    Taro.getStorage({
      key:'delList',
      success(res){
        console.log(res)
      },
      fail(){
        Taro.setStorage({
          key: "delList",
          data: []
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClickMoreButton(title,code){
    Taro.navigateTo({
      url:'/pages/detail/detail?title='+title+'&code='+code
    })
  }

  render () {
    return (
      <View className='index'>
        <View className="container">
          <Text className='title'>二居室</Text>
          <View className='imgCon'>
            {
              new Array(DISPLAY_NUM).fill(0).map((v,i)=>{
                return (
                  <View className="img">
                    <Image onClick={(e)=>this.handleClickImg(cc,e)} src={imgUrl.twoBedroom+i+'.jpg'} mode="aspectFill"></Image>
                  </View>
                )
              })
            }
            <Button onClick={()=>{this.handleClickMoreButton('二居室','twoBedroom')}} className="button" plain type="primary">查看更多</Button>
          </View>
        </View>    
        <View className="container">
          <Text className='title'>三居室</Text>
          <View className='imgCon'>
          {
              new Array(DISPLAY_NUM).fill(0).map((v,i)=>{
                return (
                  <View className="img">
                    <Image onClick={(e)=>this.handleClickImg(cc,e)} src={imgUrl.threeBedroom+i+'.jpg'} mode="aspectFill"></Image>
                  </View>
                )
              })
            }
            <Button onClick={()=>{this.handleClickMoreButton('三居室','threeBedroom')}} className="button" plain type="primary">查看更多</Button>
          </View>
        </View>
        
      </View>
    )
  }
}