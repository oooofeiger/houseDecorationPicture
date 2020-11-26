import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import cc from '@src/assets/cc.png';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:''
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onLoad(options){
    console.log(options,'onShow')
    this.setState({
      title: options.title
    })
  }

  render () {
    const { title } = this.state;
    return (
      <View className='index'>
        <View className="container">
          <Text className='title'>{title}</Text>
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

