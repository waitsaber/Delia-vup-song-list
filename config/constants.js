let config = {
    Name: "蝶礼_Delia", // 主页名字
  
    BiliLiveRoomID: "24693792", // 直播间id
  
    NetEaseMusicId: "", // 网易云音乐id
    QQMusicId: "", // QQ音乐id
    Footer: "Github",
  
    Cursor: false, // 使用自定义光标图片
  
    LanguageCategories: ["日语", "英语", "粤语"], // 语言分类
    RemarkCategories: ["原创", "合唱","付费"], // 标签分类
  
    BannerTitle: "蝶礼_Delia", // banner 标题
  
    BannerContent: [
    ],
  
    // 自定义按钮 （可以复制生成更多）
    CustomButtons: [
      {
        link: "https://www.popibox.cn/u/zmpis7d4",
		    name: "匿名提问箱",
        image: "/assets/icon/pome.png",
      },
      // {
      //   link: "https://weibo.com/",
      //   name: "微博",
      //   image: "/assets/icon/weibo.png",
      // },
      /*{
        link: "https://twitter.com",
        name: "Twitter",
        image: "/assets/icon/th.png",
      },*/
    ],
};


module.exports = {
    config
}