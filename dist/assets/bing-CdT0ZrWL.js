import{a as t,o as I,u as L,c as a,i as g,S as N,b as _,t as $,d as b}from"./index-66XoMfKJ.js";import{C as k,a as P,M as G}from"./main.layout-D7KvlmEj.js";import{A as R,C as H,a as K,b as U,E as l,c as S,d as w}from"./api.service-BADDAMUB.js";var j=$('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body>');function z(){const[o,f]=t(""),[s,n]=t([]),[u,h]=t(!1),[d,B]=t(!1),[m,T]=t(!1),[p,v]=t(!1),[A,y]=t(!1),[E,C]=t(!1),x=()=>{n([]),f(""),h(!1),v(!1),C(!1)},M=async()=>{if(u()||!o()||o().length<1)return;p()||v(!0);const e=o().trim();f(""),h(!0),n([...s(),{sender:l.USER,messages:e}]),await S.get({url:`?text=${e}`,name:"System",server:w.BING,success:r=>{const i=r.data;i.status?n([...s(),{sender:l.BOT,messages:i.result}]):(C(!0),!e||e.length<1?n([...s(),{sender:l.BOT,messages:"Please type a message to send!"}]):n([...s(),{sender:l.BOT,messages:i.message}]))},error:()=>{C(!0),n([...s(),{sender:l.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{h(!1),y(!0)}})};return I(async()=>{await S.get({url:"",name:"System",server:w.CHECK_STATUS,success:e=>{e.data.status&&T(!0)},finally:()=>{B(!0)}})}),L(e=>{p()&&!e.defaultPrevented&&(e.preventDefault(),setTimeout(()=>{b.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `}).then(r=>{r.isConfirmed&&e.retry(!0)})},100))}),a(G,{title:"BING",get children(){return[a(R,{get isPlaying(){return A()},setIsPlaying:y}),(()=>{var e=j(),r=e.firstChild,i=r.firstChild,c=i.firstChild;return g(c,a(k,{title:"BING",get isLoading(){return u()||!d()||!p()||!m()},onNewChat:x}),null),g(c,a(H,{get isMounted(){return d()}}),null),g(c,a(N,{get when(){return _(()=>!!d())()&&m()},get children(){return[a(K,{get chat(){return s()},get isLoading(){return u()}}),a(P,{get value(){return o()},get isLoading(){return u()},get isError(){return E()},onSend:M,onNewChat:x,onChange:O=>f(O.target.value)})]}}),null),g(c,a(U,{get isMounted(){return d()},get isApiOnline(){return m()}}),null),e})()]}})}export{z as default};
