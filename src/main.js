// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome/index'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faCode, faSpaceShuttle, faGlobe } from '@fortawesome/free-solid-svg-icons'

// import {faFacebookSquare,  } from '@fortawesome/free-brands-svg-icons'
// import '@fortawesome/free-brands-svg-icons/github-square'
// import '@fortawesome/free-brands-svg-icons/linkedin'
// import '@fortawesome/free-solid-svg-icons/address-card'
// import '@fortawesome/free-solid-svg-icons/code'
// import '@fortawesome/free-solid-svg-icons/space-shuttle'
// import '@fortawesome/free-solid-svg-icons/globe'

library.add(faFacebookSquare, faGithubSquare, faLinkedin, faAddressCard, faCode, faSpaceShuttle, faGlobe)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
