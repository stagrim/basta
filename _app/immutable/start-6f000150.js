import{S as ot,i as st,s as it,a as lt,e as F,c as ct,b as J,g as de,t as B,d as he,f as H,h as M,j as ft,o as Ae,k as ut,l as dt,m as ht,n as be,p as q,q as pt,r as mt,u as _t,v as Y,w as X,x as Ue,y as Z,z as x,A as fe}from"./chunks/index-e6287bae.js";import{S as tt,I as C,g as Ke,f as ze,a as Ee,b as ue,s as V,i as We,c as ne,P as Ye,d as gt,e as yt,h as wt}from"./chunks/singletons-57864522.js";function vt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(r,e){const n=new URL(r);for(const i of kt){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Lt="/__data.json";function It(r){return r.replace(/\/$/,"")+Lt}function At(...r){let e=5381;for(const n of r)if(typeof n=="string"){let i=n.length;for(;i;)e=e*33^n.charCodeAt(--i)}else if(ArrayBuffer.isView(n)){const i=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=i.length;for(;o;)e=e*33^i[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete($e(r)),pe(r,e));const ae=new Map;function Pt(r,e){const n=$e(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:o,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return pe(r,e)}function Ot(r,e,n){if(ae.size>0){const i=$e(r,n),o=ae.get(i);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);ae.delete(i)}}return pe(e,n)}function $e(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),i+=`[data-hash="${At(...o)}"]`}return i}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(i=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const y=Ut.exec(_);if(!y)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,j,D]=y;return e.push({name:j,matcher:D,optional:!!w,rest:!!R,chained:R?m===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter(Nt)}function Tt(r,e,n){const i={},o=r.slice(1);let d=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=o[t-d];if(f.chained&&f.rest&&d){i[f.name]=o.slice(t-d,t+1).filter(m=>m).join("/"),d=0;continue}if(_===void 0){f.rest&&(i[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){i[f.name]=_;continue}if(f.optional&&f.chained){d++;continue}return}if(!d)return i}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[_,m,y]])=>{const{pattern:w,params:R}=$t(f),j={id:f,exec:D=>{const I=w.exec(D);if(I)return Tt(I,R,i)},errors:[1,...y||[]].map(D=>r[D]),layouts:[0,...m||[]].map(t),leaf:d(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const _=f<0;return _&&(f=~f),[_,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function Ct(r){let e,n,i;var o=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Y(o,d(r))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{x(m,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),H(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&H(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&M(n),e&&x(e,t)}}}function qt(r){let e,n,i;var o=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return o&&(e=Y(o,d(r))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{x(m,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),H(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&H(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&M(n),e&&x(e,t)}}}function Vt(r){let e,n,i;var o=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Y(o,d(r))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{x(m,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),H(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&H(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&M(n),e&&x(e,t)}}}function Xe(r){let e,n=r[5]&&Ze(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ht(e);n&&n.l(o),o.forEach(M),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,o){J(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&M(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=pt(r[6])},l(n){e=mt(n,r[6])},m(n,i){J(n,e,i)},p(n,i){i&64&&_t(e,n[6])},d(n){n&&M(e)}}}function Ft(r){let e,n,i,o,d;const t=[qt,Ct],f=[];function _(y,w){return y[0][1]?0:1}e=_(r),n=f[e]=t[e](r);let m=r[4]&&Xe(r);return{c(){n.c(),i=lt(),m&&m.c(),o=F()},l(y){n.l(y),i=ct(y),m&&m.l(y),o=F()},m(y,w){f[e].m(y,w),J(y,i,w),m&&m.m(y,w),J(y,o,w),d=!0},p(y,[w]){let R=e;e=_(y),e===R?f[e].p(y,w):(de(),B(f[R],1,1,()=>{f[R]=null}),he(),n=f[e],n?n.p(y,w):(n=f[e]=t[e](y),n.c()),H(n,1),n.m(i.parentNode,i)),y[4]?m?m.p(y,w):(m=Xe(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(H(n),d=!0)},o(y){B(n),d=!1},d(y){f[e].d(y),y&&M(i),m&&m.d(y),y&&M(o)}}}function Bt(r,e,n){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ft(i.page.notify);let m=!1,y=!1,w=null;return Ae(()=>{const R=i.page.subscribe(()=>{m&&(n(5,y=!0),n(6,w=document.title||"untitled page"))});return n(4,m=!0),R}),r.$$set=R=>{"stores"in R&&n(7,i=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(o)},[d,t,f,_,m,y,w,i,o]}class Ht extends ot{constructor(e){super(),st(this,e,Bt,Ft,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Mt="modulepreload",Gt=function(r,e){return new URL(r,e).href},xe={},Se=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Gt(d,i),d in xe)return;xe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let y=o.length-1;y>=0;y--){const w=o[y];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Mt,t||(m.as="script",m.crossOrigin=""),m.href=d,document.head.appendChild(m),t)return new Promise((y,w)=>{m.addEventListener("load",y),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Jt={},me=[()=>Se(()=>import("./chunks/0-09befdda.js"),["./chunks/0-09befdda.js","./components/layout.svelte-33a2617f.js","./chunks/index-e6287bae.js"],import.meta.url),()=>Se(()=>import("./chunks/1-aec2b2fd.js"),["./chunks/1-aec2b2fd.js","./components/error.svelte-05bd3786.js","./chunks/index-e6287bae.js","./chunks/singletons-57864522.js"],import.meta.url),()=>Se(()=>import("./chunks/2-8429d9ad.js"),["./chunks/2-8429d9ad.js","./chunks/_page-da46b06b.js","./components/pages/_page.svelte-ef1b367a.js","./chunks/index-e6287bae.js","./assets/_page-39068a45.css"],import.meta.url)],nt=[],Kt={"/":[2]},zt={handleError:({error:r})=>{console.error(r)}};let Pe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Wt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,o])=>[i,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,xt=-4,Qt=-5,en=-6;function tn(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(o,d=!1){if(o===Yt)return;if(o===Zt)return NaN;if(o===xt)return 1/0;if(o===Qt)return-1/0;if(o===en)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const m=new Map;n[o]=m;for(let w=1;w<t.length;w+=2)m.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[o]=y;for(let w=1;w<t.length;w+=2)y[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const m=t[_];m!==Xt&&(f[_]=i(m))}}else{const f={};n[o]=f;for(const _ in t){const m=t[_];f[_]=i(m)}}return n[o]}return i(0)}function nn(r){return r.filter(e=>e!=null)}const Re=Dt(me,nt,Kt,Jt),at=me[0],Oe=me[1];at();Oe();let W={};try{W=JSON.parse(sessionStorage[tt])}catch{}function Le(r){W[r]=ne()}function an({target:r,base:e}){var Me;const n=document.documentElement,i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,w=!1,R=!1,j=!1,D,I=(Me=history.state)==null?void 0:Me[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const _e=W[I];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,Ne,re;async function je(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),s=ie(a,!0);o=null,await De(s,a,[])}async function ge(a,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:u=!1},p,b){return typeof a=="string"&&(a=new URL(a,Ke(document))),ce({url:a,scroll:s?ne():null,keepfocus:l,redirect_chain:p,details:{state:h,replaceState:c},nav_token:b,accepted:()=>{u&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(a){const s=ie(a,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:s.id,promise:Ve(s).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function oe(...a){const c=Re.filter(l=>a.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function De(a,s,c,l,h={},u){var b,v;Ne=h;let p=a&&await Ve(a);if(p||(p=await He(s,{id:null},await te(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(a==null?void 0:a.url)||s,Ne!==h)return!1;if(p.type==="redirect")if(c.length>10||c.includes(s.pathname))p=await se({status:500,error:await te(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ge(new URL(p.location,s).href,{},[...c,s.pathname],h),!1;else((v=(b=p.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await V.updated.check()&&await ee(s);if(i.length=0,j=!1,y=!0,l&&l.details){const{details:g}=l,k=g.replaceState?0:1;g.state[C]=I+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",s)}if(o=null,_?(t=p.state,p.props.page&&(p.props.page.url=s),D.$set(p.props)):Ce(p),l){const{scroll:g,keepfocus:k}=l,{activeElement:O}=document;await fe();const T=document.activeElement!==O&&document.activeElement!==document.body;if(!k&&!T&&await Ie(),m){const L=s.hash&&document.querySelector(decodeURIComponent(s.hash));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await fe();m=!0,p.props.page&&(G=p.props.page),u&&u(),y=!1}function Ce(a){var l;t=a.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),G=a.props.page,D=new Ht({target:r,props:{...a.props,stores:V},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(c)),_=!0}async function Q({url:a,params:s,branch:c,status:l,error:h,route:u,form:p}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);a.pathname=vt(a.pathname,b),a.search=a.search;const v={type:"loaded",state:{url:a,params:s,branch:c,error:h,route:u},props:{components:nn(c).map(L=>L.node.component)}};p!==void 0&&(v.props.form=p);let g={},k=!G,O=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(g={...g,...E.data},k&&(v.props[`data_${O}`]=g),O+=1)}return(!t.url||a.href!==t.url.href||t.error!==h||p!==void 0&&p!==G.form||k)&&(v.props.page={error:h,params:s,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(a),form:p??null,data:k?g:G.data}),v}async function ye({loader:a,parent:s,url:c,params:l,route:h,server_data_node:u}){var g,k,O;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((g=v.universal)!=null&&g.load){let T=function(...E){for(const U of E){const{href:N}=new URL(U,c);b.dependencies.add(N)}};const L={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(E,U)=>(b.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:St(c,()=>{b.url=!0}),async fetch(E,U){let N;E instanceof Request?(N=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):N=E;const S=new URL(N,c).href;return T(S),_?Ot(N,S,U):Pt(N,U)},setHeaders:()=>{},depends:T,parent(){return b.parent=!0,s()}};p=await v.universal.load.call(null,L)??null,p=p?await Wt(p):null}return{node:v,loader:a,server:u,universal:(k=v.universal)!=null&&k.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:((O=v.universal)==null?void 0:O.trailingSlash)??(u==null?void 0:u.slash)}}function qe(a,s,c,l,h){if(j)return!0;if(!l)return!1;if(l.parent&&a||l.route&&s||l.url&&c)return!0;for(const u of l.params)if(h[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(p=>p(new URL(u))))return!0;return!1}function we(a,s){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?s??null:null}async function Ve({id:a,invalidating:s,url:c,params:l,route:h}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:u,layouts:p,leaf:b}=h,v=[...p,b];u.forEach(S=>S==null?void 0:S().catch(()=>{})),v.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?h.id!==t.route.id:!1,T=v.reduce((S,P,$)=>{var z;const A=t.branch[$],K=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||qe(S.some(Boolean),O,k,(z=A.server)==null?void 0:z.uses,l));return S.push(K),S},[]);if(T.some(Boolean)){try{g=await et(c,T)}catch(S){return se({status:500,error:await te(S,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(g.type==="redirect")return g}const L=g==null?void 0:g.nodes;let E=!1;const U=v.map(async(S,P)=>{var z;if(!S)return;const $=t.branch[P],A=L==null?void 0:L[P];if((!A||A.type==="skip")&&S[1]===($==null?void 0:$.loader)&&!qe(E,O,k,(z=$.universal)==null?void 0:z.uses,l))return $;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:S[1],url:c,params:l,route:h,parent:async()=>{var Je;const Ge={};for(let ve=0;ve<P;ve+=1)Object.assign(Ge,(Je=await U[ve])==null?void 0:Je.data);return Ge},server_data_node:we(A===void 0&&S[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const S of U)S.catch(()=>{});const N=[];for(let S=0;S<v.length;S+=1)if(v[S])try{N.push(await U[S])}catch(P){if(P instanceof Qe)return{type:"redirect",location:P.location};let $=500,A;if(L!=null&&L.includes(P))$=P.status??$,A=P.error;else if(P instanceof Pe)$=P.status,A=P.body;else{if(await V.updated.check())return await ee(c);A=await te(P,{params:l,url:c,route:{id:h.id}})}const K=await Fe(S,N,u);return K?await Q({url:c,params:l,branch:N.slice(0,K.idx).concat(K.node),status:$,error:A,route:h}):await He(c,{id:h.id},A,$)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:h,form:s?void 0:null})}async function Fe(a,s,c){for(;a--;)if(c[a]){let l=a;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:a,error:s,url:c,route:l}){const h={};let u=null;if(nt[0]===0)try{const g=await et(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;u=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ee(c)}const b=await ye({loader:at,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:we(u)}),v={node:await Oe(),loader:Oe,universal:null,server:null,data:null};return await Q({url:c,params:h,branch:[b,v],status:a,error:s,route:null})}function ie(a,s){if(We(a,e))return;const c=le(a);for(const l of Re){const h=l.exec(c);if(h)return{id:a.pathname+a.search,invalidating:s,route:l,params:Et(h),url:a}}}function le(a){return bt(a.pathname.slice(e.length)||"/")}function Be({url:a,type:s,intent:c,delta:l}){var b,v;let h=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:s};l!==void 0&&(u.delta=l);const p={...u,cancel:()=>{h=!0}};return w||d.before_navigate.forEach(g=>g(p)),h?null:u}async function ce({url:a,scroll:s,keepfocus:c,redirect_chain:l,details:h,type:u,delta:p,nav_token:b,accepted:v,blocked:g}){const k=ie(a,!1),O=Be({url:a,type:u,delta:p,intent:k});if(!O){g();return}Le(I),v(),w=!0,_&&V.navigating.set(O),await De(k,a,l,{scroll:s,keepfocus:c,details:h},b,()=>{w=!1,d.after_navigate.forEach(T=>T(O)),V.navigating.set(null)})}async function He(a,s,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:l,error:c,url:a,route:s}):await ee(a)}function ee(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(a),a=setTimeout(()=>{l(p,2)},20)});function s(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(oe(le(new URL(p.target.href))),c.unobserve(p.target))},{threshold:0});function l(u,p){const b=ze(u,n);if(!b)return;const{url:v,external:g}=Ee(b,e);if(g)return;const k=ue(b);k.reload||(p<=k.preload_data?Te(v):p<=k.preload_code&&oe(le(v)))}function h(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:b}=Ee(u,e);if(b)continue;const v=ue(u);v.reload||(v.preload_code===Ye.viewport&&c.observe(u),v.preload_code===Ye.eager&&oe(le(p)))}}d.after_navigate.push(h),h()}return{after_navigate:a=>{Ae(()=>(d.after_navigate.push(a),()=>{const s=d.after_navigate.indexOf(a);d.after_navigate.splice(s,1)}))},before_navigate:a=>{Ae(()=>(d.before_navigate.push(a),()=>{const s=d.before_navigate.indexOf(a);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(a,s={})=>ge(a,s,[]),invalidate:a=>{if(typeof a=="function")i.push(a);else{const{href:s}=new URL(a,location.href);i.push(c=>c.href===s)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async a=>{const s=new URL(a,Ke(document));await Te(s)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Fe(t.branch.length,c,l.errors);if(h){const u=await Q({url:s,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:a.status??500,error:a.error,route:l});t=u.state,D.$set(u.props),fe().then(Ie)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const s={form:a.data,page:{...G,form:a.data,status:a.status}};D.$set(s),a.type==="success"&&fe().then(Ie)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!w){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(I);try{sessionStorage[tt]=JSON.stringify(W)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=ze(s.composedPath()[0],n);if(!c)return;const{url:l,external:h,target:u}=Ee(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const p=ue(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||p.reload){Be({url:l,type:"link"})||s.preventDefault(),w=!0;return}const[v,g]=l.href.split("#");if(g!==void 0&&v===location.href.split("#")[0]){R=!0,Le(I),t.url=l,V.page.set({...G,url:l}),V.page.notify();return}ce({url:l,scroll:p.noscroll?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(u,e))return;const p=s.target,{noscroll:b,reload:v}=ue(p);if(v)return;s.preventDefault(),s.stopPropagation();const g=new FormData(p),k=l==null?void 0:l.getAttribute("name");k&&g.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),ce({url:u,scroll:b?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[C]){if(s.state[C]===I)return;const l=W[s.state[C]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[I]=ne(),I=s.state[C],scrollTo(l.x,l.y);return}const h=s.state[C]-I;ce({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[C]},blocked:()=>{history.go(-h)},type:"popstate",delta:h})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&V.navigating.set(null)})},_hydrate:async({status:a=200,error:s,node_ids:c,params:l,route:h,data:u,form:p})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=ie(b,!1)||{});let v;try{const g=c.map(async(k,O)=>{const T=u[O];return ye({loader:me[k],url:b,params:l,route:h,parent:async()=>{const L={};for(let E=0;E<O;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:we(T)})});v=await Q({url:b,params:l,branch:await Promise.all(g),status:a,error:s,form:p,route:Re.find(({id:k})=>k===h.id)??null})}catch(g){if(g instanceof Qe){await ee(new URL(g.location,location.href));return}v=await se({status:g instanceof Pe?g.status:500,error:await te(g,{url:b,params:l,route:h}),url:b,route:h})}Ce(v)}}}async function et(r,e){var d;const n=new URL(r);n.pathname=It(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await pe(n.href),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function te(r,e){return r instanceof Pe?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var o;i((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function cn({env:r,hydrate:e,paths:n,target:i,version:o}){gt(n),wt(o);const d=an({target:i,base:n.base});yt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{cn as start};
