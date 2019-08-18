import '../config/env';

import 'vue-form-generator/dist/vfg.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueFormGenerator from 'vue-form-generator';
import Multiselect from 'vue-multiselect';
import VueCurrencyFilter from 'vue-currency-filter';
import VueTheMask from 'vue-the-mask';
import VfgTheMask from 'vfg-the-mask/VfgTheMask';

import defaults from '../config/defaults';
import App from './App';
import router from './router';

Vue.config.productionTip = !global.isProduction;

Vue.use(BootstrapVue);
Vue.use(VueCurrencyFilter, defaults.currencyFilter);
Vue.use(VueTheMask);
Vue.use(VueFormGenerator);

Vue.component('field-vfg-the-mask', VfgTheMask);
Vue.component('multiselect', Multiselect);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
