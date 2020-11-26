import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Icon, Button } from '@tarojs/components';
import './index.less';
import rightArrow from '@src/assets/rightArrow.png';

export default function() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [name, setName] = useState(null);
  const [hasInfoFlag, setInfoFlag] = useState(avatarUrl?true:false);

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
            <View className="textCon">
              <Text className="text">我的收藏</Text>
              <Image src={rightArrow} mode="aspectFit"></Image>
            </View>
            <View className="textCon">
              <Text className="text">我的删除</Text>
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
