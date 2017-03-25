<template>
  <div class="container">
      <div class="main" v-for="item in list" @click="toDetailPage(item.id)">
        <image class="hero_icon" :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/' + item.id + '.png'" alt=""></image>
        <text class="hero_name">{{item.cname}}</text>
      </div>
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 750px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .main {
    width: 187px;
    height: 100px;
    margin-bottom: 10px;
    text-align: center;
    flex: 1;
  }
  .hero_icon {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 64px;
  }
  .hero_name {
    width: 187px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .bannar-image {
    width: 200px;
    height: 200px;
  }

  .message {
    padding-top: 20px;
    padding-bottom: 40px;
    color: #0055dd;
    font-size: 28px;
  }

  .quotes {
    font-size: 16px;
    color: #666;
  }
</style>

<script>
  import Utils from './../normal/utils.js'
  export default {
    data() {
      return {
        list: []
      };
    },
    methods: {
      toDetailPage (element) {
        this.$router.push(`/hero_detail/${element}`)
      }
    },
    created () {
        Utils.GetData('http://lolapi.games-cube.com/champion','', (e)=>{
          console.log(e)
          e = e.data
          if(e.msg === 'ok'){
            this.list = e.data
          }
        })
    }
  }
</script>
