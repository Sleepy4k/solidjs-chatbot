import{B as Qe,G as Ze,l as Ye,m as et,C as tt,n as nt,p as rt}from"./index-BdmIpMR6.js";var R=(e=>(e[e.BING=Qe]="BING",e[e.GPT=Ze]="GPT",e[e.GEMINI=Ye]="GEMINI",e[e.BARD=et]="BARD",e[e.CHECK_STATUS=tt]="CHECK_STATUS",e[e.CHANGELOG=nt]="CHANGELOG",e))(R||{}),N=(e=>(e.GET="get",e.POST="post",e.PUT="put",e.PATCH="patch",e.DELETE="delete",e))(N||{});const st=e=>{let t=[];return e.split(`
`).map(r=>{const s=r.indexOf(":"),o=r.substring(s+2);t.push(o)}),t};function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:ce}=Object,K=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>K(t)===e),V=e=>t=>typeof t===e,{isArray:F}=Array,H=V("undefined");function it(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=P("ArrayBuffer");function at(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const ct=V("string"),T=V("function"),xe=V("number"),$=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,M=e=>{if(K(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=P("Date"),ft=P("File"),dt=P("Blob"),pt=P("FileList"),ht=e=>$(e)&&T(e.pipe),mt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=K(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},yt=P("URLSearchParams"),[wt,bt,Et,Rt]=["ReadableStream","Request","Response","Headers"].map(P),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function _e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Le=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ue=e=>!H(e)&&e!==Le;function te(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&_e(t,s)||s;M(t[o])&&M(r)?t[o]=te(t[o],r):M(r)?t[o]=te({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,o)=>{n&&T(s)?e[o]=Ce(s,n):e[o]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ct=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Nt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},_t=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Lt=P("HTMLFormElement"),Ut=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Bt=P("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ft=e=>{Be(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Dt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},kt=()=>{},It=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Q="abcdefghijklmnopqrstuvwxyz",me="0123456789",Fe={DIGIT:me,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+me},jt=(e=16,t=Fe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ht(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return q(r,(i,c)=>{const f=n(i,s+1);!H(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Gt=P("AsyncFunction"),Mt=e=>e&&($(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:F,isArrayBuffer:Ne,isBuffer:it,isFormData:mt,isArrayBufferView:at,isString:ct,isNumber:xe,isBoolean:ut,isObject:$,isPlainObject:M,isReadableStream:wt,isRequest:bt,isResponse:Et,isHeaders:Rt,isUndefined:H,isDate:lt,isFile:ft,isBlob:dt,isRegExp:Bt,isFunction:T,isStream:ht,isURLSearchParams:yt,isTypedArray:Nt,isFileList:pt,forEach:q,merge:te,extend:gt,trim:St,stripBOM:Ot,inherits:Tt,toFlatObject:At,kindOf:K,kindOfTest:P,endsWith:Pt,toArray:Ct,forEachEntry:xt,matchAll:_t,isHTMLForm:Lt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Be,freezeMethods:Ft,toObjectSet:Dt,toCamelCase:Ut,noop:kt,toFiniteNumber:It,findKey:_e,global:Le,isContextDefined:Ue,ALPHABET:Fe,generateString:jt,isSpecCompliantForm:Ht,toJSONObject:qt,isAsyncFn:Gt,isThenable:Mt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=h.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(h,ke);Object.defineProperty(De,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(De);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const vt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ie(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(ne)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!a.isUndefined(S[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,S){let g=d;if(d&&!S&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&zt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(g=a.toArray(d)))return m=Ie(m),g.forEach(function(w,k){!(a.isUndefined(w)||w===null)&&t.append(i===!0?ye([m],k,o):i===null?m:m+"[]",l(w))}),!1}return ne(d)?!0:(t.append(ye(S,m,o),l(d)),!1)}const p=[],b=Object.assign(Jt,{defaultVisitor:u,convertValue:l,isVisitable:ne});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(g,C){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(C)?C.trim():C,m,b))===!0&&y(g,m?m.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&W(e,this,t)}const je=ue.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function He(e,t,n){if(!t)return e;const r=n&&n.encode||Kt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class be{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:ue,$t=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,Xt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:$t,Blob:Wt},protocols:["http","https","file","blob","url","data"]},le=typeof window<"u"&&typeof document<"u",Qt=(e=>le&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yt=le&&window.location.href||"http://localhost",en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:le,hasStandardBrowserEnv:Qt,hasStandardBrowserWebWorkerEnv:Zt,origin:Yt},Symbol.toStringTag,{value:"Module"})),A={...en,...Xt};function tn(e,t){return W(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ge(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=rn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}function sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:qe,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),sn(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{G.headers[e]={}});const on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class O{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=I(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=v(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!un(t))i(an(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=I(i),i){const c=a.findKey(r,i);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const c=t?ln(o):String(o).trim();c!==o&&delete n[o],n[c]=v(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=I(i);r[c]||(fn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(O);function Y(e,t){const n=this||G,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Me(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,h,{__CANCEL__:!0});function ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(b*1e3/y):void 0}}function hn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const z=(e,t,n=3)=>{let r=0;const s=pn(50,250);return hn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},mn=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),yn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!wn(t)?bn(e,t):t}const Re=e=>e instanceof O?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Re(l),Re(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==c||(n[u]=b)}),n}const Je=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=O.from(i),t.url=He(ze(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&mn(t.url))){const l=s&&o&&yn.read(o);l&&i.set(s,l)}return t},En=typeof XMLHttpRequest<"u",Rn=En&&function(e){return new Promise(function(n,r){const s=Je(e);let o=s.data;const i=O.from(s.headers).normalize();let{responseType:c}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function p(){if(!u)return;const y=O.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};ve(function(g){n(g),l()},function(g){r(g),l()},m),u=null}"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new h("Request aborted",h.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||qe;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,u)),u=null},o===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(d,m){u.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),c&&c!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",z(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",z(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{u&&(r(!y||y.type?new D(null,e,u):y),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const b=dn(s.url);if(b&&A.protocols.indexOf(b)===-1){r(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}u.send(o||null)})},Sn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof h?l:new D(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},gn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},On=async function*(e,t,n){for await(const r of e)yield*gn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Se=(e,t,n,r,s)=>{const o=On(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:l}=await o.next();if(f){c.close(),r();return}let u=l.byteLength;n&&n(i+=u),c.enqueue(new Uint8Array(l))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},ge=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},X=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ke=X&&typeof ReadableStream=="function",re=X&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Tn=Ke&&(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Oe=64*1024,se=Ke&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),J={stream:se&&(e=>e.body)};X&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!J[t]&&(J[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const An=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await re(e)).byteLength},Pn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??An(t)},Cn=X&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:p="same-origin",fetchOptions:b}=Je(e);l=l?(l+"").toLowerCase():"text";let[y,d]=s||o||i?Sn([s,o],i):[],m,S;const g=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let C;try{if(f&&Tn&&n!=="get"&&n!=="head"&&(C=await Pn(u,r))!==0){let x=new Request(t,{method:"POST",body:r,duplex:"half"}),B;a.isFormData(r)&&(B=x.headers.get("content-type"))&&u.setContentType(B),x.body&&(r=Se(x.body,Oe,ge(C,z(f)),null,re))}a.isString(p)||(p=p?"cors":"omit"),S=new Request(t,{...b,signal:y,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let w=await fetch(S);const k=se&&(l==="stream"||l==="response");if(se&&(c||k)){const x={};["status","statusText","headers"].forEach(pe=>{x[pe]=w[pe]});const B=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(Se(w.body,Oe,c&&ge(B,z(c,!0)),k&&g,re),x)}l=l||"text";let Xe=await J[a.findKey(J,l)||"text"](w,e);return!k&&g(),d&&d(),await new Promise((x,B)=>{ve(x,B,{data:Xe,headers:O.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:S})})}catch(w){throw g(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,S),{cause:w.cause||w}):h.from(w,w&&w.code,e,S)}}),oe={http:vt,xhr:Rn,fetch:Cn};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Te=e=>`- ${e}`,Nn=e=>a.isFunction(e)||e===null||e===!1,Ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Nn(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Te).join(`
`):" "+Te(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function Ae(e){return ee(e),e.headers=O.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ve.getAdapter(e.adapter||G.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Me(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const $e="1.7.2",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+$e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function xn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const ie={assertOptions:xn,validators:fe},_=ie.validators;class L{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=O.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,p=0,b;if(!f){const d=[Ae.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),b=d.length,u=Promise.resolve(n);p<b;)u=u.then(d[p++],d[p++]);return u}b=c.length;let y=n;for(p=0;p<b;){const d=c[p++],m=c[p++];try{y=d(y)}catch(S){m.call(this,S);break}}try{u=Ae.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=l.length;p<b;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=U(this.defaults,t);const n=ze(t.baseURL,t.url);return He(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}L.prototype[t]=n(),L.prototype[t+"Form"]=n(!0)});class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new D(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}function _n(e){return function(n){return e.apply(null,n)}}function Ln(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});function We(e){const t=new L(e),n=Ce(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return We(U(e,s))},n}const E=We(G);E.Axios=L;E.CanceledError=D;E.CancelToken=de;E.isCancel=Me;E.VERSION=$e;E.toFormData=W;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=_n;E.isAxiosError=Ln;E.mergeConfig=U;E.AxiosHeaders=O;E.formToJSON=e=>Ge(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Ve.getAdapter;E.HttpStatusCode=ae;E.default=E;const Un=(e=R.GPT)=>{let t=R.GPT.valueOf();switch(e){case R.GPT:t=R.GPT.valueOf();break;case R.BARD:t=R.BARD.valueOf();break;case R.BING:t=R.BING.valueOf();break;case R.GEMINI:t=R.GEMINI.valueOf();break;case R.CHECK_STATUS:t=R.CHECK_STATUS.valueOf();break;case R.CHANGELOG:t=R.CHANGELOG.valueOf();break;default:t=R.GPT.valueOf();break}return E.create({baseURL:String(t),headers:{Accept:"*/*","Content-Type":"application/json"}})},j=async(e,t=N.GET)=>{const n=rt({server:R.GPT,name:"Server",headers:{}},e),r={headers:{...n.headers},params:n.params,responseType:"json"},s=Un(n.server);try{let o;if(t==N.GET||t==N.DELETE?o=await s[t.valueOf()](n.url,r):o=await s[t.valueOf()](n.url,n.data,r),n.success)n.success(o);else{const i=o.data;console.log(`[${n.name}] ${i.message}`)}return o?o.data:null}catch(o){if(n.error&&n.error(o.response),o.response){const i=o.response.data;if(i.data&&i.data.length>0){const c=st(i.data[0]);for(let f=0;f<c.length;f++)console.log(`[${n.name}] ${c[f]}`)}}}finally{n.finally&&n.finally()}},Fn={get:async e=>await j(e,N.GET),post:async e=>await j(e,N.POST),put:async e=>{await j(e,N.PUT)},patch:async e=>{await j(e,N.PATCH)},delete:async e=>{await j(e,N.DELETE)}};export{Fn as A,R as E};