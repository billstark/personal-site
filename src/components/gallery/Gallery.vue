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
        <china></china>
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
import China from './sessions/China'

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
    China
  },
  metaInfo: {
    title: 'World In Square - Gallery'
  },
  props: {
    lang: {
      type: String
    }
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
</style>
