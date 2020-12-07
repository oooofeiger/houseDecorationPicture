export default {
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/detail/detail',
    'pages/collectList/collectList',
    'pages/delList/delList',
    'pages/aboutUs/aboutUs'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color: '#bfbfbf',
    selectedColor:'#1296db',
    backgroundColor:'#fff',
    list:[
      {pagePath:'pages/index/index',text:'首页',iconPath:'./assets/index.png',selectedIconPath:'./assets/indexSelected.png'},
      {pagePath:'pages/home/home',text:'我的',iconPath:'./assets/home.png',selectedIconPath:'./assets/homeSelected.png'}
    ]
  }
}
