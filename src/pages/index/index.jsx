import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import imgUrl from '@src/imgUrl.js';
import share from '@src/assets/share.jpg';

const DISPLAY_NUM = 4;
export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { 
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
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

  handleClickImg(url,imgUrl){
    let previewUrls = [];
    new Array(DISPLAY_NUM).fill(0).map((v,i)=>{
      previewUrls.push(imgUrl+i+'.jpg')
    });
    previewUrls = previewUrls.slice(previewUrls.indexOf(url),previewUrls.length);
    Taro.previewImage({
      current: url, 
      urls: previewUrls, 
      success(){
        console.log('预览成功')
      },
      fail(e){
        console.log(e)
      }
    })
  }

  onShareAppMessage(res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '海量装修图，快进来看看吧',
      path: 'pages/index/index',
      imageUrl:share
    }
  }



  render () {
    return (
      <View className='index'>
        {
          imgUrl.dataList.map((value)=>{
            return <View className="container">
                      <Text className='title'>{value.title}</Text>
                      <View className='imgCon'>
                        {
                          new Array(DISPLAY_NUM).fill(0).map((v,i)=>{
                            return (
                              <View className="img">
                                <Image onClick={(e)=>this.handleClickImg(imgUrl[value.code]+i+'.jpg',imgUrl[value.code])} src={imgUrl[value.code]+i+'.jpg'} mode="aspectFill"></Image>
                              </View>
                            )
                          })
                        }
                        <Button onClick={()=>{this.handleClickMoreButton(value.title,value.code)}} className="button" plain type="primary">查看更多</Button>
                      </View>
                    </View>
                  })
        }
      </View>
    )
  }
}