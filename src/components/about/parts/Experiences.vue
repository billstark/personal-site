<template lang="html">
  <div class="experiences-info full-height-container">
    <div class="experiences-info-container container">
      <div class="title">
        <h4 class="i-worked">I WORKED</h4>
      </div>
      <div class="summary">
        <p>
          I have six-months of working experience as a web application software engineer. Most of my work
          includes both front-end and backend development.
        </p>
      </div>
      <div class="experience-item">
        <div class="company-logo visenze">
          <img src="../../../assets/img/visenze.png" alt="">
        </div>
        <div class="description">
          <h3>May 2017 - July 2017</h3>
          <p>
            Worked as a full-stack web developer at ViSenze for 3 months. During the internship I got familiar with AngularJS, Python, Java Spring and Jenkins. I learnt the basic development cycle of small projects. I helped with backend maintainess, continuous integration, UI design & implementation and some of the user experience testing.
          </p>
          <a href="http://www.weardex.com" target="_blank">Show case</a>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo rakuten-viki">
          <img src="../../../assets/img/viki_logo.png" alt="">
        </div>
        <div class="description">
          <h3>May 2018 - Nov 2018</h3>
          <p>
            Worked as a backend developer at Rakuten Viki for 7 months. During the internship I migrated a small proxy project written in Ruby to Golang. Created a Golang service for static meta data from scratch, which supports basic CRUD functionalities. Golang (Go-kit), Google Cloud Platform, PostgreSQL, shell script and Circle-CI were used. In addition, created Markov model and visualization tools to analyze user behaviors. Elastic search, Python (Numpy) and Vue.js were used.
          </p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo rakuten">
          <img src="../../../assets/img/rakuten.png" alt="">
        </div>
        <div class="description">
          <h3>July 2019 - Now</h3>
          <p>
            Working as a data engineer at Rakuten Asia. Started with data pipeline development with Spark, Kafka, Dataset Registry, Kafka Connect, Vault. Optimised the existing pipelines with efficiency and resource usage. Lead the proof of concepts of Rakuten US Bank Data Platform. Worked with Apache Beam (Dataflow), Cloud Build, Secret Management API, Cloud Composer etc. to build data pipelines (including CI/CD) on Google Cloud Platform from scratch to support the fundamental data processing requirements. Worked closely with our client Rakuten Viki, Created public API (with load testing & monitoring) using Akka for processed data access. Made use of Alluxio to create data replication tool which replicates data from HDFS to GCS on k8s environment.<br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
  }
}

</script>

<style lang="scss">
@import '../../../assets/sass/common.scss';
@import '../../../assets/sass/variable.scss';

.experiences-info {
  background-color: $paper;
  .i-worked {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-family: 'GT-Walsheim';
    font-size: 30px;
    letter-spacing: 2px;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 300;
    opacity: .6;
    p {
      text-align: center;
      width: 600px;
      font-size: 14px;
    }
  }

  .experience-item {
    display: flex;
    flex-direction: row;
    .company-logo {
      img {
        width: 200px;
      }
    }

    .visenze {
      margin-top: -4px;
    }

    .rakuten-viki {
      margin-top: 5px;
    }

    .rakuten {
      margin-top: 10px;
    }

    .description {
      margin-left: 20px;
      h3 {
        font-weight: 300;
        margin-top: 45px;
      }

      p {
        font-size: 13px;
        opacity: .6;
      }
      a {
        color: $oxblood;
        opacity: 1;
        font-size: 13px;
        font-weight: 400;
        transition: all .5s ease;
        &:hover {
          opacity: .7;
        }
      }
    }
  }
}

</style>
