<template lang="html">
  <div>
    <!-- <transition name="fade">
      <div v-if="loading" class="loading-cube">
        <cube class="cube" color="#565656"></cube>
        <p>Loading...</p>
      </div>
    </transition> -->
    <div class="normal-height-container gallery-container">
      <div class="container">
        <div class="china">
          <div class="chongqing-wrapper">
            <h1>Chongqing, my hometown.</h1>
            <p>I was born in Chongqing and raised in Chongqing. There were loads of memories left behind.</p>
            <div class="chongqing">
              <div class="chongqing-view-wrapper">
                <div class="chongqing-view">
                  <photo-frame class="views-postcard" image-url="chongqing/hongyadong.jpeg"></photo-frame>
                  <div class="chongqing-view-des-wrapper">
                    <h3>Scenery</h3>
                    <p>this is some place holder this is some place holder this is some place holder this is some place holder this is some place holder</p>
                  </div>
                </div>
              </div>
              <div class="school-wrapper">
                <div class="school">
                  <photo-frame class="friends-postcard" image-url="chongqing/IMG_3138-min.jpg"></photo-frame>
                  <div class="chongqing-friends-des-wrapper">
                    <h3>Friends</h3>
                    <p>this is some place holder this is some place holder this is some place holder this is some place holder this is some place holder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="neimenggu"></div>
          <div class="xiamen"></div>
        </div>
        <div class="singapore"></div>
        <div class="japan"></div>
        <div class="canada"></div>
        <div class="norway"></div>
        <div class="iceland"></div>
        <div class="germany"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoFrame from './parts/PhotoFrame'

export default {
  data () {
    return {
      categories: [],
      imageGroups: [],
      loadedCount: 0
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
  },
  components: {
    PhotoFrame
  },
  metaInfo: {
    title: 'World In Square - Gallery'
  }
}

</script>

<style lang="scss" scoped>
@import '../../assets/sass/animation.scss';
@import '../../assets/sass/common.scss';
@import '../../assets/sass/variable.scss';

.cube {
  transform: scale(.7);
}

.loading-cube {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $paper;
  p {
    text-align: center;
  }
  position: absolute;
  width: 100%;
  z-index: 1;
}

.gallery-container {
  padding-top: 70px;

  img {
    width: 500px;
  }
}

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
