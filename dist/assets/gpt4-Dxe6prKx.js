import{a as r,u as y,c as u,i as h,t as w,b as B}from"./index-C94LLtun.js";import{C as S,a as E,M as L}from"./main.layout-CR_Jt8sP.js";import{C as O,E as i,A as P,a as $}from"./api.service-BdZ0tbz4.js";var k=w('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body>');function G(){const[l,d]=r(""),[t,a]=r([]),[o,c]=r(!1),[m,p]=r(!1),[x,f]=r(!1),C=()=>{a([]),d(""),c(!1),p(!1),f(!1)},v=async()=>{if(o()||!l()||l().length<1)return;m()||p(!0);const e=l().trim();d(""),c(!0),a([...t(),{sender:i.USER,messages:e}]),await P.get({url:`?text=${e}`,name:"System",server:$.GPT,success:s=>{const n=s.data;n.status?a([...t(),{sender:i.BOT,messages:n.result}]):(f(!0),!e||e.length<1?a([...t(),{sender:i.BOT,messages:"Please type a message to send!"}]):a([...t(),{sender:i.BOT,messages:n.message}]))},error:()=>{f(!0),a([...t(),{sender:i.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{c(!1)}})};return y(e=>{m()&&!e.defaultPrevented&&(e.preventDefault(),setTimeout(()=>{B.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `}).then(s=>{s.isConfirmed&&e.retry(!0)})},100))}),u(L,{title:"GPT-4",get children(){var e=k(),s=e.firstChild,n=s.firstChild,g=n.firstChild;return h(g,u(S,{title:"GPT-4",get isLoading(){return o()},onNewChat:C}),null),h(g,u(O,{get chat(){return t()},get isLoading(){return o()}}),null),h(g,u(E,{get value(){return l()},get isLoading(){return o()},get isError(){return x()},onSend:v,onNewChat:C,onChange:T=>d(T.target.value)}),null),e}})}export{G as default};
