<template lang="html">
        <div id="mobile_header">
            <div class="logo icon-only">
                <a href="/" class="img"></a>
                <div class="mobile-title">发现
                </div>
            </div>
            <form action="/search/" class="search-form ">
            <div class="header-button search">
                <i></i>
            </div>
            <input name="q" value="" type="search" class="search-input">
            <a class="cancel">
                <i></i>
            </a>
            </form>
            <a class="header-button menu" v-on:click="onTapMask" >
                <i></i>
            </a>
            <div  v-show = "isSlidedown" class="header-menu">
                <div class="inner">
                    <div class="line login">
                        <a href="/signup/?next=%2F" class="signup-button rbtn btn ">
                        <span class="text"> 注册</span>
                        </a>
                        <a href="/login/?next=%2F" class="login-button btn">
                        <span class="text"> 登录
                        </span>
                        </a>
                    </div>
                    <div class="line ">
                        <a href="/all/" class="link">最新
                        </a>
                        <i class="arrow">
                        </i>
                    </div>
                    <div class="line ">
                        <a href="/popular/" class="link">热门</a>
                        <i class="arrow"></i>
                    </div>
                    <div class="line ">
                        <a href="/discovery/" class="link">发现</a>
                        <i class="arrow"></i>
                    </div>
                        <div class="line pc-btns">
                            <a class="to to-pc">访问电脑版</a>
                            <a href="/interface/get-huaban-app/" target="_blank" class="to to-app">下载客户端</a>
                        </div>
                </div>
            </div>
            <div id="mobile_signup_tip" style="display: none" class="hidden" >
                <span class="text">
                    <p>使用合作帐号</p>
                    <p>直接登录花瓣</p>
                </span>
                <div class="sites">
                    <a href="/oauth/weibo/instant_login/" class="weibo"></a>
                    <a href="/oauth/qzone/instant_login/" class="qq"></a>
                    <a href="/oauth/douban/instant_login/" class="douban"></a>
                    <a href="/oauth/renren/instant_login/" class="renren"></a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data () {
        return {
            isSlidedown:false
        }
    }, 
    methods: {
        onTapMask: function() {
            this.isSlidedown = !this.isSlidedown;
            
        }
    }
    // computed:{
    //    $('.menu').on('click',function(e){
    //        var 
    //    })
    // }
}
</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}
#mobile_header {
    position: relative;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
    width: 100%;
    left: 0;
    top: 0;
}
#mobile_header .logo {
    position: relative;
    width: 100px;
    height: 46px;
}
a {
    color: #222;
    text-decoration: none;
    outline: 0;
}
#mobile_header .logo .img {
    width: 25px;
    display: inline-block;
    margin-left: 10px;
    height: 44px;
    background: url(http://huaban.com/img/mobile/2x/huaban_logo.png) 0 center no-repeat;
    background-size: 75px;
}
#mobile_header .logo .mobile-title {
    font-size: 18px;
    display: inline-block;
    position: absolute;
    margin-left: 7px;
    bottom: 14px;
    white-space: nowrap;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
}
#mobile_header .header-button {
    display: block;
    position: absolute;
    right: 44px;
    top: 0;
    width: 44px;
    height: 44px;
    z-index: 9;
}
#mobile_header .search-input {
    width: 0;
    height: 28px;
    background-color: #F3F3F3;
    border-radius: 0;
    position: absolute;
    top: 8px;
    right: 44px;
    visibility: hidden;
    opacity: 0;
    padding: 0 8px;
    border: 1px solid #DDD;
    box-shadow: none;
    outline: 0;
    font-size: 16px;
    -webkit-appearance: none;
    -webkit-transition: opacity .2s linear;
    transition: opacity .2s linear;
    box-sizing: border-box;
}
#mobile_header .header-button i {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -11px 0 0 -11px;
    width: 22px;
    height: 22px;
    background: url(http://huaban.com/img/mobile/topbar_icons.png) -59px 1px no-repeat;
}
#mobile_header .menu i
{
     background: url(http://huaban.com/img/mobile/topbar_icons.png) -29px 1px no-repeat;
}
.backgroundsize #mobile_header .header-button i {
    background-image: url(http://huaban.com/img/mobile/2x/topbar_icons.png);
    background-size: 80px;
}
#mobile_header .cancel {
    display: block;
    visibility: hidden;
    position: absolute;
    left: 27%;
    top: 0;
    width: 40px;
    height: 44px;
    margin-left: -86px;
}
#mobile_header .cancel i {
    width: 20px;
    height: 20px;
    background: url(http://huaban.com/img/mobile/topbar_icons.png) 0 0 no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -10px 0 0 -10px;
}
.backgroundsize #mobile_header .cancel i {
    background-image: url(http://huaban.com/img/mobile/2x/topbar_icons.png);
    background-size: 80px;
}
#mobile_header .header-button.menu {
    right: 0;
}
.header-menu {
    position: absolute;
    left: 0;
    top: 44px;
    width: 100%;
    /*height: 0;*/
    overflow: hidden;
    border-top: 1px solid #F2F2F2;
    /*visibility: hidden;*/
    color: #DDD;
    z-index: 999; 
}
.header-menu .inner {
    background: #444;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
}
.header-menu .line {
    border-bottom: 1px solid #3B3B3B;
    position: relative;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
}
.header-menu .line.login {
    padding: 20px;
    height: 40px;
    line-height: 40px;
}

