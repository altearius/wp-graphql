"use strict";(self.webpackChunkwp_graphql=self.webpackChunkwp_graphql||[]).push([[98],{2098:function(e,t,n){n.r(t);var r=n(7480),l=(n(875),n(9361)),a=n(8007),i=(n(9196),n(1850),Object.defineProperty),s=(e,t)=>i(e,"name",{value:t,configurable:!0});function o(e,t){var n,r;const l=e.levels;return((l&&0!==l.length?l[l.length-1]-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):e.indentLevel)||0)*((null===(r=this.config)||void 0===r?void 0:r.indentUnit)||0)}s(o,"indent");const u=s((e=>{const t=(0,a.o)({eatWhitespace:e=>e.eatWhile(l.i),lexRules:l.L,parseRules:l.P,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:o,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}}),"graphqlModeFactory");r.C.defineMode("graphql",u)},8007:function(e,t,n){n.d(t,{o:function(){return s}});var r=n(9361),l=n(875),a=Object.defineProperty,i=(e,t)=>a(e,"name",{value:t,configurable:!0});function s(e={eatWhitespace:e=>e.eatWhile(r.i),lexRules:r.L,parseRules:r.P,editorConfig:{}}){return{startState(){const t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return c(e.parseRules,t,l.Kind.DOCUMENT),t},token(t,n){return o(t,n,e)}}}function o(e,t,n){var r;if(t.inBlockstring)return e.match(/.*"""/)?(t.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:l,parseRules:a,eatWhitespace:i,editorConfig:s}=n;if(t.rule&&0===t.rule.length?d(t):t.needsAdvance&&(t.needsAdvance=!1,f(t,!0)),e.sol()){const n=(null==s?void 0:s.tabSize)||2;t.indentLevel=Math.floor(e.indentation()/n)}if(i(e))return"ws";const o=S(l,e);if(!o)return e.match(/\S+/)||e.match(/\s/),c(p,t,"Invalid"),"invalidchar";if("Comment"===o.kind)return c(p,t,"Comment"),"comment";const v=u({},t);if("Punctuation"===o.kind)if(/^[{([]/.test(o.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1));else if(/^[})\]]/.test(o.value)){const e=t.levels=(t.levels||[]).slice(0,-1);t.indentLevel&&e.length>0&&e[e.length-1]<t.indentLevel&&(t.indentLevel=e[e.length-1])}for(;t.rule;){let n="function"==typeof t.rule?0===t.step?t.rule(o,e):null:t.rule[t.step];if(t.needsSeparator&&(n=null==n?void 0:n.separator),n){if(n.ofRule&&(n=n.ofRule),"string"==typeof n){c(a,t,n);continue}if(null===(r=n.match)||void 0===r?void 0:r.call(n,o))return n.update&&n.update(t,o),"Punctuation"===o.kind?f(t,!0):t.needsAdvance=!0,n.style}h(t)}return u(t,v),c(p,t,"Invalid"),"invalidchar"}function u(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r++)e[n[r]]=t[n[r]];return e}i(s,"onlineParser"),i(o,"getToken"),i(u,"assign");const p={Invalid:[],Comment:[]};function c(e,t,n){if(!e[n])throw new TypeError("Unknown rule: "+n);t.prevState=Object.assign({},t),t.kind=n,t.name=null,t.type=null,t.rule=e[n],t.step=0,t.needsSeparator=!1}function d(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeparator=e.prevState.needsSeparator,e.prevState=e.prevState.prevState)}function f(e,t){var n;if(v(e)&&e.rule){const n=e.rule[e.step];if(n.separator){const t=n.separator;if(e.needsSeparator=!e.needsSeparator,!e.needsSeparator&&t.ofRule)return}if(t)return}for(e.needsSeparator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)d(e),e.rule&&(v(e)?(null===(n=e.rule)||void 0===n?void 0:n[e.step].separator)&&(e.needsSeparator=!e.needsSeparator):(e.needsSeparator=!1,e.step++))}function v(e){const t=Array.isArray(e.rule)&&"string"!=typeof e.rule[e.step]&&e.rule[e.step];return t&&t.isList}function h(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)d(e);e.rule&&f(e,!1)}function S(e,t){const n=Object.keys(e);for(let r=0;r<n.length;r++){const l=t.match(e[n[r]]);if(l&&l instanceof Array)return{kind:n[r],value:l[0]}}}i(c,"pushRule"),i(d,"popRule"),i(f,"advanceRule"),i(v,"isList"),i(h,"unsuccessful"),i(S,"lex")}}]);