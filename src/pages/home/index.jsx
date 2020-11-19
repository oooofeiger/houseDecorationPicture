import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import cc from '@src/assets/cc.png';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="container">
          <Text>经典风格</Text>
          <View className='imgCon'>
            
            <View className="img">
              <Image src={cc} mode="aspectFit"></Image>
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
        </View>
        
        
      </View>
    )
  }
}
