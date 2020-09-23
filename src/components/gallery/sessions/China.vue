<template>
  <div class="china">
    <div class="chongqing-wrapper">
      <h1>{{ chongqing.title }}</h1>
      <p>{{ chongqing.description }}</p>
      <div class="chongqing">
        <div class="chongqing-view-wrapper">
          <div class="chongqing-view">
            <photo-frame class="views-postcard" image-url="chongqing/hongyadong.jpeg"></photo-frame>
            <div class="chongqing-view-des-wrapper">
              <h3>{{ chongqing.scenery.title }}</h3>
              <p>{{ chongqing.scenery.description }}</p>
            </div>
          </div>
        </div>
        <div class="school-wrapper">
          <div class="school">
            <photo-frame class="friends-postcard" image-url="chongqing/IMG_3138-min.jpg"></photo-frame>
            <div class="chongqing-friends-des-wrapper">
              <h3>{{ chongqing.friends.title }}</h3>
              <p>{{ chongqing.friends.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xiamen-wrapper">
      <h1>Xiamen, city and sea.</h1>
      <p>After I graduated from my high school (actually after I finished bridging course), 8 close friends flew to Xianmen, </p>
    </div>
    <div class="neimenggu-wrapper">
      <!-- <h1>Neimenggu, </h1> -->
    </div>
  </div>
</template>

<script>
import PhotoFrame from '../parts/PhotoFrame'
import chinaEn from '../../../assets/wording/en/gallery/china.json'
import chinaCn from '../../../assets/wording/cn/gallery/china.json'

export default {
  data () {
    return {
    }
  },
  computed: {
    chongqing () {
      var chinaText = chinaEn
      if (navigator.language === 'zh') {
        chinaText = chinaCn
      }
      return {
        title: chinaText.chongqing.title,
        description: chinaText.chongqing.description,
        scenery: {
          title: chinaText.chongqing.scenery.title,
          description: chinaText.chongqing.scenery.description
        },
        friends: {
          title: chinaText.chongqing.friends.title,
          description: chinaText.chongqing.friends.description
        }
      }
    },
    location () {
      return navigator.language
    }
  },
  components: {
    PhotoFrame
  }
}
</script>

<style lang="scss" scoped>
.china {
  margin-top: 60px;
}

.chongqing {
  width: 100%;
  display: flex;
  flex-direction: row;

  .chongqing-view-wrapper {
    width: 60%;
    padding-right: 5px;

    .chongqing-view {
      padding: 20px 40px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 30px;
      height: 400px;

      .views-postcard {
        position: relative;
        margin-left: -250px;
        margin-top: -40px;
        transform: rotate(12deg);
        display: block;
      }

      .chongqing-view-des-wrapper {
        position: relative;
        margin-left: 250px;
        margin-top: -150px;
      }
    }
  }

  .school-wrapper {
    width: 40%;
    padding-left: 5px;

    .school {
      padding: 20px 40px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 30px;
      height: 400px;

      .friends-postcard {
        position: relative;
        margin-left: 54px;
        margin-top: 190px;
        transform: rotate(-4deg);
      }

      .chongqing-friends-des-wrapper {
        position: relative;
        margin-top: -470px;
      }
    }
  }
}
</style>
