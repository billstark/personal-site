<template lang="html">
  <!-- a short intro  -->
    <div class="short-intro full-height-container">
      <div class="short-intro-container container">
        <div class="intro-container">
          <div class="title">
            <h4 class="i-am">I AM</h4>
          </div>
          <div class="intro">
            <p class="forward">
              <i>"The traveller, the photographer,<br>
              the gamer, guardian of the night, <br>
              a Data Engineer at Rakuten."<br></i>
            </p>

            <p class="details">
              I am immersed in being a spectator of the world. Taking my steps to measure the lands, projecting down shadows of the views, hanging around inside wonderlands and digging to myths in different game worlds... I love collecting "Data" that enriches my life.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/common.scss';
@import '../../../assets/sass/variable.scss';

// For intro
.short-intro {
  min-height: 500px;
  background-image: url("../../../assets/img/me-bg.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;

  .short-intro-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

.intro-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;

  .title {
    text-align: center;

    .i-am {
      margin-top: 10px;
      letter-spacing: 1px;
      font-size: 30px;
    }
  }

  .intro {
    text-align: center;
    font-size: 16px;

    p {
      margin-top: 30px;
    }

    .forward {
      margin-top: 0px;
      line-height: 25px;
      font-size: 14px;
    }

    .details {
      width: 360px;
      line-height: 22px;
      font-size: 16px;
    }
  }
}
</style>
