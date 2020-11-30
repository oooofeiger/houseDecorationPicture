import React, { Component } from 'react'
import { View, Text, Image, CheckboxGroup, Checkbox } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import cc from '@src/assets/cc.png';
import imgUrl from '@src/imgUrl.js';

const PUSH_COUNT = 30;
export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataList: [],
      checkList: JSON.parse(JSON.stringify( imgUrl.checkList )),
      showCheckbox: false
    }
    this.handlePreview = this.handlePreview.bind(this);
    this.handleCheckboxCon = this.handleCheckboxCon.bind(this);
    this.handleLongClick = this.handleLongClick.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onLoad(){
    let that = this;
    Taro.getStorage({
      key:'collectList',
      success(res){
        that.setState({
          dataList: res.data
        })
      },
      fail(){
        
      }
    })
    
  }

  // onReachBottom(){
  //   console.log('onReachBottom');
  //   this.setState((state)=>({
  //     dataList: state.dataList.concat(new Array(PUSH_COUNT).fill(0))
  //   }))
  // }

  handlePreview(){
    Taro.previewImage({
      current: cc, // 当前显示图片的http链接
      urls: [cc] // 需要预览的图片http链接列表
    })
  }

  handleCheckboxCon(i,code){
    let { checkList } = this.state;
    let index = checkList[code].indexOf(i);
    if(index<0){
      checkList[code].push(i)
    }else{
      checkList[code].splice(index,1)
    }
    console.log(checkList,'selected')
    this.setState({
      checkList
    })
    
  }

  handleLongClick(){
    this.setState((state)=>({
      showCheckbox: !state.showCheckbox
    }))
  }

  handleDel(){
    let { checkList, dataList } = this.state;
    let that = this;
    Taro.getStorage({
      key:'collectList',
      success(res){
        console.log(res);
        
        Taro.showToast({
          title: '已删除',
          icon: 'success',
          duration: 2000
        })
        dataList.forEach(element => {
          element.arr = element.arr.filter((v,i)=>{
            return checkList[element.code].indexOf(v)<0
          })
        });
        that.setState({
          showCheckbox: false,
          dataList
        })
        Taro.setStorage({
          key: 'collectList',
          data: dataList,
          success(){
            that.setState({
              checkList:JSON.parse(JSON.stringify( imgUrl.checkList ))
            })
          }
        })
      }
    })
  }

  handleCancel(){
    console.log(imgUrl.checkList,'imgUrl.checkList')
    this.setState({
      showCheckbox: false,
      checkList:JSON.parse(JSON.stringify( imgUrl.checkList ))
    })
  }

  render () {
    let { dataList, checkList, showCheckbox } = this.state;
    return (
      <View className='index'>
        {
          dataList.map((value,i)=>{
            return (
              <View className="container">
                <Text className='title'>{value.title}</Text>
                <CheckboxGroup>
                <View className='imgCon' onLongpress={this.handleLongClick}>
                  {
                    value.arr.map((v,i)=>{
                      return (
                        <View key={v} className="img">
                          <Image onClick={this.handlePreview} src={imgUrl[value.code]+v+'.jpg'} mode="aspectFill"></Image>
                          {
                            showCheckbox ? <View className="checkboxCon" onClick={this.handleCheckboxCon.bind(this,v,value.code)}>
                              <Checkbox checked={checkList[value.code].indexOf(v)>-1} className="checkbox"></Checkbox>
                            </View> : null
                          }
                          
                        </View>
                      )
                    })
                  }
                </View>
                </CheckboxGroup>
              </View>
            )
          })
        }
        
        {
          showCheckbox?<View className="optionList">
          <Text className="del" onClick={this.handleDel}>删除</Text>
          <Text className="cancel" onClick={this.handleCancel}>取消</Text>
        </View>:null}
      </View>
    )
  }
}

