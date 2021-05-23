import h from './h'
import {vnode} from 'snabbdom'

const vnode1 = h("div",{},[h("div",{},"文字1"),h("div",{},"文字2")])
console.log(vnode1);

const test = vnode("div",{},[h("div",{},"文字1"),h("div",{},"文字2")])
console.log(test);