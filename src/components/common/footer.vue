<template lang="html">
  <div class="footer-container normal-height-container">
    <div class="container">
      <div class="footer-content">
        <div class="wrapper">
          <div class="logo">
            <img src="../../assets/img/logo.png" alt="">
          </div>
          <div class="social-media">
            <a class="media-icon" target="_blank" href="https://www.facebook.com/profile.php?id=100005438507300">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x"></font-awesome-icon>
            </a>
            <a class="media-icon" target="_blank" href="https://github.com/billstark">
              <font-awesome-icon :icon="['fab', 'github-square']" size="3x"></font-awesome-icon>
            </a>
            <a class="media-icon" target="_blank" href="https://www.linkedin.com/in/zhuohan-yang-8ba3a5117/">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};

</script>

<style lang="scss" scoped>
@import '../../assets/sass/common.scss';
@import '../../assets/sass/variable.scss';

.footer-container {
  background-color: $choco;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .logo {

    img {
      padding-right: 60px;
      border-right: 1px solid rgba(100, 100, 100, .3);
      width: 100px;
    }
  }

  .social-media {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 400px;
    margin-top: 25px;

    .media-icon {
      color: $paper;
      opacity: .3;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}

</style>