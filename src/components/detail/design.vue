<template lang="html">
<div id="page">
<div class="explore-banner explore-banner-hasFollowers">
    <div class="explore-bg">
        <img src="//hbimg.b0.upaiyun.com/f1be6127f94ab424ab1bb1fc34e8af93b09d9cb21f542-9Hj0NT_/sq/236/gaussblur/10x2" data-baiduimageplus-ignore="1" class="bg-img load">
    </div>
    <div class="explore-info">
        <h1 class="title">卧室</h1>
        <div class="info">既然一天有三分之一的时间在睡觉，那么无疑卧室的舒适度非常重要，再苦不能苦了自己的睡眠质量！来吧，跟花瓣一起好好睡觉！....
        </div>
        <a data-id="404yemiansheji" href="#" 
    onclick="return false;" class="follow-explore follow btn rbtn">
    <span class="text"> 关注</span>
    </a>
     <div class="follow-title">
        <i class="icon"></i>
        <span>Ta们已关注</span>
    </div>
    </div>
</div>
    <div class="explore-follows">
       <ul>
           <li v-for="follower in followers" >
               <router-link :to="follower.url"><img :src="follower.src"></router-link>
           </li>
       </ul>
    </div>
    <div id="mobile_index">
        <div class="dividing-line-up"></div>
        <div class="more-explore">
            <div class="more-explore-title">
                <span>更多发现</span>
            </div>
        </div>
        <div class="explore-category-image-box wrapper" style="width:315px">
            <router-link :to="{path:'/photos'}" class="category-image">
            <img src="http://hbimg.b0.upaiyun.com/a53771570ac40f0a1814c2927e9242364a38bc71181d3-Ly52gf_sq236bl4" 
            data-baiduimageplus-ignore="1">
            <div class="title">照片墙</div>
            </router-link>
            <router-link :to="{path:'/books'}" class="category-image right">
            <img src="http://hbimg.b0.upaiyun.com/28415b1edb14acb9a064465728708cb8277958b228196-QVtayM_sq236bl4" 
            data-baiduimageplus-ignore="1">
            <div class="title">书房</div>
            </router-link>
        </div>
        <div class="dividing-line-down"></div>
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
            count: 0,
            flag: null,
            followers: [
                {url:"/desc",src:'//hbimg.b0.upaiyun.com/d3ba30cdff503de3fc40c981a4bf859873960686175d-Om01hR_sq140sf'},
                {url:"/desc",src:'//hbimg.b0.upaiyun.com/c4beedd4d1542d940d1ffe42438230fd3780b8be11a4-lgMhzc_sq140sf'},
                {url:"/desc",src:'//hbimg.b0.upaiyun.com/cd926aebf1bb517c188512b7ec8064bf0674cceb2ce49-0qmJPf_sq75sf'},
                {url:"/desc",src:'//hbimg.b0.upaiyun.com/2e2828f9022d3cbd3dfde2222e1d9dbfd94a2114a55-Usi5Py_sq140sf'},
                {url:"/desc",src:'//hbimg.b0.upaiyun.com/f0f4154f3232d61e346d4cabc3b04cad4736f0c2a6f-OZfPnn_sq140sf'}
            ]
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
        }
    }
}
</script>

<style lang="css">
.explore-banner {
    position: relative;
    width: 100%;
    color: #fff;
    font-size: 14px;
}
.explore-banner .explore-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: left;
    overflow: hidden;
    background: #aaa;
}
.explore-banner-hasFollowers .explore-bg {
    padding-bottom: 22px;
}
.explore-banner .bg-img {
    overflow: hidden;
    position: absolute;
    min-width: 500px;
    width: 100%;
    transition: opacity .6s ease-in-out;
}
.explore-banner .explore-info {
    text-align: center;
    overflow: hidden;
}
.explore-banner .title {
    position: relative;
    margin: 20px auto 15px auto;
    width: 80%;
    font-size: 18px;
    text-shadow: none;
    line-height: 20px;
}
.explore-banner .info {
    position: relative;
    display: block;
    padding-bottom: 15px;
    margin: 0 auto;
    width: 90%;
    line-height: 18px;
    font-size: 12px;
}
.btn {
    display: inline-block;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 14px;
    padding: 0 12px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    user-select: none;
    text-align: center;
    font-weight: 700;
}
.rbtn {
   background: linear-gradient( #E53E49, #D43636);
   box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.3);
   text-shadow: 0 -1px 0 rgba(0,0,0,.1);
   color: #fff;
   border: 1px solid #C90000;
}
.explore-banner .follow-explore {
    position: relative;
    margin-bottom: 15px;
}
.explore-banner .follow-title .icon {
    display: inline-block;
    margin-right: 6px;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    background: url(http://huaban.com/img/explore/explore_icon.png) -95px 0 no-repeat;
}
.explore-banner .follow-title {
    padding-bottom: 15px;
    width: 300px;
    margin: 0 auto;
    position: relative;
}
.explore-banner .follow-title:before, .explore-banner .follow-title:after {
    display: block;
    position: absolute;
    top: 7px;
    width: 30px;
    height: 1px;
    background: rgba(255,255,255,.6);
    content: "";
}
.explore-banner .follow-title:before {
    left: 214px;
}
.explore-banner .follow-title:after {
    right: 214px;
}
/*.explore-follows  {
    position: relative;
    overflow: hidden;
    margin: -48px auto 10px auto;
    max-width: 286px;
    height: 44px;
    text-align: center;
}*/
.explore-follows li {
    position: relative;
    display: inline-block;
    margin-right: 13px;
    width: 44px;
    transition: opacity .2s ease-in-out;
    opacity: 1;
}
.explore-follows ul {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
}
.explore-follows ul li img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border: 2px solid #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.dividing-line-up {
    height: 1px;
    box-shadow: 0 1px 1px rgba(0,0,0,.25);
}
.more-explore .more-explore-title {
    padding-top: 10px;
    text-align: center;
}
.more-explore .more-explore-title span {
    font-size: 14px;
    color: #444;
}
.explore-category-image-box {
    height: 82px;
    max-width: 100%;
    position: relative;
    margin: 10px auto 0 auto;
    overflow: hidden;
}
.explore-category-image-box .category-image:first-child {
    margin-left: 3px;
}
.explore-category-image-box{
    display: flex;
    display: -webkit-flex;
}
.explore-category-image-box .category-image{
    flex: 1;
    display: inline-block;
    margin: 0 0 10px 10px;
    width: 145px;
    height: 78px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    overflow: hidden;
    position: relative;
}
.explore-category-image-box .right{
    margin-left: 18px;
}
.explore-category-image-box .category-image .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 78px;
    line-height: 78px;
    font-size: 16px;
    font-weight: 900;
    color: #fff;
    text-align: center;
    font-family: "\5FAE\8F6F\96C5\9ED1","helvetica neue",arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0 1px 0 rgba(0,0,0,.3);
}
.dividing-line-down {
    margin-top: 7px;
    border-top: 1px solid #eee;
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

