function b(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function C(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const o of n)o(void 0);return b}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(O(n,e))}function P(t,n,e,o){if(t){const s=m(t,n,e,o);return t[0](s)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function S(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const a=[],f=Math.max(n.dirty.length,s.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|s[u];return a}return n.dirty|s}return n.dirty}function U(t,n,e,o,s,a){if(s){const f=m(n,e,o,a);t.p(f,s)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){return t&&E(t.destroy)?t.destroy:b}function I(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function p(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){p().$$.on_mount.push(t)}function K(t){p().$$.after_update.push(t)}function L(t){p().$$.on_destroy.push(t)}const i=[],g=[];let c=[];const y=[],x=Promise.resolve();let h=!1;function q(){h||(h=!0,x.then(z))}function N(){return q(),x}function v(t){c.push(t)}const _=new Set;let r=0;function z(){if(r!==0)return;const t=l;do{try{for(;r<i.length;){const n=i[r];r++,d(n),F(n.$$)}}catch(n){throw i.length=0,r=0,n}for(d(null),i.length=0,r=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];_.has(e)||(_.add(e),e())}c.length=0}while(i.length);for(;y.length;)y.pop()();h=!1,_.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function Q(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{w as A,i as B,q as C,K as a,g as b,P as c,S as d,D as e,I as f,G as g,E as h,M as i,k as j,L as k,O as l,H as m,b as n,J as o,v as p,A as q,j as r,B as s,N as t,U as u,z as v,C as w,Q as x,l as y,d as z};