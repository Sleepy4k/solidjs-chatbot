import{a as o,u as R,c as s,i as r,F as M,S as G,M as k,b as x,d as _,t as i,e as j,f as q}from"./index-gVtEqT95.js";import{M as F}from"./main.layout-ChHGUoQd.js";import{E as a,A as P,a as U}from"./api.service-C1K_J2hL.js";var D=i('<div class="chat chat-start"><div class=chat-bubble><span class="loading loading-dots loading-md">'),K=i('<button type=submit class="btn btn-error">New Chat'),Y=i('<button type=submit class="btn btn-error">Send'),z=i('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body><div class="flex justify-between items-center"><h2 class=card-title>BING AI</h2><button type=button class="btn btn-ghost">New Chat</button></div><div class="divider divider-lg"></div><div class="overflow-y-auto h-[31rem]"></div><form><div class="flex gap-2 w-full mt-[2vh]"><input required type=text class="input input-primary w-full"placeholder="Type a message to AI">'),H=i('<div class="chat chat-start mt-[2vh]"><div class=chat-bubble>'),J=i('<div class="chat chat-end"><div class=chat-bubble>');function X(){const[h,g]=o(""),[l,n]=o([]),[f,m]=o(!1),[w,y]=o(!1),[C,p]=o(!1),S=()=>{n([]),g(""),m(!1),y(!1),p(!1)},O=async()=>{if(f()||!h()||h().length<1)return;w()||y(!0);const t=h().trim();g(""),m(!0),n([...l(),{sender:a.USER,messages:t}]),await P.get({url:`?text=${t}`,name:"System",server:U.BING,success:d=>{const c=d.data;c.status?n([...l(),{sender:a.BOT,messages:c.result}]):(p(!0),!t||t.length<1?n([...l(),{sender:a.BOT,messages:"Please type a message to send!"}]):n([...l(),{sender:a.BOT,messages:c.message}]))},error:()=>{p(!0),n([...l(),{sender:a.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{m(!1)}})};return R(t=>{w()&&!t.defaultPrevented&&(t.preventDefault(),setTimeout(()=>{j.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `}).then(d=>{d.isConfirmed&&t.retry(!0)})},100))}),s(F,{get children(){var t=z(),d=t.firstChild,c=d.firstChild,A=c.firstChild,B=A.firstChild,I=B.firstChild,T=I.nextSibling,N=B.nextSibling,v=N.nextSibling,L=v.nextSibling,b=L.firstChild,E=b.firstChild;return T.$$click=S,r(v,s(M,{get each(){return l()},children:e=>s(G,{get children(){return[s(k,{get when(){return e.sender===a.BOT},get children(){var u=H(),$=u.firstChild;return r($,()=>e.messages),u}}),s(k,{get when(){return e.sender===a.USER},get children(){var u=J(),$=u.firstChild;return r($,()=>e.messages),u}})]}})}),null),r(v,s(x,{get when(){return f()},get children(){return D()}}),null),E.addEventListener("change",e=>g(e.target.value)),r(b,s(x,{get when(){return C()},get children(){var e=K();return e.$$click=S,e}}),null),r(b,s(x,{get when(){return!C()},get children(){var e=Y();return e.$$click=O,_(()=>e.disabled=f()),e}}),null),_(()=>T.disabled=f()),_(()=>E.value=h()),t}})}q(["click"]);export{X as default};
