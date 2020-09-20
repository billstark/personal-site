<template>
  <div class="photo-frame">
    <div class="photo-image">
      <img :src=photo>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      photo: require('@/assets/img/gallery/' + this.imageUrl)
    }
  },
  name: 'PhotoFrame',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/common.scss';
@import '../../../assets/sass/variable.scss';

.test-container {
  background-color: $paper;
}

.wrapper {
  margin-left: 60px;
  margin-top: 80px;
  width: 800px;
  height: 500px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 30px;
}

.hide-photo-1 {
  position: relative;
  left: -120px;
  top: 70px;
  transform: rotate(6deg);
}

.hide-photo-2 {
position: relative;
  left: -120px;
  top: -230px;
  transform: rotate(-2deg);
}

.photo-frame {
  width: 400px;
  height: 267px;
  background-color: #f9f9f9;
  padding: 15px 20px;

  .photo-image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  // 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  // 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  // 0 100px 80px rgba(0, 0, 0, 0.12)
}
</style>
