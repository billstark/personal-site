<template lang="html">
  <div class="ability-info full-height-container">
    <div class="ability-info-container container">
      <div class="title">
        <h4 class="i-have">I HAVE</h4>
      </div>
      <div class="body">
        <div class="summary">
          <p>
            I am a person that can always adopts to new environments quickly. I love solving problems, love taking challenges and love new technologies.
          </p>
        </div>
        <div class="accomplishments">
          <div class="accomp-item">
            <div class="icon">
              <font-awesome-icon icon="code" size="2x"></font-awesome-icon>
            </div>
            <div class="description">
              <h3>Code</h3>
              <p>
                5 year plus development experience has tought me the importance of best practices, code quality and documentations. "Think first, have a clear design and then code" has always been the guide for me during work; I am always striving to provide reusable, sustainable and efficient code.
              </p>
            </div>
          </div>
          <div class="accomp-item">
            <div class="icon">
              <font-awesome-icon icon="space-shuttle" size="2x"></font-awesome-icon>
            </div>
            <div class="description">
              <h3>Better and even better</h3>
              <p>
                Not just to finish the work, but also consider better solutions, less resources usages, faster speed, better follow-ups, monitoring, fault-tolerance, backups... Work can be done easily but was selden polished to be perfect. I am not able to achieve perfection but I know how to and is always aiming to be perfect.
              </p>
            </div>
          </div>
          <div class="accomp-item">
            <div class="icon">
              <font-awesome-icon icon="globe" size="2x"></font-awesome-icon>
            </div>
            <div class="description">
              <h3>Open mind</h3>
              <p>
                Technologies changes quickly and as a programmer, I am always open to new things. Eager to learn about the pros and cons of different tech stacks and considering carefully with requirements makes me an adoptive developer. Open mind helps me enhance my knowledge base on the way of pursuing perfection.
              </p>
            </div>
          </div>
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

.ability-info {
  background-color: #3f4441;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    min-width: 1024px;
    height: 100vh;
    z-index: 0;
    background-image: url("../../../assets/img/xv.png");
    opacity: .7;
  }
  .ability-info-container {
    .i-have {
      text-align: center;
      color: $paper;
      opacity: .8;
      font-family: 'GT-Walsheim';
      font-size: 30px;
      letter-spacing: 2px;
      margin-top: 100px;
      margin-bottom: 20px;
    }
  }
}

.body {
  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: $paper;
    opacity: .4;
    display: flex;
    font-weight: 300;

    p {
      text-align: center;
      width: 600px;
      font-size: 15px;
    }
  }
  .accomplishments {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    .accomp-item {
      flex-grow: 1;
      display: flex;
      flex-direction: row;

      .icon {
        color: #ba7967;
        font-weight: bold;
      }

      .description {
        margin: 5px 0px 0px 20px;
        h3 {
          margin-top: 0px;
          color: $paper;
          opacity: .7;
          font-weight: lighter;
          letter-spacing: 1px;
        }
        p {
          color: $paper;
          opacity: .6;
          width: 250px;
          font-weight: 300;
          font-size: 14px;
        }
      }
    }
  }
}

</style>