.header-menu .btn {
    font-size: 16px;
    box-shadow: none;
}
.header-menu .line {
    border-bottom: 1px solid #3B3B3B;
    position: relative;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
}
.header-menu .line.login {
    padding: 20px;
    height: 40px;
    line-height: 40px;
}
.header-menu .btn {
    display: inline-block;
    line-height: 1;
    border-radius: 2px;
    /*font-size: 14px;*/
    padding: 0 12px;
    height: 28px;
    line-height: 28px;
    background: #fff;
    background: linear-gradient( #FAFAFA, #F2F2F2);
    border: 1px solid #D9D9D9;
    box-shadow: inset 0 1px 0 white, 0 1px 0 rgba(255,255,255,.3);
    cursor: pointer;
    text-decoration: none;
    color: #444;
    white-space: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    text-align: center;
    font-weight: 700;
}
 .header-menu .rbtn {
    /*background: #E53E49;*/
    background: linear-gradient( #E53E49, #D43636);
    /*box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.3);*/
    /*text-shadow: 0 -1px 0 rgba(0,0,0,.1);
    color: #fff;*/
    border: 1px solid #C90000;
}
.header-menu .btn {
    font-size: 16px;
    box-shadow: none;
}
.header-menu .line.login .btn {
    width: 90px;
    line-height: 36px;
    height: 36px;
    box-sizing: border-box;
}
.header-menu .line.login .btn.signup-button {
    width: 60%;
    margin-right: 5%;
    color: #fff;
}
.header-menu .line.login .btn {
    width: 90px;
    line-height: 36px;
    height: 36px;
    box-sizing: border-box;
}
.header-menu .line.login .btn.login-button {
    float: right;
    width: 35%;
    color: #444;
    box-shadow: none;
}
.header-menu a {
    color: #DDD;
}
.header-menu .line a.link {
    display: block;
    padding-left: 20px;
    text-decoration: none;
}
.header-menu .line i.arrow {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -8px;
    background: url(http://huaban.com/img/mobile/small_dark_right_arrow.png) 0 0 no-repeat;
}
.backgroundsize .header-menu .line i.arrow {
    background-image: url(http://huaban.com/img/mobile/2x/small_dark_right_arrow.png);
    background-size: 16px;
}
.header-menu .pc-btns {
    padding: 15px 20px;
    line-height: 38px;
    height: auto;
}
.header-menu .pc-btns a.to {
    display: inline-block;
    text-align: center;
    width: 49%;
    background: #333;
    text-decoration: none;
}
.header-menu .pc-btns a.to {
    display: inline-block;
    text-align: center;
    width: 49%;
    background: #333;
    text-decoration: none;
}
#mobile_signup_tip {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(0,0,0,.6);
    font-size: 14px;
    color: #BBB;
    text-align: right;
}
#mobile_signup_tip .text {
    font-size: 14px;
    line-height: 20px;
    width: 90px;
    height: 60px;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 10px;
}
#mobile_signup_tip .sites {
    display: inline-block;
    line-height: 60px;
    margin-right: 10px;
    height: 60px;
}
#mobile_signup_tip .sites a {
    display: inline-block;
    width: 44px;
    height: 44px;
    vertical-align: middle;
    background: url(http://huaban.com/img/mobile/login_icons_small.png) 0 0 no-repeat;
    margin-right: 6px;
    border-radius: 50%;
}
.backgroundsize #mobile_signup_tip .sites a {
    background-image: url(http://huaban.com/img/mobile/2x/login_icons_small.png);
    background-size: 194px;
}
#mobile_signup_tip .sites a.qq {
    background-position: -50px 0;
}
#mobile_signup_tip .sites a.douban {
    background-position: -100px 0;
}
#mobile_signup_tip .sites a:last-child {
    margin-right: 0;
}
#mobile_signup_tip .sites a.renren {
    background-position: -150px 0;
} 
</style>
