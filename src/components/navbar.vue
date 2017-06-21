<template lang="html">
    <div id="new_index_page">
    <div class="recommand-line">
         <router-link to ="/folk">大家正在关注</router-link>
     </div>
   <div class="recommand-info">
        <li :class="{'none':index==2}" v-for="(item,index) in navItem" >
            <router-link :to="item.url"><img :src="item.src ">
            <div class="category-title">{{item.title}}</div>
            </router-link>
        </li>
   </div>
   </div>
</template>

<script>
export default {
    data () {
        return {
            navItem: [
                {src: '//hbimg.b0.upaiyun.com/f1be6127f94ab424ab1bb1fc34e8af93b09d9cb21f542-9Hj0NT_sq236bl4',title:"404页面设计",url:'/design'},
                {src:'//hbimg.b0.upaiyun.com/20eaf6d65a384a28a3c1769cb4a50f9deb53ae93149b7-TsMNim_sq236bl4',title:"墙面装饰",url:'/decoration'},
                {src:'//hbimg.b0.upaiyun.com/28415b1edb14acb9a064465728708cb8277958b228196-QVtayM_sq236bl4',title:"中式婚礼",url:'/wedding'},
                {src:'//hbimg.b0.upaiyun.com/93f317a381d1eda7c74a8c9f508528d96baf435651c58-ySYd9r_/sq/236/gaussblur/10x2',title:"古风海报",url:'/poster'},
                {src:'//hbimg.b0.upaiyun.com/19db6d91ecb08796a6026dff9d33f3d745ade4ab1c2eb-xYoN5H_sq236bl4',title:"水彩画",url:'/painter'},
                {src:'//hbimg.b0.upaiyun.com/6efe6987d3543c70bdcbf9f02bc2a86c330e25f153c76-IA3veD_sq236bl4',title:"lomo摄影",url:'/shoot'},
            ]
        }
    }
}
</script>

<style lang="css">
.category-item {
    position: relative;
    display: inline-block;
    height: 60px;
    overflow: hidden;
}
.recommand-line {
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #fafafa;
    text-align: center;
}
.recommand-line a {
    color: #999;
}
.recommand-info {
    position: relative;
    padding: 10px;

}
.recommand-info li{
    position: relative;
    display: inline-block;
    height: 60px;
    overflow: hidden;
    margin-right: .8%;
    width: 32.8%;
    box-sizing: border-box;
}
.recommand-info .none {
    margin-right: 0;
}
.recommand-info .category-title {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #fff;
}

li:last-child {
    margin-right: 0;
}

</style>

