import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import imgUrl from '@src/imgUrl.js';

const DISPLAY_NUM = 4;
export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { 
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