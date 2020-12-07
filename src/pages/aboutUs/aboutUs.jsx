import React from 'react';
import { View, Text, Image, CheckboxGroup, Checkbox } from '@tarojs/components';
import './index.less';
import bg from '@src/assets/aboutUs.jpg';

export default function(){

  return (
    <View className="bgCon">
      <Image src={bg} mode="aspectFill"></Image>
    </View>
  )
}

