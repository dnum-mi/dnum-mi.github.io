import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/component/link/link.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvfr/dsfr/dist/component/form/form.min.css'
import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'
import '@gouvminint/vue-dsfr/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'

import VueDsfr from '@gouvminint/vue-dsfr'

import App from './App.vue'
import router from './router/index.js'
import * as icons from './icons.js'

import './main.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueDsfr, { icons: Object.values(icons) })
  .mount('#app')
