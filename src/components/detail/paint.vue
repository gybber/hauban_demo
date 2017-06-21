<template lang="html">
 <div id="mobile_board_page" class="mobile-board-page">
     <div id="mobile_board_page" class="mobile-board-page">
        <div id="board_card" class="board-card">
            <a href="#" class="avatar">
                <img src="//hbimg.b0.upaiyun.com/ec09f1d236a46c04ded96611e89c2521d42abca25aa4-xHgJBy_sq75sf" alt="">
            </a>
            <div class="board-name">一画一世界</div>
            <div class="board-from">来自: 梦里花落</div>
            <a href="#"  class="follow btn">
                <span class="text">关注</span>
            </a>
            <a href="#" id="more_btn"  class="more-btn btn-with-icon btn"  onclick="return false;">
                <i class="fa fa-ellipsis-h" aria-hidden="true" @click ="pulldown" ></i>
            </a>
        </div>
    <div id="board_inner" class="board-inner clearfix" style="display: block;" v-show="ispulldown">
        <div class="triangle">
            </div>
            <a id="share_btn" href="#" onclick="return false;" class="btn-with-icon btn">
               <i class="fa fa-share-alt"></i>
                <span class="text"> 分享</span>
            </a>
            <a data-id="24745196" href="#" onclick="return false;" class="like likeBtn btn-with-icon btn">
               <i  class="fa fa-heart-o"></i>
                <span class="text"> 98喜欢</span>
            </a>
            <div id="social_popout" style="display: none;">
                <div id="social_overlay" class="overlay" style="display: none;">
                </div>
                <div id="social" class="modal social" style="display: none;">
                    <i class="close"></i>
                    <div class="modal-header">
                        <p>分享到：</p>
                        </div>
                        <div class="modal-body">
                            <a id="social_sina" data-to="weibo" title="新浪微博" class="social-item">
                                <span></span>
                                <b>新浪微博</b>
                            </a>
                            <a id="social_qqzone" data-to="qzone" title="QQ空间" class="social-item">
                                <span></span>
                                <b>QQ空间</b>
                            </a>
                            <a id="social_qqwb" data-to="tqq" title="腾讯微博" class="social-item">
                                <span></span>
                                <b>腾讯微博</b>
                                </a>
                            <a id="social_qq" data-to="qfriends" title="QQ好友" class="social-item">
                                <span></span>
                                <b>QQ好友</b>
                            </a>
                            <a id="social_douban" data-to="douban" title="豆瓣" class="social-item">
                                <span></span>
                                <b>豆瓣</b>
                            </a><a id="social_renren" data-to="renren" title="人人网" class="social-item">
                                <span></span>
                                <b>人人网</b>
                            </a>
                    </div>
            </div>
        </div>
    </div>
        <div class="board-tab clearfix">
            <a href="#" class="tab pins active">604采集</a>
            <a href="#" class="tab follows">被915人关注</a>
        </div>
        <div class="screen" style="display: flex;flex-direction: row;width:310px;margin: 10px auto;">
        <div class="waterfall new-explore">
            <div class="waterfall_column">
                <div data-seq="571236520" class="pin-item left"  style="margin:0 15px 12px 4px; display: block;" v-for="item in rest" >
                    <a href="#" class="main-img ">
                    <img :src="item.src" alt="谷宝华采集到卧室设计" :width="item.width" :height="item.height" data-baiduimageplus-ignore="1"/>
                    </a>
                    <div class="info">
                        <div class="description">{{item.desc}}
                        </div>
                        <div class="meta">
                            <span class="repins">{{item.repins}}
                                <i class="fa fa-share-alt"></i>
                            </span>
                            <span class="likes">{{item.likes}}
                                <i @click="onlike" class="fa fa-heart-o"></i>
                                </span>
                        </div>
                    </div>
                    <div class="author">
                        <a href="/gubaohua/" title="谷宝华" class="img x">
                        <img :src="item.src2" 
                        data-baiduimageplus-ignore="1" class="avt"></a>
                        <div class="text">
                            <div class="inner">
                                <a href="/gubaohua/" class="name">{{item.nam}}</a>
                                <span class="to">采集到</span>
                                <a href="/boards/27690767/">卧室设计
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="waterfall new-explore right"  >
            <div class="waterfall_column">
            <div data-seq="571236520" class="pin-item left"  style="margin:0 40px 12px 4px; display: block; " v-for="item in rest1">
                <a href="/pins/571236520/" class="main-img " >
               <img :src="item.src1" alt="谷宝华采集到卧室设计" :width="item.width1" :height="item.height1" data-baiduimageplus-ignore="1"/>
                    </a>
                    <div class="info">
                        <div class="description">{{item.desc1}}
                        </div>
                        <div class="meta">
                            <span class="repins">{{item.repins1}}
                                <i class="fa fa-share-alt"></i>
                            </span>
                            <span class="likes">{{item.likes1}}
                                <i @click="onlike" class="fa fa-heart-o"></i>
                                </span>
                        </div>
                    </div>
                    <div class="author">
                        <a href="/gubaohua/" title="谷宝华" class="img x">
                        <img :src="item.origin" 
                        data-baiduimageplus-ignore="1" class="avt"></a>
                        <div class="text">
                            <div class="inner">
                                <a href="/gubaohua/" class="name">{{item.nam1}}</a>
                                <span class="to">采集到</span>
                                <a href="/boards/27690767/">卧室设计
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
     </div>
 </div>
