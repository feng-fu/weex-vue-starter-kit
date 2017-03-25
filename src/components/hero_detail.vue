<template>
  <div id="detailPage">
      <text style="width: 750px;height: 80px; line-height: 80px; font-size: 50px;text-align: center;color: #0683e5;">{{content.title}}</text>
      <image style="width: 650px;margin-left: 50px;height: 500px;margin-top: 100px;" :src="imageUrl"></image>
      <div class="btn">
        <text class="btn-word" @click="back">回到首页</text>
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
  .btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #0683e5;
  }
  .btn-word {
    color: #8a97ab;
    width: 200px;
    text-align: center;
  }
</style>

<script>
  import Utils from '.././normal/utils.js'
  export default {
    data() {
      return {
        content: Object,
        imageUrl: ''
      };
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    created () {
      let champion_id = this.$route.params.id
      this.imageUrl = `http://cdn.tgp.qq.com/pallas/images/skins/original/${champion_id}-000.jpg`
      Utils.GetData(`http://lolapi.games-cube.com/GetChampionDetail?champion_id=${champion_id}`, '', (res)=> {
          res = res.data
          if (res.msg === "ok") {
              this.content = res.data[0]
              console.log(res.data[0])
          }
      })
    }
  }
</script>
