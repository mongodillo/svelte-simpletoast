function $(){}const Z=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(tt)}function F(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Kt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)c[u]=e.dirty[u]|s[u];return c}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,c){if(s){const r=et(e,n,i,c);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t&&F(t.destroy)?t.destroy:$}function Yt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let it=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):$;const S=new Set;function st(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&G(st)}function rt(t){let e;return S.size===0&&G(st),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let L=!1;function xt(){L=!0}function wt(){L=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:$t(1,s,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let u=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function vt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return kt(ot(t),e),e.sheet}function kt(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(L){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){L&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function te(){return J(" ")}function ee(){return J("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){At(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const o=n(u);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const o=n(u);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function at(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||c.push(u.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return at(t,e,n,lt)}function oe(t,e,n){return at(t,e,n,St)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ce(t){return Mt(t," ")}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e){t.value=e??""}function ae(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function _e(t){const e=t.querySelector(":checked");return e&&e.__value}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){return new t(e)}const P=new Map;let q=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Et(e),rules:{}};return P.set(t,n),n}function ft(t,e,n,i,s,c,r,u=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);l+=p*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Rt(f)}_${u}`,_=ot(t),{stylesheet:d,rules:h}=P.get(_)||Bt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${s}ms 1 both`,q+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Ot())}function Ot(){G(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),P.clear())})}function he(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:c=0,duration:r=300,easing:u=Z,start:o=it()+c,end:l=o+r,tick:f=$,css:a}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){a&&(h=ft(t,0,1,r,c,u,a)),c||(d=!0)}function p(){a&&H(t,h),_=!1}return rt(y=>{if(!d&&y>=o&&(d=!0),d&&y>=l&&(f(1,0),p()),!_)return!1;if(d){const v=y-o,b=0+1*u(v/r);f(b,1-b)}return!0}),g(),f(0,1),p}function me(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Dt(t,s)}}function Dt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function R(t){B=t}function K(){if(!B)throw new Error("Function called outside component initialization");return B}function pe(t){K().$$.on_mount.push(t)}function ye(t){K().$$.after_update.push(t)}function ge(t){K().$$.on_destroy.push(t)}const N=[],V=[];let C=[];const X=[],_t=Promise.resolve();let W=!1;function dt(){W||(W=!0,_t.then(ht))}function xe(){return dt(),_t}function z(t){C.push(t)}const I=new Set;let k=0;function ht(){if(k!==0)return;const t=B;do{try{for(;k<N.length;){const e=N[k];k++,R(e),Pt(e.$$)}}catch(e){throw N.length=0,k=0,e}for(R(null),N.length=0,k=0;V.length;)V.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];I.has(n)||(I.add(n),n())}C.length=0}while(N.length);for(;X.length;)X.pop()();W=!1,I.clear(),R(t)}function Pt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function qt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let j;function zt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function Y(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const D=new Set;let E;function we(){E={r:0,c:[],p:E}}function $e(){E.r||A(E.c),E=E.p}function mt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),E.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Lt={duration:0};function be(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,u,o=0;function l(){r&&H(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=Z,tick:g=$,css:p}=s||Lt;p&&(r=ft(t,0,1,d,_,h,p,o++)),g(0,1);const y=it()+_,v=y+d;u&&u.abort(),c=!0,z(()=>Y(t,!0,"start")),u=rt(b=>{if(c){if(b>=v)return g(1,0),Y(t,!0,"end"),l(),c=!1;if(b>=y){const M=h((b-y)/d);g(M,1-M)}}return c})}let a=!1;return{start(){a||(a=!0,H(t),F(s)?(s=s(i),zt().then(f)):f())},invalidate(){a=!1},end(){c&&(l(),c=!1)}}}function Tt(t,e){Ft(t,1,1,()=>{e.delete(t.key)})}function ve(t,e){t.f(),Tt(t,e)}function Ee(t,e,n,i,s,c,r,u,o,l,f,a){let _=t.length,d=c.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,v=new Map,b=[];for(h=d;h--;){const m=a(s,c,h),x=n(m);let w=r.get(x);w?i&&b.push(()=>w.p(m,e)):(w=l(x,m),w.c()),y.set(x,p[h]=w),x in g&&v.set(x,Math.abs(h-g[x]))}const M=new Set,Q=new Set;function T(m){mt(m,1),m.m(u,f),r.set(m.key,m),f=m.first,d--}for(;_&&d;){const m=p[d-1],x=t[_-1],w=m.key,O=x.key;m===x?(f=m.first,_--,d--):y.has(O)?!r.has(w)||M.has(w)?T(m):Q.has(O)?_--:v.get(w)>v.get(O)?(Q.add(w),T(m)):(M.add(O),_--):(o(x,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||o(m,r)}for(;d;)T(p[d-1]);return A(b),p}function ke(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(tt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),c.forEach(z)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(qt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(N.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,c,r,u=[-1]){const o=B;R(t);const l=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Wt(t,a)),_}):[],l.update(),f=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){xt();const a=Ct(e.target);l.fragment&&l.fragment.l(a),a.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&mt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),wt(),ht()}R(o)}class Ce{$destroy(){Ht(this,1),this.$destroy=$}$on(e,n){if(!F(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ve as $,It as A,Ht as B,Kt as C,Ut as D,Vt as E,Qt as F,Nt as G,$ as H,Jt as I,Yt as J,F as K,pt as L,it as M,rt as N,Z as O,ne as P,ge as Q,St as R,Ce as S,oe as T,gt as U,Xt as V,Ee as W,me as X,he as Y,z as Z,be as _,te as a,ue as a0,fe as a1,se as a2,A as a3,_e as a4,Zt as b,ce as c,Ft as d,ee as e,$e as f,mt as g,ct as h,Se as i,ye as j,lt as k,re as l,Ct as m,ie as n,pe as o,ae as p,J as q,Mt as r,Gt as s,xe as t,le as u,we as v,V as w,de as x,ke as y,Ne as z};