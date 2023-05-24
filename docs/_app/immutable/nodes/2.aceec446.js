import{J as Qe,K as Te,L as ho,M as Xe,N as po,O as vo,S as ge,i as be,s as Oe,k as p,a as C,q as y,l as v,m as h,c as L,h as u,r as I,n as d,b as z,G as s,P as G,H as It,o as so,Q as mo,R as Pt,e as ct,T as Ct,p as Ye,U as To,v as no,V as go,f as io,g as Et,d as wt,I as lo,y as ro,z as ao,A as co,W as bo,X as Oo,Y as Eo,Z as ve,_ as ko,$ as yo,B as uo,a0 as Io,a1 as At,a2 as Vt,a3 as jt,a4 as wo,a5 as Ze}from"../chunks/index.6bb085b2.js";import{w as fo}from"../chunks/index.57e4ef2e.js";const Po=!0,Xo=Object.freeze(Object.defineProperty({__proto__:null,prerender:Po},Symbol.toStringTag,{value:"Module"})),Co=()=>{const{subscribe:o,update:t}=fo([]),e={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_MIDDLE:"top-middle",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_MIDDLE:"bottom-middle"},i={NONE:"none",SUCCESS:"success",ERROR:"error",INFO:"info",WARNING:"warning",PROCESSING:"processing"};let c=0,n={duration:5e3,autoClose:!0,status:i.NONE,maxToasts:7};const l=(m="Title",T="Hello, world!",E=n.status,g=n.duration,V=n.autoClose)=>{if(!Object.values(i).includes(E))throw new Error(`Invalid status: ${E}. Valid options are ${Object.values(i).join(", ")}`);return t(A=>{let B=[...A];return B.length>=n.maxToasts&&B.shift(),B.push({title:m,message:T,duration:g,id:c++,autoClose:V,status:E,toastTime:new Date(Date.now()).toLocaleTimeString()}),B}),c-1};return{subscribe:o,update:t,removeToast:m=>t(T=>T.filter(E=>E.id!==m)),init:m=>{n={...n,...m}},positionOptions:e,statusOptions:i,success:(m,T,E,g)=>l(m,T,i.SUCCESS,E??n.duration,g??n.autoClose),warning:(m,T,E,g)=>l(m,T,i.WARNING,E??n.duration,g??n.autoClose),error:(m,T,E,g)=>l(m,T,i.ERROR,E??n.duration,g??n.autoClose),info:(m,T,E,g)=>l(m,T,i.INFO,E??n.duration,g??n.autoClose),processing:(m,T,E,g)=>l(m,T,i.PROCESSING,E??0,g??!1),neutral:(m,T,E,g)=>l(m,T,i.NONE,E??n.duration,g??n.autoClose)}},N=Co();function _o(o){const t=o-1;return t*t*t+1}function Lo(o,{delay:t=0,duration:e=400,easing:i=Te}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:e,easing:i,css:n=>`opacity: ${n*c}`}}function No(o,{delay:t=0,duration:e=400,easing:i=_o,x:c=0,y:n=0,opacity:l=0}={}){const _=getComputedStyle(o),f=+_.opacity,r=_.transform==="none"?"":_.transform,a=f*(1-l),[b,O]=Qe(c),[w,k]=Qe(n);return{delay:t,duration:e,easing:i,css:(m,T)=>`
			transform: ${r} translate(${(1-m)*b}${O}, ${(1-m)*w}${k});
			opacity: ${f-a*T}`}}function Mo(o,{from:t,to:e},i={}){const c=getComputedStyle(o),n=c.transform==="none"?"":c.transform,[l,_]=c.transformOrigin.split(" ").map(parseFloat),f=t.left+t.width*l/e.width-(e.left+l),r=t.top+t.height*_/e.height-(e.top+_),{delay:a=0,duration:b=w=>Math.sqrt(w)*120,easing:O=_o}=i;return{delay:a,duration:ho(b)?b(Math.sqrt(f*f+r*r)):b,easing:O,css:(w,k)=>{const m=k*f,T=k*r,E=w+k*t.width/e.width,g=w+k*t.height/e.height;return`transform: ${n} translate(${m}px, ${T}px) scale(${E}, ${g});`}}}function xe(o){return Object.prototype.toString.call(o)==="[object Date]"}function me(o,t){if(o===t||o!==o)return()=>o;const e=typeof o;if(e!==typeof t||Array.isArray(o)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const i=t.map((c,n)=>me(o[n],c));return c=>i.map(n=>n(c))}if(e==="object"){if(!o||!t)throw new Error("Object cannot be null");if(xe(o)&&xe(t)){o=o.getTime(),t=t.getTime();const n=t-o;return l=>new Date(o+l*n)}const i=Object.keys(t),c={};return i.forEach(n=>{c[n]=me(o[n],t[n])}),n=>{const l={};return i.forEach(_=>{l[_]=c[_](n)}),l}}if(e==="number"){const i=t-o;return c=>o+c*i}throw new Error(`Cannot interpolate ${e} values`)}function Bo(o,t={}){const e=fo(o);let i,c=o;function n(l,_){if(o==null)return e.set(o=l),Promise.resolve();c=l;let f=i,r=!1,{delay:a=0,duration:b=400,easing:O=Te,interpolate:w=me}=Xe(Xe({},t),_);if(b===0)return f&&(f.abort(),f=null),e.set(o=c),Promise.resolve();const k=po()+a;let m;return i=vo(T=>{if(T<k)return!0;r||(m=w(o,l),typeof b=="function"&&(b=b(o,l)),r=!0),f&&(f.abort(),f=null);const E=T-k;return E>b?(e.set(o=l),!1):(e.set(o=m(O(E/b))),!0)}),i.promise}return{set:n,update:(l,_)=>n(l(c,o),_),subscribe:e.subscribe}}function Do(o){let t;return{c(){t=p("div"),this.h()},l(e){t=v(e,"DIV",{class:!0}),h(t).forEach(u),this.h()},h(){d(t,"class","lds-dual-ring svelte-nnq42")},m(e,i){z(e,t,i)},d(e){e&&u(t)}}}function So(o){let t,e,i,c,n=o[5]==="info"&&Ro(),l=o[5]==="success"&&Ao(),_=o[5]==="error"&&Vo(),f=o[5]==="warning"&&jo();return{c(){t=Pt("svg"),n&&n.c(),e=ct(),l&&l.c(),i=ct(),_&&_.c(),c=ct(),f&&f.c(),this.h()},l(r){t=Ct(r,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var a=h(t);n&&n.l(a),e=ct(),l&&l.l(a),i=ct(),_&&_.l(a),c=ct(),f&&f.l(a),a.forEach(u),this.h()},h(){d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"fill","currentColor"),d(t,"viewBox","0 0 24 24"),d(t,"class","svelte-nnq42")},m(r,a){z(r,t,a),n&&n.m(t,null),s(t,e),l&&l.m(t,null),s(t,i),_&&_.m(t,null),s(t,c),f&&f.m(t,null)},p:It,d(r){r&&u(t),n&&n.d(),l&&l.d(),_&&_.d(),f&&f.d()}}}function Ro(o){let t;return{c(){t=Pt("path"),this.h()},l(e){t=Ct(e,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(t).forEach(u),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z")},m(e,i){z(e,t,i)},d(e){e&&u(t)}}}function Ao(o){let t;return{c(){t=Pt("path"),this.h()},l(e){t=Ct(e,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(t).forEach(u),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z")},m(e,i){z(e,t,i)},d(e){e&&u(t)}}}function Vo(o){let t;return{c(){t=Pt("path"),this.h()},l(e){t=Ct(e,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(t).forEach(u),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z")},m(e,i){z(e,t,i)},d(e){e&&u(t)}}}function jo(o){let t;return{c(){t=Pt("path"),this.h()},l(e){t=Ct(e,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(t).forEach(u),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")},m(e,i){z(e,t,i)},d(e){e&&u(t)}}}function Uo(o){let t;return{c(){t=p("div"),this.h()},l(e){t=v(e,"DIV",{class:!0,style:!0}),h(t).forEach(u),this.h()},h(){d(t,"class","progress "+o[5]+" svelte-nnq42"),Ye(t,"width",o[2]*100+"%")},m(e,i){z(e,t,i)},p(e,i){i&4&&Ye(t,"width",e[2]*100+"%")},d(e){e&&u(t)}}}function $o(o){let t,e,i,c,n,l,_,f,r,a,b,O,w,k,m,T,E,g,V,A=o[5]==="processing"&&Do(),B=o[5]&&o[5]!=="none"&&o[5]!=="processing"&&So(o),D=o[3]&&Uo(o);return{c(){t=p("div"),e=p("div"),A&&A.c(),i=C(),B&&B.c(),c=C(),n=p("div"),l=p("div"),_=p("h6"),f=C(),r=p("span"),a=y(o[8]),b=C(),O=p("p"),w=C(),k=p("button"),m=y("✕"),T=C(),D&&D.c(),this.h()},l(S){t=v(S,"DIV",{class:!0});var M=h(t);e=v(M,"DIV",{class:!0});var H=h(e);A&&A.l(H),i=L(H),B&&B.l(H),c=L(H),n=v(H,"DIV",{class:!0});var X=h(n);l=v(X,"DIV",{class:!0});var Y=h(l);_=v(Y,"H6",{class:!0});var j=h(_);j.forEach(u),f=L(Y),r=v(Y,"SPAN",{class:!0});var J=h(r);a=I(J,o[8]),J.forEach(u),Y.forEach(u),b=L(X),O=v(X,"P",{class:!0});var kt=h(O);kt.forEach(u),X.forEach(u),H.forEach(u),w=L(M),k=v(M,"BUTTON",{class:!0});var K=h(k);m=I(K,"✕"),K.forEach(u),T=L(M),D&&D.l(M),M.forEach(u),this.h()},h(){d(_,"class","svelte-nnq42"),d(r,"class","svelte-nnq42"),d(l,"class","toast-title-row svelte-nnq42"),d(O,"class","toast-message svelte-nnq42"),d(n,"class","toast-content svelte-nnq42"),d(e,"class","toast-content-container svelte-nnq42"),d(k,"class","close-container-btn svelte-nnq42"),d(t,"class",E="toast "+o[0]+" "+o[5]+" svelte-nnq42")},m(S,M){z(S,t,M),s(t,e),A&&A.m(e,null),s(e,i),B&&B.m(e,null),s(e,c),s(e,n),s(n,l),s(l,_),_.innerHTML=o[7],s(l,f),s(l,r),s(r,a),s(n,b),s(n,O),O.innerHTML=o[6],s(t,w),s(t,k),s(k,m),s(t,T),D&&D.m(t,null),g||(V=G(k,"click",o[10]),g=!0)},p(S,[M]){S[5]&&S[5]!=="none"&&S[5]!=="processing"&&B.p(S,M),S[3]&&D.p(S,M),M&1&&E!==(E="toast "+S[0]+" "+S[5]+" svelte-nnq42")&&d(t,"class",E)},i:It,o:It,d(S){S&&u(t),A&&A.d(),B&&B.d(),D&&D.d(),g=!1,V()}}}function qo(o,t,e){let i,c=It,n=()=>(c(),c=To(m,g=>e(2,i=g)),m);o.$$.on_destroy.push(()=>c());let{position:l}=t,{toast:_}=t;const{autoClose:f,duration:r,id:a,status:b,message:O,title:w,toastTime:k}=_;let m,T=()=>{};f&&(n(m=Bo(1,{duration:r,easing:Te})),T=m.subscribe(g=>{g<=0&&N.removeToast(a)}),so(async()=>{await m.set(0)})),mo(()=>{T(),N.removeToast(a)});const E=()=>N.removeToast(a);return o.$$set=g=>{"position"in g&&e(0,l=g.position),"toast"in g&&e(9,_=g.toast)},[l,m,i,f,a,b,O,w,k,_,E]}class Ho extends ge{constructor(t){super(),be(this,t,qo,$o,Oe,{position:0,toast:9})}}function to(o,t,e){const i=o.slice();return i[6]=t[e],i}function eo(o,t){let e,i,c,n,l,_,f=It,r;return i=new Ho({props:{toast:t[6],position:t[0]}}),{key:o,first:null,c(){e=p("li"),ro(i.$$.fragment),c=C(),this.h()},l(a){e=v(a,"LI",{});var b=h(e);ao(i.$$.fragment,b),c=L(b),b.forEach(u),this.h()},h(){this.first=e},m(a,b){z(a,e,b),co(i,e,null),s(e,c),r=!0},p(a,b){t=a;const O={};b&4&&(O.toast=t[6]),b&1&&(O.position=t[0]),i.$set(O)},r(){_=e.getBoundingClientRect()},f(){bo(e),f(),Oo(e,_)},a(){f(),f=Eo(e,_,Mo,{duration:200})},i(a){r||(Et(i.$$.fragment,a),ve(()=>{r&&(l&&l.end(1),n=ko(e,No,t[3]()),n.start())}),r=!0)},o(a){wt(i.$$.fragment,a),n&&n.invalidate(),l=yo(e,Lo,{duration:200}),r=!1},d(a){a&&u(e),uo(i),a&&l&&l.end()}}}function Go(o){let t,e=[],i=new Map,c,n,l=o[2];const _=f=>f[6].id;for(let f=0;f<l.length;f+=1){let r=to(o,l,f),a=_(r);i.set(a,e[f]=eo(a,r))}return{c(){t=p("ul");for(let f=0;f<e.length;f+=1)e[f].c();this.h()},l(f){t=v(f,"UL",{class:!0});var r=h(t);for(let a=0;a<e.length;a+=1)e[a].l(r);r.forEach(u),this.h()},h(){d(t,"class",c="toast-container "+o[1]+" svelte-12tkr57")},m(f,r){z(f,t,r);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);n=!0},p(f,[r]){if(r&5){l=f[2],no();for(let a=0;a<e.length;a+=1)e[a].r();e=go(e,r,_,1,f,l,i,t,Io,eo,null,to);for(let a=0;a<e.length;a+=1)e[a].a();io()}(!n||r&2&&c!==(c="toast-container "+f[1]+" svelte-12tkr57"))&&d(t,"class",c)},i(f){if(!n){for(let r=0;r<l.length;r+=1)Et(e[r]);n=!0}},o(f){for(let r=0;r<e.length;r+=1)wt(e[r]);n=!1},d(f){f&&u(t);for(let r=0;r<e.length;r+=1)e[r].d()}}}function zo(o,t,e){let i;lo(o,N,r=>e(2,i=r));let{toastConfig:c={}}=t,n=N.positionOptions.TOP_RIGHT,l=N.positionOptions.BOTTOM_RIGHT,_;const f=()=>{if(_.includes("left"))return{x:-300};if(_.includes("right"))return{x:300};if(_==="bottom-middle")return{y:300};if(_==="top-middle")return{y:-300}};return so(()=>{N.init(c),c.position&&e(0,n=c.position),c.smPosition&&(l=c.smPosition);const r=()=>{e(1,_=window.innerWidth>640?c.position||n:c.smPosition||l)};window.addEventListener("resize",r),r();const b={...{error:{color:"#dc2626",bg:"#fed7d7"},success:{color:"#059669",bg:"#c6f6d5"},info:{color:"#065d9d",bg:"#bfdbfe"},warning:{color:"#d97706",bg:"#fef3c7"},neutral:{color:"#111827",bg:"#f3f4f6"}},...c.colorScheme};let O=document.querySelector(".toast-container");if(O instanceof HTMLElement)for(const[k,m]of Object.entries(b))O.style.setProperty(`--toast${w(k)}-color`,m.color),O.style.setProperty(`--toast${w(k)}-bg`,m.bg);function w(k){return k.charAt(0).toUpperCase()+k.slice(1)}return()=>{window.removeEventListener("resize",r)}}),o.$$set=r=>{"toastConfig"in r&&e(4,c=r.toastConfig)},[n,_,i,f,c]}class Fo extends ge{constructor(t){super(),be(this,t,zo,Go,Oe,{toastConfig:4})}}function oo(o){let t,e;return t=new Fo({props:{toastConfig:o[1]}}),{c(){ro(t.$$.fragment)},l(i){ao(t.$$.fragment,i)},m(i,c){co(t,i,c),e=!0},p(i,c){const n={};c&2&&(n.toastConfig=i[1]),t.$set(n)},i(i){e||(Et(t.$$.fragment,i),e=!0)},o(i){wt(t.$$.fragment,i),e=!1},d(i){uo(t,i)}}}function Wo(o){let t,e,i,c,n,l,_,f,r,a,b,O,w,k,m,T,E,g,V,A,B,D,S,M,H,X,Y,j,J,kt,K,Ut,Z,$t,x,qt,tt,Ht,et,Gt,zt,ot,gt,Ft,Wt,q,st,Jt,nt,Kt,it,Qt,lt,Xt,rt,Yt,at,Zt,xt,Q,ut,te,ee,yt,oe,se,$,ft,ne,ie,dt,le,re,_t,ae,ce,ht,ue,fe,pt,de,_e,vt,he,Lt,bt,Nt,pe,Ee,R=o[0]&&oo(o);return{c(){t=p("div"),e=p("div"),i=p("h2"),c=y("Toast Configuration"),n=C(),l=p("div"),_=p("label"),f=y("Max Toasts:"),r=C(),a=p("input"),b=C(),O=p("div"),w=p("label"),k=y("Duration (ms):"),m=C(),T=p("input"),E=C(),g=p("div"),V=p("label"),A=y("Auto Close:"),B=C(),D=p("input"),S=C(),M=p("div"),H=p("label"),X=y("Position:"),Y=C(),j=p("select"),J=p("option"),kt=y("Top Right"),K=p("option"),Ut=y("Top Left"),Z=p("option"),$t=y("Top Middle"),x=p("option"),qt=y("Bottom Right"),tt=p("option"),Ht=y("Bottom Left"),et=p("option"),Gt=y("Bottom Middle"),zt=C(),ot=p("div"),gt=p("label"),Ft=y("Small Screen Position:"),Wt=C(),q=p("select"),st=p("option"),Jt=y("Top Right"),nt=p("option"),Kt=y("Top Left"),it=p("option"),Qt=y("Top Middle"),lt=p("option"),Xt=y("Bottom Right"),rt=p("option"),Yt=y("Bottom Left"),at=p("option"),Zt=y("Bottom Middle"),xt=C(),Q=p("div"),ut=p("button"),te=y("Load New Config (Affects new toasts only)"),ee=C(),yt=p("h2"),oe=y("Toast Types"),se=C(),$=p("div"),ft=p("button"),ne=y("Success Toast"),ie=C(),dt=p("button"),le=y("Error Toast"),re=C(),_t=p("button"),ae=y("Info Toast"),ce=C(),ht=p("button"),ue=y("Warning Toast"),fe=C(),pt=p("button"),de=y("Processing Toast"),_e=C(),vt=p("button"),he=y("Neutral Toast"),Lt=C(),R&&R.c(),bt=ct(),this.h()},l(P){t=v(P,"DIV",{class:!0});var U=h(t);e=v(U,"DIV",{class:!0});var F=h(e);i=v(F,"H2",{});var ke=h(i);c=I(ke,"Toast Configuration"),ke.forEach(u),n=L(F),l=v(F,"DIV",{class:!0});var Mt=h(l);_=v(Mt,"LABEL",{for:!0});var ye=h(_);f=I(ye,"Max Toasts:"),ye.forEach(u),r=L(Mt),a=v(Mt,"INPUT",{type:!0,id:!0}),Mt.forEach(u),b=L(F),O=v(F,"DIV",{class:!0});var Bt=h(O);w=v(Bt,"LABEL",{for:!0});var Ie=h(w);k=I(Ie,"Duration (ms):"),Ie.forEach(u),m=L(Bt),T=v(Bt,"INPUT",{type:!0,id:!0}),Bt.forEach(u),E=L(F),g=v(F,"DIV",{class:!0});var Dt=h(g);V=v(Dt,"LABEL",{for:!0});var we=h(V);A=I(we,"Auto Close:"),we.forEach(u),B=L(Dt),D=v(Dt,"INPUT",{type:!0,id:!0}),Dt.forEach(u),S=L(F),M=v(F,"DIV",{class:!0});var St=h(M);H=v(St,"LABEL",{for:!0});var Pe=h(H);X=I(Pe,"Position:"),Pe.forEach(u),Y=L(St),j=v(St,"SELECT",{id:!0});var mt=h(j);J=v(mt,"OPTION",{});var Ce=h(J);kt=I(Ce,"Top Right"),Ce.forEach(u),K=v(mt,"OPTION",{});var Le=h(K);Ut=I(Le,"Top Left"),Le.forEach(u),Z=v(mt,"OPTION",{});var Ne=h(Z);$t=I(Ne,"Top Middle"),Ne.forEach(u),x=v(mt,"OPTION",{});var Me=h(x);qt=I(Me,"Bottom Right"),Me.forEach(u),tt=v(mt,"OPTION",{});var Be=h(tt);Ht=I(Be,"Bottom Left"),Be.forEach(u),et=v(mt,"OPTION",{});var De=h(et);Gt=I(De,"Bottom Middle"),De.forEach(u),mt.forEach(u),St.forEach(u),zt=L(F),ot=v(F,"DIV",{class:!0});var Rt=h(ot);gt=v(Rt,"LABEL",{for:!0});var Se=h(gt);Ft=I(Se,"Small Screen Position:"),Se.forEach(u),Wt=L(Rt),q=v(Rt,"SELECT",{id:!0});var Tt=h(q);st=v(Tt,"OPTION",{});var Re=h(st);Jt=I(Re,"Top Right"),Re.forEach(u),nt=v(Tt,"OPTION",{});var Ae=h(nt);Kt=I(Ae,"Top Left"),Ae.forEach(u),it=v(Tt,"OPTION",{});var Ve=h(it);Qt=I(Ve,"Top Middle"),Ve.forEach(u),lt=v(Tt,"OPTION",{});var je=h(lt);Xt=I(je,"Bottom Right"),je.forEach(u),rt=v(Tt,"OPTION",{});var Ue=h(rt);Yt=I(Ue,"Bottom Left"),Ue.forEach(u),at=v(Tt,"OPTION",{});var $e=h(at);Zt=I($e,"Bottom Middle"),$e.forEach(u),Tt.forEach(u),Rt.forEach(u),F.forEach(u),xt=L(U),Q=v(U,"DIV",{class:!0});var Ot=h(Q);ut=v(Ot,"BUTTON",{class:!0});var qe=h(ut);te=I(qe,"Load New Config (Affects new toasts only)"),qe.forEach(u),ee=L(Ot),yt=v(Ot,"H2",{});var He=h(yt);oe=I(He,"Toast Types"),He.forEach(u),se=L(Ot),$=v(Ot,"DIV",{class:!0});var W=h($);ft=v(W,"BUTTON",{class:!0});var Ge=h(ft);ne=I(Ge,"Success Toast"),Ge.forEach(u),ie=L(W),dt=v(W,"BUTTON",{class:!0});var ze=h(dt);le=I(ze,"Error Toast"),ze.forEach(u),re=L(W),_t=v(W,"BUTTON",{class:!0});var Fe=h(_t);ae=I(Fe,"Info Toast"),Fe.forEach(u),ce=L(W),ht=v(W,"BUTTON",{class:!0});var We=h(ht);ue=I(We,"Warning Toast"),We.forEach(u),fe=L(W),pt=v(W,"BUTTON",{class:!0});var Je=h(pt);de=I(Je,"Processing Toast"),Je.forEach(u),_e=L(W),vt=v(W,"BUTTON",{class:!0});var Ke=h(vt);he=I(Ke,"Neutral Toast"),Ke.forEach(u),W.forEach(u),Ot.forEach(u),U.forEach(u),Lt=L(P),R&&R.l(P),bt=ct(),this.h()},h(){d(_,"for","duration"),d(a,"type","number"),d(a,"id","maxtoasts"),d(l,"class","config-field svelte-11670ov"),d(w,"for","duration"),d(T,"type","number"),d(T,"id","duration"),d(O,"class","config-field svelte-11670ov"),d(V,"for","autoClose"),d(D,"type","checkbox"),d(D,"id","autoClose"),d(g,"class","config-field svelte-11670ov"),d(H,"for","position"),J.__value=N.positionOptions.TOP_RIGHT,J.value=J.__value,K.__value=N.positionOptions.TOP_LEFT,K.value=K.__value,Z.__value=N.positionOptions.TOP_MIDDLE,Z.value=Z.__value,x.__value=N.positionOptions.BOTTOM_RIGHT,x.value=x.__value,tt.__value=N.positionOptions.BOTTOM_LEFT,tt.value=tt.__value,et.__value=N.positionOptions.BOTTOM_MIDDLE,et.value=et.__value,d(j,"id","position"),o[1].position===void 0&&ve(()=>o[7].call(j)),d(M,"class","config-field svelte-11670ov"),d(gt,"for","smPosition"),st.__value=N.positionOptions.TOP_RIGHT,st.value=st.__value,nt.__value=N.positionOptions.TOP_LEFT,nt.value=nt.__value,it.__value=N.positionOptions.TOP_MIDDLE,it.value=it.__value,lt.__value=N.positionOptions.BOTTOM_RIGHT,lt.value=lt.__value,rt.__value=N.positionOptions.BOTTOM_LEFT,rt.value=rt.__value,at.__value=N.positionOptions.BOTTOM_MIDDLE,at.value=at.__value,d(q,"id","smPosition"),o[1].smPosition===void 0&&ve(()=>o[8].call(q)),d(ot,"class","config-field svelte-11670ov"),d(e,"class","config-section svelte-11670ov"),d(ut,"class","svelte-11670ov"),d(ft,"class","svelte-11670ov"),d(dt,"class","svelte-11670ov"),d(_t,"class","svelte-11670ov"),d(ht,"class","svelte-11670ov"),d(pt,"class","svelte-11670ov"),d(vt,"class","svelte-11670ov"),d($,"class","toast-buttons svelte-11670ov"),d(Q,"class","toasts-section svelte-11670ov"),d(t,"class","container svelte-11670ov")},m(P,U){z(P,t,U),s(t,e),s(e,i),s(i,c),s(e,n),s(e,l),s(l,_),s(_,f),s(l,r),s(l,a),At(a,o[1].maxToasts),s(e,b),s(e,O),s(O,w),s(w,k),s(O,m),s(O,T),At(T,o[1].duration),s(e,E),s(e,g),s(g,V),s(V,A),s(g,B),s(g,D),D.checked=o[1].autoClose,s(e,S),s(e,M),s(M,H),s(H,X),s(M,Y),s(M,j),s(j,J),s(J,kt),s(j,K),s(K,Ut),s(j,Z),s(Z,$t),s(j,x),s(x,qt),s(j,tt),s(tt,Ht),s(j,et),s(et,Gt),Vt(j,o[1].position,!0),s(e,zt),s(e,ot),s(ot,gt),s(gt,Ft),s(ot,Wt),s(ot,q),s(q,st),s(st,Jt),s(q,nt),s(nt,Kt),s(q,it),s(it,Qt),s(q,lt),s(lt,Xt),s(q,rt),s(rt,Yt),s(q,at),s(at,Zt),Vt(q,o[1].smPosition,!0),s(t,xt),s(t,Q),s(Q,ut),s(ut,te),s(Q,ee),s(Q,yt),s(yt,oe),s(Q,se),s(Q,$),s($,ft),s(ft,ne),s($,ie),s($,dt),s(dt,le),s($,re),s($,_t),s(_t,ae),s($,ce),s($,ht),s(ht,ue),s($,fe),s($,pt),s(pt,de),s($,_e),s($,vt),s(vt,he),z(P,Lt,U),R&&R.m(P,U),z(P,bt,U),Nt=!0,pe||(Ee=[G(a,"input",o[4]),G(T,"input",o[5]),G(D,"change",o[6]),G(j,"change",o[7]),G(q,"change",o[8]),G(ut,"click",o[3]),G(ft,"click",o[9]),G(dt,"click",o[10]),G(_t,"click",o[11]),G(ht,"click",o[12]),G(pt,"click",o[13]),G(vt,"click",o[14])],pe=!0)},p(P,[U]){U&2&&jt(a.value)!==P[1].maxToasts&&At(a,P[1].maxToasts),U&2&&jt(T.value)!==P[1].duration&&At(T,P[1].duration),U&2&&(D.checked=P[1].autoClose),U&2&&Vt(j,P[1].position),U&2&&Vt(q,P[1].smPosition),P[0]?R?(R.p(P,U),U&1&&Et(R,1)):(R=oo(P),R.c(),Et(R,1),R.m(bt.parentNode,bt)):R&&(no(),wt(R,1,1,()=>{R=null}),io())},i(P){Nt||(Et(R),Nt=!0)},o(P){wt(R),Nt=!1},d(P){P&&u(t),P&&u(Lt),R&&R.d(P),P&&u(bt),pe=!1,wo(Ee)}}}function Jo(o,t,e){let i;lo(o,N,V=>e(15,i=V));let c=!0,n={duration:5e3,autoClose:!0,position:N.positionOptions.TOP_RIGHT,smPosition:N.positionOptions.BOTTOM_MIDDLE,maxToasts:4,colorScheme:{error:{color:"#dc2626",bg:"#fed7d7"},success:{color:"#059669",bg:"#c6f6d5"},info:{color:"#065d9d",bg:"#bfdbfe"},warning:{color:"#d97706",bg:"#fef3c7"},neutral:{color:"#111827",bg:"#f3f4f6"}}};function l(V,A,B,D,S){N[V](A,B,D,S)}function _(){i.forEach(A=>N.removeToast(A.id)),N.init(n),e(0,c=!1),e(0,c=!0);const V=new Event("resize");window.dispatchEvent(V)}function f(){n.maxToasts=jt(this.value),e(1,n)}function r(){n.duration=jt(this.value),e(1,n)}function a(){n.autoClose=this.checked,e(1,n)}function b(){n.position=Ze(this),e(1,n)}function O(){n.smPosition=Ze(this),e(1,n)}return[c,n,l,_,f,r,a,b,O,()=>l("success","Success","This is a success toast."),()=>l("error","Error","This is an error toast."),()=>l("info","Info","This is an info toast."),()=>l("warning","Warning","This is a warning toast."),()=>l("processing","Processing","This is a processing toast."),()=>l("neutral","Neutral","This is a neutral toast.")]}class Yo extends ge{constructor(t){super(),be(this,t,Jo,Wo,Oe,{})}}export{Yo as component,Xo as universal};
