import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import cc from '@src/assets/cc.png';

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

  handleClickMoreButton(title){
    Taro.navigateTo({
      url:'/pages/detail/detail?title='+title
    })
  }

  render () {
    return (
      <View className='index'>
        <View className="container">
          <Text className='title'>经典风格</Text>
          <View className='imgCon'>
            <View className="img">
              <Image onClick={(e)=>this.handleClickImg(cc,e)} src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
          </View>
          <Button onClick={()=>{this.handleClickMoreButton('经典风格')}} className="button" plain type="primary">查看更多</Button>
        </View>

        <View className="container">
          <Text className='title'>西欧风格</Text>
          <View className='imgCon'>
            <View className="img">
              <Image onClick={(e)=>this.handleClickImg(cc,e)} src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
            </View>
          </View>
          <Button className="button" plain type="primary">查看更多</Button>
        </View>
        
        
      </View>
    )
  }
}