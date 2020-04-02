/**
 * 插件：为vue添加全局功能
 * 1. 添加全局方法或者属性
 * 2. 添加全局资源：如指令/过滤器/过渡
 * 3. 添加组件选项
 * 4. 添加Vue实例方法，通过把它们添加到Vue.prototype上实现。
 * 5. 一个提供自己API的库，同时提供上面提到的功能，如vue-router
 */

import Vue from 'vue'
import Directive from './directive'
import Filters from './filters'
import * as Util from './utils'

let register = {};
register.install = function (Vue, options) {
    Vue.prototype.$util = Util
};
Vue.use(Directive);
Vue.use(register);
Vue.use(Filters);
