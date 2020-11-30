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
      title:'',
      dataList: new Array(PUSH_COUNT).fill(0),
      checkList: [],
      showCheckbox: false,
      count:PUSH_COUNT,//当前触图片数量
    }
    this.handlePreview = this.handlePreview.bind(this);
    this.handleCheckboxCon = this.handleCheckboxCon.bind(this);
    this.handleLongClick = this.handleLongClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onLoad(options){
    console.log(options,'onShow')
    this.setState({
      title: options.title,
      code: options.code
    })
  }

  onReachBottom(){
    console.log('onReachBottom');
    this.setState((state)=>({
      dataList: state.dataList.concat(new Array(PUSH_COUNT).fill(0)),
      count: state.count + PUSH_COUNT
    }))
  }

  handlePreview(url){
    const { count, code } = this.state;
    let previewUrls = [];
    new Array(count).fill(0).map((v,i)=>{
      previewUrls.push(imgUrl[code]+i+'.jpg')
    })
    // wx.getImageInfo({
    //   src: url,
    //   success (res) {
        
    //   }
    // })

    Taro.previewImage({
      current: url, // 当前显示图片的http链接
      urls: previewUrls, // 需要预览的图片http链接列表
      success(){
        console.log('预览成功')
      },
      fail(e){
        console.log(e)
      }
    })
    
  }

  handleCheckboxCon(i){
    let { checkList } = this.state;
    let index = checkList.indexOf(i);
    if(index<0){
      this.setState(()=>{
        checkList.push(i);
        return {checkList}
      })
    }else{
      checkList.splice(index,1);
      this.setState(()=>({
        checkList: checkList
      }))
    }
  }

  handleLongClick(){
    this.setState((state)=>({
      showCheckbox: !state.showCheckbox
    }))
  }

  handleAdd(){
    let { checkList } = this.state;
    let that = this;
    Taro.getStorage({
      key:'collectList',
      success(res){
        console.log(res);
        that.setState({
          showCheckbox: false
        });
        Taro.showToast({
          title: '已收藏',
          icon: 'success',
          duration: 2000
        })
        Taro.setStorage({
          key: 'collectList',
          data: [...new Set(res.data.concat(checkList))],
          success(){
            that.setState({
              checkList:[]
            })
          }
        })
      }
    })
  }

  handleDel(){
    let { checkList, dataList } = this.state;
    let that = this;
    Taro.getStorage({
      key:'delList',
      success(res){
        console.log(res);
        let nowList = dataList.filter((v,i)=>{
          return checkList.indexOf(v)<0
        })
        that.setState({
          showCheckbox: false,
          dataList: nowList
        })
        Taro.showToast({
          title: '已删除',
          icon: 'success',
          duration: 2000
        })
        Taro.setStorage({
          key: 'delList',
          data: [...new Set(res.data.concat(checkList))],
          success(){
            that.setState({
              checkList:[]
            })
          }
        })
      }
    })
  }

  handleCancel(){
    this.setState({
      showCheckbox: false,
      checkList:[]
    })
  }

  render () {
    let { title, dataList, checkList, showCheckbox, code } = this.state;
    return (
      <View className='index'>
        <View className="container">
          <Text className='title'>{title}</Text>
          <CheckboxGroup>
          <View className='imgCon' onLongpress={this.handleLongClick}>
            {
              dataList.map((v,i)=>{
                return (
                  <View key={i} className="img">
                    <Image onClick={this.handlePreview.bind(this,imgUrl[code]+i+'.jpg')} src={imgUrl[code]+i+'.jpg'} mode="aspectFill"></Image>
                    {
                      showCheckbox ? <View className="checkboxCon" onClick={this.handleCheckboxCon.bind(this,i)}>
                        <Checkbox checked={checkList.indexOf(i)>-1} className="checkbox"></Checkbox>
                      </View> : null
                    }
                    
                  </View>
                )
              })
            }
          </View>
          </CheckboxGroup>
        </View>
        
        {
          showCheckbox?<View className="optionList">
          <Text className="add" onClick={this.handleAdd}>收藏</Text>
          <Text className="del" onClick={this.handleDel}>删除</Text>
          <Text className="cancel" onClick={this.handleCancel}>取消</Text>
        </View>:null}
      </View>
    )
  }
}