</template>

<script>
import  restroom from '../../../restroom.json'
export default {
    data () {
        return {
            rest: restroom.tips,
            rest1: restroom.project,
            count: null,
            ispulldown: false
        }
    },
 methods : {
        onlike() {
            this.flag = !this.flag
            if (this.flag) {
                this.count++
            } else {
                this.count--
            }
            console.log(this.count)
        },
        pulldown : function() {
            this.ispulldown = !this.ispulldown
            console.log(this.ispulldown)
        }
    }
}
</script>

<style lang="css">
.mobile-board-page .board-card {
    padding: 14px 10px;
    height: 40px;
    position: relative;
}
.mobile-board-page .board-card .board-name {
    color: #444;
    font-size: 18px;
    margin-bottom: 8px;
    max-width: 170px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 18px;
}
.mobile-board-page .board-card .avatar {
    margin-right: 10px;
    display: block;
    float: left;
    width: 40px;
    height: 40px;
}
.mobile-board-page .board-card .avatar img {
    display: block;
    width: 40px;
    height: 40px;
}
.mobile-board-page .board-card .board-from {
    color: #999;
    font-size: 12px;
}
.btn {
    display: inline-block;
    line-height: 1;
    border-radius: 6px;
    font-size: 14px;
    padding: 0 12px;
    height: 28px;
    line-height: 28px;
    /*background: #fff;*/
    background: linear-gradient( #FAFAFA, #F2F2F2);
    box-shadow: inset 0 1px 0 white, 0 1px 0 rgba(255,255,255,.3);
    cursor: pointer;
    text-decoration: none;
    color: #444;
    white-space: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    text-align: center;
    font-weight: 700;
}
.mobile-board-page .board-card #more_btn {
    position: absolute;
    right: 10px;
    top: 22px;
    padding: 0 8px;
}
.mobile-board-page .board-card .follow, .mobile-board-page .board-card .unfollow {
    position: absolute;
    right: 45px;
    top: 22px;
}
.btn i {
    display: inline-block;
    width: 12px;
    height: 14px;
    /*background: url(http://huaban.com/img/mobile/pin_action_icons.png?new.png) 0 0 no-repeat;*/
    vertical-align: middle;
    margin-right: 2px;
}
.backgroundsize .btn i {
    /*background-image: url(http://huaban.com/img/mobile/2x/pin_action_icons.png?new.png);*/
    background-size: 112px;
}
.btn i.more {
    background-position: -40px 0;
}
.mobile-board-page .board-inner {
    background-color: #EDEDED;
    padding: 10px 10px;
    position: relative;
    height: 28px;
}
.mobile-board-page .board-inner .triangle {
    width: 0;
    height: 0;
    border-bottom: 16px solid #EDEDED;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: -14px;
    right: 15px;
}
.mobile-board-page .board-inner .btn {
    margin-right: 10px;
    float: right;
}
.board-tab {
    display: flex;
    display: -webkit-flex;
}
.mobile-board-page .board-tab a {
    display: inline-block;
    width: 50%;
    font-size: 16px;
    line-height: 39px;
    height: 39px;
    text-align: center;
    /*color: #777;*/
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    /*background: #fff;*/
}
.mobile-board-page .board-tab a.active {
    font-weight: 700;
    color: #444;
    background: #EDEDED;
}
.pin-item {
    width: 145px;
    box-shadow: 0 1px 6px rgba(0,0,0,.25);
    background: #fff;
    font-size: 12px;
    border-radius: 2px;
}

.pin-item .main-img {
    display: block;
}
.pin-item .main-img img {
    display: block;
    /*margin: 0 auto;*/
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}
.pin-item .info {
    padding: 5px 8px;
}
.pin-item .info .description {
    line-height: 1.5;
    color: #777;
    margin-bottom: 8px;
    word-wrap: break-word;
}
.pin-item .info .meta span {
    display: inline-block;
    height: 12px;
    line-height: 12px;
    padding-left: 14px;
    margin-right: 4px;
    position: relative;
}
.pin-item .info .meta span i {
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 0;
    color: #999;
}
.waterfall {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    /*width: 310px;*/
    margin: 0 auto;
    
}

.pin-item .author {
    background: #fafafa;
    border-top: 1px solid #F2F2F2;
    position: relative;
    color: #999;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
.pin-item .author a {
    color: #777;
}
.pin-item .author img.avt {
    display: block;
    width: 27px;
    height: 27px;
    position: absolute;
    left: 8px;
    top: 8px;
    border-radius: 50%;
}
.pin-item .author .text {
    padding-left: 43px;
}
.pin-item .author .text .inner {
    display: block;
    padding: 8px;
    line-height: 1.2;
    border-left: 1px solid #F2F2F2;
    text-decoration: none;
    min-height: 28px;
    word-wrap: break-word;
}
.pin-item .author .text .name {
    margin-right: 2px;
    vertical-align: middle;
    display: inline-block;
    /*width: 47px;*/
    height: 14px;
    overflow: hidden;
}
.pin-item .author .text .to {
    /*white-space: nowrap;*/
    vertical-align: middle;
    /*display: inline-block;*/
}



</style>
