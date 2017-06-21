<template lang="html">
    <div class="new_index_page">   
    <div class="recommand-line">
        <p>为你推荐</p>
    </div>

        <div class="recommand-items recommand-info clearfix"   >
            <div class="recommand-firstline">            
                <div  class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 2.84px; display: block;">
                    <router-link :to="{path:'/paint'}">
                    <img :src="content1.first.src" data-baiduimageplus-ignore="1" 
                    class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </router-link>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/24745196/">{{content1.first.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content1.first.tips1}}</span>
                            <span>{{content1.first.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 0px;">
                    <a >
                    <img :src="content1.second.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " 
                    style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/37158536/">{{content1.second.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content1.second.tips1}}</span>
                            <span>{{content1.second.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="recommand-secondline">
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 2.84px;">
                    <a href="">
                    <img :src="content1.third.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/19862371/">{{content1.third.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content1.third.tips1}}</span>
                            <span>{{content1.third.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 0px;">
                    <a href="/boards/33805784/">
                    <img :src="content1.forth.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </a>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/33805784/">{{content1.forth.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content1.forth.tips1}}</span>
                            <span>{{content1.forth.tips1}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommand-items recommand-info clearfix"   >
            <div class="recommand-firstline">            
                <div  class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 2.84px; display: block;">
                    <router-link :to="{path:'/paint'}">
                    <img :src="content2.first.src" data-baiduimageplus-ignore="1" 
                    class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </router-link>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/24745196/">{{content2.first.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content2.first.tips1}}</span>
                            <span>{{content2.first.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 0px;">
                    <a >
                    <img :src="content2.second.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " 
                    style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/37158536/">{{content2.second.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content2.second.tips1}}</span>
                            <span>{{content2.second.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="recommand-secondline">
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 2.84px;">
                    <a href="">
                    <img :src="content2.third.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/19862371/">{{content2.third.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content2.third.tips1}}</span>
                            <span>{{content2.third.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 0px;">
                    <a href="/boards/33805784/">
                    <img :src="content2.forth.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </a>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/33805784/">{{content2.forth.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content2.forth.tips1}}</span>
                            <span>{{content2.forth.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="loadingMore" v-show="hiddenMore" class="get-more-line" style="width:355px;">
            <a>加载更多</a>
        </div>
        <div v-show="showMore" class="recommand-items recommand-info clearfix"   >
            <div class="recommand-firstline">            
                <div  class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 2.84px; display: block;">
                    <router-link :to="{path:'/paint'}">
                    <img :src="content3.first.src" data-baiduimageplus-ignore="1" 
                    class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </router-link>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/24745196/">{{content3.first.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content3.first.tips1}}</span>
                            <span>{{content3.first.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 0px;">
                    <a >
                    <img :src="content3.second.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " 
                    style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/37158536/">{{content3.second.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content3.second.tips1}}</span>
                            <span>{{content3.second.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="recommand-secondline">
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 2.84px;">
                    <a href="">
                    <img :src="content3.third.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/19862371/">{{content3.third.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content3.third.tips1}}</span>
                            <span>{{content3.third.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 0px;">
                    <a href="/boards/33805784/">
                    <img :src="content3.forth.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </a>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/33805784/">{{content3.forth.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content3.forth.tips1}}</span>
                            <span>{{content3.forth.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div v-show="showMore" class="recommand-items recommand-info clearfix"   >
            <div class="recommand-firstline">            
                <div  class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 2.84px; display: block;">
                    <router-link :to="{path:'/paint'}">
                    <img :src="content4.first.src" data-baiduimageplus-ignore="1" 
                    class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </router-link>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/24745196/">{{content4.first.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content4.first.tips1}}</span>
                            <span>{{content4.first.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 0px;">
                    <a >
                    <img :src="content4.second.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " 
                    style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/37158536/">{{content4.second.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content4.second.tips1}}</span>
                            <span>{{content4.second.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="recommand-secondline">
                <div class="recommand-item l-s" style="width: 116.44px; margin-right: 2.84px;">
                    <a href="">
                    <img :src="content4.third.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 116.44px; width: 116.44px;">
                    </a>
                    <div class="recommand-content " style="height: 96.44px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/19862371/">{{content4.third.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content4.third.tips1}}</span>
                            <span>{{content4.third.tips2}}</span>
                        </div>
                    </div>
                </div>
                <div class="recommand-item l-l" style="height: 235.72px; width: 235.72px; margin-right: 0px;">
                    <a href="/boards/33805784/">
                    <img :src="content4.forth.src" 
                    data-baiduimageplus-ignore="1" class="recommand-bg " style="height: 235.72px; width: 235.72px;">
                    </a>
                    <div class="recommand-content " style="height: 60px;">
                        <div class="recommand-tra">
                        </div>
                        <div class="recommand-type boards">
                        </div>
                        <h2 class="recommand-title">
                            <a href="/boards/33805784/">{{content4.forth.desc}}</a>
                        </h2>
                        <div class="recommand-data">
                            <span>{{content4.forth.tips1}}</span>
                            <span>{{content4.forth.tips2}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pic_resource from "../../pic_resource.json" 
export default {
    data () {
        return {
            showMore: false,
            hiddenMore: true,
            content1: pic_resource.resource1,
            content2: pic_resource.resource2,
            content3: pic_resource.resource3,
            content4: pic_resource.resource4,
        }
    },
    methods: {
        loadingMore () {
            this.showMore = true
            this.hiddenMore = false
        }
    }
}
</script>

<style lang="css">
.recommand-line {
    margin: 10px 0 10px 0;
}
.recommand-line p {
    color: #999;
}
.recommand-firstline{
    flex-direction: row;
    display: flex;
    display: -webkit-flex;
}

.recommand-secondline {
    flex-direction: row;
    display: flex;
    display: -webkit-flex;
}
.recommand-items {
    padding-bottom: 0;
    padding-top: 0;
}
.recommand-item {
    position: relative;
}
.new_index_page .get-more-line {
    position: relative;
    margin: 0 auto 10px;
    height: 44px;
    line-height: 44px;
    background: #f4f4f4;
    text-align: center;
}
.new_index_page .get-more-line a {
    font-size: 18px;
    color: #444;
}
.recommand-firstline .recommand-item.l-l .recommand-type {
    background: url(http://huaban.com/img/mobile/new_index/box_title_sprite_mb@2x.png) 0 0 no-repeat;
    background-size: 156px 78px;
}
.recommand-firstline .recommand-item.l-s .recommand-type {
    background: url(http://huaban.com/img/mobile/new_index/box_title_sprite_mb@2x.png) 0 -60px no-repeat;
    background-size: 156px 78px;
}
.recommand-secondline .recommand-item.l-l .recommand-type {
    background: url(http://huaban.com/img/mobile/new_index/box_title_sprite_mb@2x.png) 0 0 no-repeat;
    background-size: 156px 78px;
}
.recommand-secondline .recommand-item.l-s .recommand-type {
    background: url(http://huaban.com/img/mobile/new_index/box_title_sprite_mb@2x.png) 0 -60px no-repeat;
    background-size: 156px 78px;
}
.recommand-item.l-l .recommand-content {
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
}
.recommand-item.l-s .recommand-type {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 36px;
    height: 18px;
}

.recommand-item.l-l .recommand-type {
    position: absolute;
    left: 10px;
    bottom: 10px;
    margin-right: 8px;
    width: 27px;
    height: 36px;
}
.recommand-item.l-l .recommand-title {
    height: 36px;
}
.recommand-item.l-l .recommand-title a {
    display: inline-block;
    margin: 14px 0 5px 45px;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    overflow: hidden;
    height: 20px;
    line-height: 20px;
}
.recommand-item.l-s .recommand-data {
    line-height: 12px;
}
.recommand-item.l-l .recommand-data span {
    margin-right: 10px;
    font-size: 12px;
    color: #fff;
}
.recommand-item.l-l .recommand-data {
    margin-left: 45px;
    display: inline-block;
}
.recommand-item.l-s .recommand-content {
    position: relative;
    padding: 10px;
    margin-top: 1.8%;
    background: #f5f5f5;
}
.recommand-item.l-s .recommand-data span {
    font-size: 12px;
    color: #999;
    /*margin-right: 10px;*/
}
.recommand-item.l-s .recommand-data span {
    /*display: inline-block;*/
}
.recommand-item.l-s .recommand-title a {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #444;
}
.recommand-item.l-l .recommand-content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    width: 100%;
}
</style>
