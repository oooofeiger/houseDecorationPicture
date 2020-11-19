import React, { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import cc from '@src/assets/cc.png';

export default class Index extends Component {
  handleClickImg(cc,e){
    console.log(e,cc)
  }
  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
          <Button className="button" plain type="primary">查看更多</Button>
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
