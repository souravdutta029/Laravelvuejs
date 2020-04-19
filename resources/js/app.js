/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Importing momemt.js
import moment from 'moment';

// Importing the progressbar
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  height: '3px',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
});

// vform
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Importing vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// const Dashboard = { template: '<div>Dashboard</div>' }
// const Profile = { template: '<div>Profile</div>' }

// Routes
const routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default},
    { path: '/users', component: require('./components/Users.vue').default},
    { path: '/profile', component: require('./components/Profile.vue').default},
  ]


// Resgistering Routes
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

// Vue Global Filter declaration for text to capitalize
Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
});

// filter for time format
Vue.filter('myDate', function(datetime){
  return moment(datetime).format('MMMM Do YYYY, h:mm a');
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
