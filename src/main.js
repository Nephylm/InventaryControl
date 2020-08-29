import Vue from 'vue'
import App from './App.vue'
import CodeHighlight from './views/codehighlight/CodeHighlight';
import AppInputStyleSwitch from './AppInputStyleSwitch';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('CodeHighlight', CodeHighlight);
Vue.component('AppInputStyleSwitch', AppInputStyleSwitch);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/vela-purple/theme.css'
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import Vuelidate from 'vuelidate';
import router from "@/router";
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Tree from 'primevue/tree';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
Vue.use(Vuelidate);
Vue.component('Button',Button);
Vue.component('Sidebar',Sidebar);
Vue.component('Tree',Tree);
Vue.component('Accordion',Accordion);
Vue.component('AccordionTab',AccordionTab);
Vue.component('Panel',Panel);
Vue.component('Card',Card);
Vue.component('Dialog',Dialog);
Vue.component('FileUpload',FileUpload);


router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
