import{a as o,u as k,c as s,i as n,F as M,S as G,M as A,b as w,d as _,t as i,e as I}from"./index-DQ7JpsLG.js";import{M as N}from"./main.layout-Chu-RFGf.js";import{E as l,A as F,a as U}from"./api.service-B-8ZtjE9.js";var j=i('<div class="chat chat-start"><div class=chat-bubble><span class="loading loading-dots loading-md">'),q=i('<button type=submit class="btn btn-error">New Chat'),D=i('<button type=submit class="btn btn-error">Send'),z=i('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body><div class="flex justify-between items-center"><h2 class=card-title>GPT4 AI</h2><button type=button class="btn btn-ghost">New Chat</button></div><div class="divider divider-lg"></div><div class="overflow-y-auto h-[31rem]"></div><div class="flex gap-2 w-full mt-[2vh]"><input required type=text class="input input-primary w-full"placeholder="Type a message to AI">'),H=i('<div class="chat chat-start mt-[2vh]"><div class=chat-bubble>'),J=i('<div class="chat chat-end"><div class=chat-bubble>');function W(){const[u,g]=o(""),[a,r]=o([]),[h,f]=o(!1),[x,y]=o(!1),[C,p]=o(!1),S=()=>{r([]),g(""),f(!1),y(!1),p(!1)},B=async()=>{if(h()||!u()||u().length<1)return;x()||y(!0);const t=u().trim();g(""),f(!0),r([...a(),{sender:l.USER,messages:t}]),await F.get({url:`?text=${t}`,name:"System",server:U.GPT,success:v=>{const d=v.data;d.status?r([...a(),{sender:l.BOT,messages:d.result}]):(p(!0),!t||t.length<1?r([...a(),{sender:l.BOT,messages:"Please type a message to send!"}]):r([...a(),{sender:l.BOT,messages:d.message}]))},error:()=>{p(!0),r([...a(),{sender:l.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{f(!1)}})};return k(t=>{x()&&!t.defaultPrevented&&(t.preventDefault(),setTimeout(()=>{window.confirm(`Are you sure you want to leave?

Chat will be closed automatically!`)&&t.retry(!0)},100))}),s(N,{get children(){var t=z(),v=t.firstChild,d=v.firstChild,L=d.firstChild,T=L.firstChild,P=T.firstChild,E=P.nextSibling,R=T.nextSibling,m=R.nextSibling,b=m.nextSibling,O=b.firstChild;return E.$$click=S,n(m,s(M,{get each(){return a()},children:e=>s(G,{get children(){return[s(A,{get when(){return e.sender===l.BOT},get children(){var c=H(),$=c.firstChild;return n($,()=>e.messages),c}}),s(A,{get when(){return e.sender===l.USER},get children(){var c=J(),$=c.firstChild;return n($,()=>e.messages),c}})]}})}),null),n(m,s(w,{get when(){return h()},get children(){return j()}}),null),O.addEventListener("change",e=>g(e.target.value)),n(b,s(w,{get when(){return C()},get children(){var e=q();return e.$$click=S,e}}),null),n(b,s(w,{get when(){return!C()},get children(){var e=D();return e.$$click=B,_(()=>e.disabled=h()),e}}),null),_(()=>E.disabled=h()),_(()=>O.value=u()),t}})}I(["click"]);export{W as default};
