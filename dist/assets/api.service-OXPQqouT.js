import{B as it,G as at,e as ct,f as lt,C as ut,a as ae,o as ft,g as dt,h as Fe,j as ht,t as P,i as N,c as T,k as pt,M as ne,I as mt,S as M,s as yt,b as gt,m as wt}from"./index-CwKXn8cM.js";const bt=e=>{let t=[];return e.split(`
`).map(r=>{const s=r.indexOf(":"),o=r.substring(s+2);t.push(o)}),t},Et=()=>new Date,St=e=>{const t=e.getHours(),n=e.getMinutes(),r=t>=12?"PM":"AM",s=t%12||12,o=n<10?`0${n}`:n;return`${s}:${o} ${r}`};var k=(e=>(e.BOT="bot",e.USER="user",e))(k||{}),R=(e=>(e[e.BING=it]="BING",e[e.GPT=at]="GPT",e[e.GEMINI=ct]="GEMINI",e[e.BARD=lt]="BARD",e[e.CHECK_STATUS=ut]="CHECK_STATUS",e))(R||{}),B=(e=>(e.GET="get",e.POST="post",e.PUT="put",e.PATCH="patch",e.DELETE="delete",e))(B||{});const Rt=""+new URL("notif-BFeSb6fL.mp3",import.meta.url).href;var Tt=P("<audio class=hidden>");function lr(e){const[t,n]=ae(null);return ft(()=>{const r=new Audio(Rt);return r.loop=!1,r.volume=.1,n(r),()=>{r.pause(),r.src=""}}),dt(()=>{const r=t();r&&(r.pause(),r.src="")}),Fe(async()=>{const r=t();r&&e.isPlaying&&(e.setIsPlaying(!1),await r.play())}),(()=>{var r=Tt();return ht(t,r),r})()}const Ot=""+new URL("bot-logo-R_9tsK2w.jpg",import.meta.url).href;var At=P('<div class=avatar><div class="w-[2rem] rounded-full"><img alt="Avatar Tailwind CSS Component">'),Ct=P('<span class="cursor cursor-blink">|'),Pt=P('<div class=chat-bubble><div class=chat-header><time class="text-xs opacity-50">'),xt=P('<span class="loading loading-dots loading-md">'),_t=P('<div class="chat chat-start">'),Nt=P('<div class="overflow-y-auto h-[50vh] lg:h-[31rem]">'),Se=P('<div class="chat chat-start mt-[2vh]">'),Bt=P('<div class="chat chat-end">');function ur(e){const[t,n]=ae(!1),[r,s]=ae("");Fe(()=>{const c=e.chat;if(c.length<1)return;e.isLoading&&n(!0);const u=c[c.length-1];if(u.sender===k.BOT){n(!0);let f=0;const l=u.messages.split(" "),d=setInterval(()=>{f===l.length?(clearInterval(d),n(!1)):(s(l.slice(0,f).join(" ")),f++)},Math.floor(Math.random()*100)+35);return()=>clearInterval(d)}u.sender===k.USER&&n(!1)});const o=()=>St(Et()),i=c=>[T(M,{get when(){return c.isBot},get children(){var u=At(),f=u.firstChild,l=f.firstChild;return yt(l,"src",Ot),u}}),(()=>{var u=Pt(),f=u.firstChild,l=f.firstChild;return N(u,()=>c.children,f),N(u,T(M,{get when(){return gt(()=>!!(c.isLatest&&c.isBot))()&&t()},get children(){return Ct()}}),f),N(l,o),u})()];return(()=>{var c=Nt();return N(c,T(mt,{get each(){return e.chat},children:(u,f)=>T(pt,{get children(){return[T(ne,{get when(){return u().sender===k.BOT&&f!==e.chat.length-1},get children(){var l=Se();return N(l,T(i,{isBot:!0,get children(){return u().messages}})),l}}),T(ne,{get when(){return u().sender===k.BOT&&f===e.chat.length-1},get children(){var l=Se();return N(l,T(i,{isBot:!0,isLatest:!0,get children(){return r()}})),l}}),T(ne,{get when(){return u().sender===k.USER},get children(){var l=Bt();return N(l,T(i,{get children(){return u().messages}})),l}})]}})}),null),N(c,T(M,{get when(){return e.isLoading},get children(){var u=_t();return N(u,T(i,{isBot:!0,get children(){return xt()}})),u}}),null),c})()}var Lt=P('<div class="flex justify-center items-center h-[50vh]"><div class="flex flex-col items-center gap-4"><span class="text-2xl font-bold text-red-500">API Bot is Offline</span><span class="text-lg font-semibold text-gray-500">Please try again later');function fr(e){return T(M,{get when(){return e.isMounted&&!e.isApiOnline},get children(){return Lt()}})}var Ut=P('<div class="flex justify-center items-center h-[50vh]"><span class="loading loading-lg"></span><span class="text-lg font-semibold text-gray-500 ml-2">Fetching API...');function dr(e){return T(M,{get when(){return!e.isMounted},get children(){return Ut()}})}function Ie(e,t){return function(){return e.apply(t,arguments)}}const{toString:Dt}=Object.prototype,{getPrototypeOf:me}=Object,Q=(e=>t=>{const n=Dt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>Q(t)===e),Z=e=>t=>typeof t===e,{isArray:j}=Array,G=Z("undefined");function Ft(e){return e!==null&&!G(e)&&e.constructor!==null&&!G(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=x("ArrayBuffer");function It(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const kt=Z("string"),A=Z("function"),je=Z("number"),Y=e=>e!==null&&typeof e=="object",jt=e=>e===!0||e===!1,K=e=>{if(Q(e)!=="object")return!1;const t=me(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},vt=x("Date"),Ht=x("File"),qt=x("Blob"),$t=x("FileList"),Mt=e=>Y(e)&&A(e.pipe),Gt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=Q(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},zt=x("URLSearchParams"),[Jt,Kt,Vt,Wt]=["ReadableStream","Request","Response","Headers"].map(x),Xt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const He=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!G(e)&&e!==He;function ce(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ve(t,s)||s;K(t[o])&&K(r)?t[o]=ce(t[o],r):K(r)?t[o]=ce({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&z(arguments[r],n);return t}const Qt=(e,t,n,{allOwnKeys:r}={})=>(z(t,(s,o)=>{n&&A(s)?e[o]=Ie(s,n):e[o]=s},{allOwnKeys:r}),e),Zt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},en=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&me(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},tn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},nn=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},rn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&me(Uint8Array)),sn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},on=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},an=x("HTMLFormElement"),cn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ln=x("RegExp"),$e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};z(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},un=e=>{$e(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},dn=()=>{},hn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,re="abcdefghijklmnopqrstuvwxyz",Te="0123456789",Me={DIGIT:Te,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+Te},pn=(e=16,t=Me.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mn(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yn=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return z(r,(i,c)=>{const u=n(i,s+1);!G(u)&&(o[c]=u)}),t[s]=void 0,o}}return r};return n(e,0)},gn=x("AsyncFunction"),wn=e=>e&&(Y(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:j,isArrayBuffer:ke,isBuffer:Ft,isFormData:Gt,isArrayBufferView:It,isString:kt,isNumber:je,isBoolean:jt,isObject:Y,isPlainObject:K,isReadableStream:Jt,isRequest:Kt,isResponse:Vt,isHeaders:Wt,isUndefined:G,isDate:vt,isFile:Ht,isBlob:qt,isRegExp:ln,isFunction:A,isStream:Mt,isURLSearchParams:zt,isTypedArray:rn,isFileList:$t,forEach:z,merge:ce,extend:Qt,trim:Xt,stripBOM:Zt,inherits:Yt,toFlatObject:en,kindOf:Q,kindOfTest:x,endsWith:tn,toArray:nn,forEachEntry:sn,matchAll:on,isHTMLForm:an,hasOwnProperty:Re,hasOwnProp:Re,reduceDescriptors:$e,freezeMethods:un,toObjectSet:fn,toCamelCase:cn,noop:dn,toFiniteNumber:hn,findKey:ve,global:He,isContextDefined:qe,ALPHABET:Me,generateString:pn,isSpecCompliantForm:mn,toJSONObject:yn,isAsyncFn:gn,isThenable:wn};function p(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ge=p.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(p,ze);Object.defineProperty(Ge,"isAxiosError",{value:!0});p.from=(e,t,n,r,s,o)=>{const i=Object.create(Ge);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),p.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const bn=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function En(e){return a.isArray(e)&&!e.some(le)}const Sn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!a.isUndefined(E[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!u&&a.isBlob(h))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,m,E){let S=h;if(h&&!E&&typeof h=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&En(h)||(a.isFileList(h)||a.endsWith(m,"[]"))&&(S=a.toArray(h)))return m=Je(m),S.forEach(function(g,H){!(a.isUndefined(g)||g===null)&&t.append(i===!0?Oe([m],H,o):i===null?m:m+"[]",f(g))}),!1}return le(h)?!0:(t.append(Oe(E,m,o),f(h)),!1)}const d=[],w=Object.assign(Sn,{defaultVisitor:l,convertValue:f,isVisitable:le});function y(h,m){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(h),a.forEach(h,function(S,_){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(_)?_.trim():_,m,w))===!0&&y(S,m?m.concat(_):[_])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ye(e,t){this._pairs=[],e&&ee(e,this,t)}const Ke=ye.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Ae)}:Ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Rn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||Rn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ye(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ce{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tn=typeof URLSearchParams<"u"?URLSearchParams:ye,On=typeof FormData<"u"?FormData:null,An=typeof Blob<"u"?Blob:null,Cn={isBrowser:!0,classes:{URLSearchParams:Tn,FormData:On,Blob:An},protocols:["http","https","file","blob","url","data"]},ge=typeof window<"u"&&typeof document<"u",Pn=(e=>ge&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),xn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_n=ge&&window.location.href||"http://localhost",Nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ge,hasStandardBrowserEnv:Pn,hasStandardBrowserWebWorkerEnv:xn,origin:_n},Symbol.toStringTag,{value:"Module"})),C={...Nn,...Cn};function Bn(e,t){return ee(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ln(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Un(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Xe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),u=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Un(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ln(r),s,n,0)}),n}return null}function Dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ee(c?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Dn(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?p.from(c,p.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{J.headers[e]={}});const Fn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),In=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Fn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Pe=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function kn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function vn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Hn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class O{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,u,f){const l=q(u);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||f===!0||f===void 0&&s[d]!==!1)&&(s[d||u]=V(c))}const i=(c,u)=>a.forEach(c,(f,l)=>o(f,l,u));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!jn(t))i(In(t),n);else if(a.isHeaders(t))for(const[c,u]of t.entries())o(u,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return kn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||se(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||se(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||se(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const c=t?vn(o):String(o).trim();c!==o&&delete n[o],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Pe]=this[Pe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(Hn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(O);function oe(e,t){const n=this||J,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Qe(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,p,{__CANCEL__:!0});function Ze(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function qn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $n(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=r[o];i||(i=f),n[s]=u,r[s]=f;let d=o,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const y=l&&f-l;return y?Math.round(w*1e3/y):void 0}}function Mn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const W=(e,t,n=3)=>{let r=0;const s=$n(50,250);return Mn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,u=i-r,f=s(u),l=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:u,rate:f||void 0,estimated:f&&c&&l?(c-i)/f:void 0,event:o,lengthComputable:c!=null};d[t?"download":"upload"]=!0,e(d)},n)},Gn=C.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),zn=C.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!Jn(t)?Kn(e,t):t}const xe=e=>e instanceof O?{...e}:e;function F(e,t){t=t||{};const n={};function r(f,l,d){return a.isPlainObject(f)&&a.isPlainObject(l)?a.merge.call({caseless:d},f,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(f,l,d){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f,d)}else return r(f,l,d)}function o(f,l){if(!a.isUndefined(l))return r(void 0,l)}function i(f,l){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function c(f,l,d){if(d in t)return r(f,l);if(d in e)return r(void 0,f)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,l)=>s(xe(f),xe(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=u[l]||s,w=d(e[l],t[l],l);a.isUndefined(w)&&d!==c||(n[l]=w)}),n}const et=e=>{const t=F({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=O.from(i),t.url=Ve(Ye(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let u;if(a.isFormData(n)){if(C.hasStandardBrowserEnv||C.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((u=i.getContentType())!==!1){const[f,...l]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([f||"multipart/form-data",...l].join("; "))}}if(C.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Gn(t.url))){const f=s&&o&&zn.read(o);f&&i.set(s,f)}return t},Vn=typeof XMLHttpRequest<"u",Wn=Vn&&function(e){return new Promise(function(n,r){const s=et(e);let o=s.data;const i=O.from(s.headers).normalize();let{responseType:c}=s,u;function f(){s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function d(){if(!l)return;const y=O.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Ze(function(S){n(S),f()},function(S){r(S),f()},m),l=null}"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new p("Request aborted",p.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let h=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||We;s.timeoutErrorMessage&&(h=s.timeoutErrorMessage),r(new p(h,m.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(h,m){l.setRequestHeader(m,h)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",W(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",W(s.onUploadProgress)),(s.cancelToken||s.signal)&&(u=y=>{l&&(r(!y||y.type?new v(null,e,l):y),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const w=qn(s.url);if(w&&C.protocols.indexOf(w)===-1){r(new p("Unsupported protocol "+w+":",p.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Xn=(e,t)=>{let n=new AbortController,r;const s=function(u){if(!r){r=!0,i();const f=u instanceof Error?u:this.reason;n.abort(f instanceof p?f:new v(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{s(new p(`timeout ${t} of ms exceeded`,p.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",s):u.unsubscribe(s))}),e=null)};e.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},Qn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Zn=async function*(e,t,n){for await(const r of e)yield*Qn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},_e=(e,t,n,r,s)=>{const o=Zn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:u,value:f}=await o.next();if(u){c.close(),r();return}let l=f.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(f))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Ne=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",tt=te&&typeof ReadableStream=="function",ue=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Yn=tt&&(()=>{let e=!1;const t=new Request(C.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Be=64*1024,fe=tt&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),X={stream:fe&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!X[t]&&(X[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new p(`Response type '${t}' is not supported`,p.ERR_NOT_SUPPORT,r)})})})(new Response);const er=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ue(e)).byteLength},tr=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??er(t)},nr=te&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:u,responseType:f,headers:l,withCredentials:d="same-origin",fetchOptions:w}=et(e);f=f?(f+"").toLowerCase():"text";let[y,h]=s||o||i?Xn([s,o],i):[],m,E;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let _;try{if(u&&Yn&&n!=="get"&&n!=="head"&&(_=await tr(l,r))!==0){let L=new Request(t,{method:"POST",body:r,duplex:"half"}),I;a.isFormData(r)&&(I=L.headers.get("content-type"))&&l.setContentType(I),L.body&&(r=_e(L.body,Be,Ne(_,W(u)),null,ue))}a.isString(d)||(d=d?"cors":"omit"),E=new Request(t,{...w,signal:y,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let g=await fetch(E);const H=fe&&(f==="stream"||f==="response");if(fe&&(c||H)){const L={};["status","statusText","headers"].forEach(Ee=>{L[Ee]=g[Ee]});const I=a.toFiniteNumber(g.headers.get("content-length"));g=new Response(_e(g.body,Be,c&&Ne(I,W(c,!0)),H&&S,ue),L)}f=f||"text";let ot=await X[a.findKey(X,f)||"text"](g,e);return!H&&S(),h&&h(),await new Promise((L,I)=>{Ze(L,I,{data:ot,headers:O.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:E})})}catch(g){throw S(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new p("Network Error",p.ERR_NETWORK,e,E),{cause:g.cause||g}):p.from(g,g&&g.code,e,E)}}),de={http:bn,xhr:Wn,fetch:nr};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,rr=e=>a.isFunction(e)||e===null||e===!1,nt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!rr(n)&&(r=de[(i=String(n)).toLowerCase()],r===void 0))throw new p(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Le).join(`
`):" "+Le(o[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:de};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function Ue(e){return ie(e),e.headers=O.from(e.headers),e.data=oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nt.getAdapter(e.adapter||J.adapter)(e).then(function(r){return ie(e),r.data=oe.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Qe(r)||(ie(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const rt="1.7.2",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const De={};we.transitional=function(t,n,r){function s(o,i){return"[Axios v"+rt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new p(s(i," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!De[i]&&(De[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function sr(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],u=c===void 0||i(c,o,e);if(u!==!0)throw new p("option "+o+" must be "+u,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+o,p.ERR_BAD_OPTION)}}const he={assertOptions:sr,validators:we},U=he.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:he.assertOptions(s,{encode:U.function,serialize:U.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=O.concat(i,o);const c=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,d=0,w;if(!u){const h=[Ue.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,f),w=h.length,l=Promise.resolve(n);d<w;)l=l.then(h[d++],h[d++]);return l}w=c.length;let y=n;for(d=0;d<w;){const h=c[d++],m=c[d++];try{y=h(y)}catch(E){m.call(this,E);break}}try{l=Ue.call(this,y)}catch(h){return Promise.reject(h)}for(d=0,w=f.length;d<w;)l=l.then(f[d++],f[d++]);return l}getUri(t){t=F(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new v(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}function or(e){return function(n){return e.apply(null,n)}}function ir(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function st(e){const t=new D(e),n=Ie(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return st(F(e,s))},n}const b=st(J);b.Axios=D;b.CanceledError=v;b.CancelToken=be;b.isCancel=Qe;b.VERSION=rt;b.toFormData=ee;b.AxiosError=p;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=or;b.isAxiosError=ir;b.mergeConfig=F;b.AxiosHeaders=O;b.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=nt.getAdapter;b.HttpStatusCode=pe;b.default=b;const ar=(e=R.GPT)=>{let t=R.GPT.valueOf();switch(e){case R.GPT:t=R.GPT.valueOf();break;case R.BARD:t=R.BARD.valueOf();break;case R.BING:t=R.BING.valueOf();break;case R.GEMINI:t=R.GEMINI.valueOf();break;case R.CHECK_STATUS:t=R.CHECK_STATUS.valueOf();break;default:t=R.GPT.valueOf();break}return b.create({baseURL:String(t),headers:{Accept:"*/*","Content-Type":"application/json"}})},$=async(e,t=B.GET)=>{const n=wt({server:R.GPT,name:"Server",headers:{}},e),r={headers:{...n.headers},params:n.params,responseType:"json"},s=ar(n.server);try{let o;if(t==B.GET||t==B.DELETE?o=await s[t.valueOf()](n.url,r):o=await s[t.valueOf()](n.url,n.data,r),n.success)n.success(o);else{const i=o.data;console.log(`[${n.name}] ${i.message}`)}}catch(o){if(console.log(o),n.error&&n.error(o.response),o.response){const i=o.response.data;if(i.data&&i.data.length>0){const c=bt(i.data[0]);for(let u=0;u<c.length;u++)console.log(`[${n.name}] ${c[u]}`)}}}finally{n.finally&&n.finally()}},hr={get:async e=>{await $(e,B.GET)},post:async e=>{await $(e,B.POST)},put:async e=>{await $(e,B.PUT)},patch:async e=>{await $(e,B.PATCH)},delete:async e=>{await $(e,B.DELETE)}};export{lr as A,dr as C,k as E,ur as a,fr as b,hr as c,R as d};
