import{a as t,o as L,u as P,c as a,i as g,S as _,b as $,t as b,d as k}from"./index-CwKXn8cM.js";import{C as I,a as G,M as N}from"./main.layout-Ci89D1mJ.js";import{A as R,C as H,a as K,b as U,E as l,c as T,d as w}from"./api.service-OXPQqouT.js";var j=b('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body>');function z(){const[o,f]=t(""),[s,n]=t([]),[u,h]=t(!1),[m,B]=t(!1),[p,A]=t(!1),[C,v]=t(!1),[E,y]=t(!1),[x,d]=t(!1),S=()=>{n([]),f(""),h(!1),v(!1),d(!1)},M=async()=>{if(u()||!o()||o().length<1)return;C()||v(!0),x()&&d(!1);const e=o().trim();f(""),h(!0),n([...s(),{sender:l.USER,messages:e}]),await T.get({url:`?text=${e}`,name:"System",server:w.GPT,success:r=>{const i=r.data;i.status?n([...s(),{sender:l.BOT,messages:i.result}]):(d(!0),!e||e.length<1?n([...s(),{sender:l.BOT,messages:"Please type a message to send!"}]):n([...s(),{sender:l.BOT,messages:i.message}]))},error:()=>{d(!0),n([...s(),{sender:l.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{y(!0),h(!1)}})};return L(async()=>{await T.get({url:"",name:"System",server:w.CHECK_STATUS,success:e=>{e.data.status&&A(!0)},finally:()=>{B(!0)}})}),P(e=>{C()&&!e.defaultPrevented&&(e.preventDefault(),setTimeout(()=>{k.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `}).then(r=>{r.isConfirmed&&e.retry(!0)})},100))}),a(N,{title:"GPT-4",get children(){return[a(R,{get isPlaying(){return E()},setIsPlaying:y}),(()=>{var e=j(),r=e.firstChild,i=r.firstChild,c=i.firstChild;return g(c,a(I,{title:"BING",get isLoading(){return u()},onNewChat:S}),null),g(c,a(H,{get isMounted(){return m()}}),null),g(c,a(_,{get when(){return $(()=>!!m())()&&p()},get children(){return[a(K,{get chat(){return s()},get isLoading(){return u()}}),a(G,{get value(){return o()},get isLoading(){return u()},get isError(){return x()},onSend:M,onNewChat:S,onChange:O=>f(O.target.value)})]}}),null),g(c,a(U,{get isMounted(){return m()},get isApiOnline(){return p()}}),null),e})()]}})}export{z as default};
