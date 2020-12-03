import React, { useState } from 'react';
import Taro,{ useShareAppMessage } from '@tarojs/taro';
import { View, Text, Image, Icon, Button } from '@tarojs/components';
import './index.less';
import rightArrow from '@src/assets/rightArrow.png';
import share from '@src/assets/share.jpg'
import { useEffect } from 'react';

export default function() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [name, setName] = useState(null);
  const [hasInfoFlag, setInfoFlag] = useState(avatarUrl?true:false);

  useEffect(()=>{
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  })

  Taro.getStorage({
    key: 'userInfo',
    success (res) {
      setAvatarUrl(res.data.avatarUrl);
      setName(res.data.nickName);
      setInfoFlag(true);
    },
    fail(e){
      console.log(e)
    }
  })

  
  function handleGetUserInfo(res){
    console.log(res);
    Taro.setStorage({
      key:"userInfo",
      data: res.detail.userInfo
    })
    setInfoFlag(true);
    setAvatarUrl(res.detail.userInfo.avatarUrl);
    setName(res.detail.userInfo.nickName);
  }

  function handleClickCollectList(target){
    switch (target) {
      case 'collect':
        Taro.navigateTo({
          url:'/pages/collectList/collectList'
        })
        break;
      case 'del':
        Taro.navigateTo({
          url:'/pages/delList/delList'
        })
        break;
      default:
        break;
    }
    
  }

  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '海量装修图，快进来看看吧',
      path: 'pages/index/index',
      imageUrl:share
    }
  })

    return (
      <View className='home'>
        <View className="top">
          <View className="avatar">
            <Image src={avatarUrl} mode="aspectFit"></Image>
          </View>
          <Text className="name">{name}</Text>
        </View>
        <View className="content">
          {
            hasInfoFlag ? "" : <Button open-type="getUserInfo" onGetuserinfo={handleGetUserInfo}></Button>
          }
          <View className="nav">
            <View className="textCon" onClick={()=>{handleClickCollectList('collect')}}>
              <Text className="text">我的收藏</Text>
              <Image src={rightArrow} mode="aspectFit"></Image>
            </View>
            <View className="textCon" onClick={()=>{handleClickCollectList('del')}}>
              <Text className="text">我的删除</Text>
              <Image src={rightArrow} mode="aspectFit"></Image>
            </View>
            <View className="textCon">
              <Button className="textButton" openType="share" hoverClass="none">转发给好友</Button>
              <Image src={rightArrow} mode="aspectFit"></Image>
            </View>
            <View className="textCon">
              <Text className="text">关于我们</Text>
              <Image src={rightArrow} mode="aspectFit"></Image>
            </View>
            
          </View>
        </View>
        
      </View>
    )
  
}

