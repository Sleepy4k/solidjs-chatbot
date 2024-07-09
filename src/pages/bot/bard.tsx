import { alert } from '@utils';
import { MainLayout } from '@layouts';
import { ApiService } from '@services';
import { IChatStruct } from '@interfaces';
import { SweetAlertResult } from 'sweetalert2';
import { EApiType, EChatSender } from '@enums';
import { createSignal, onMount, Show } from 'solid-js';
import { BeforeLeaveEventArgs, useBeforeLeave } from '@solidjs/router';
import { ChatBox, ChatError, ChatInput, ChatHeader, ChatLoading, AudioPlayer } from '@components';

export default function BARD() {
  const [text, setText] = createSignal<string>('');
  const [chat, setChat] = createSignal<IChatStruct[]>([]);
  const [isLoading, setLoading] = createSignal<boolean>(false);
  const [isMounted, setIsMounted] = createSignal<boolean>(false);
  const [isApiOnline, setApiOnline] = createSignal<boolean>(false);
  const [isChatOpen, setIsChatOpen] = createSignal<boolean>(false);
  const [musicStart, setMusicStart] = createSignal<boolean>(false);
  const [isResponseError, setResponseError] = createSignal<boolean>(false);

  const handleNewChat = () => {
    setChat([]);
    setText('');
    setLoading(false);
    setIsChatOpen(false);
    setResponseError(false);
  }

  const handleSend = async () => {
    if (isLoading()) return;
    if (!text() || text().length < 1) return;

    if (!isChatOpen()) setIsChatOpen(true);

    const txt = text().trim();

    setText('');
    setLoading(true);
    setChat([...chat(), { sender: EChatSender.USER, messages: txt }]);

    await ApiService.get({
      url: `?text=${txt}`,
      name: 'System',
      server: EApiType.BARD,
      success: (res: any) => {
        const value = res.data;

        if (value.status) {
          setChat([...chat(), { sender: EChatSender.BOT, messages: value.result }]);
        } else {
          setResponseError(true);
          if (!txt || txt.length < 1) setChat([...chat(), { sender: EChatSender.BOT, messages: 'Please type a message to send!' }]);
          else setChat([...chat(), { sender: EChatSender.BOT, messages: value.message }]);
        }
      },
      error: () => {
        setResponseError(true);
        setChat([...chat(), { sender: EChatSender.BOT, messages: 'Something went wrong, please try again later' }]);
      },
      finally: () => {
        setLoading(false);
        setMusicStart(true);
      }
    });
  }

  onMount(async () => {
    await ApiService.get({
      url: '',
      name: 'System',
      server: EApiType.CHECK_STATUS,
      success: (res: any) => {
        const value = res.data;
        if (value.status) setApiOnline(true);
      },
      finally: () => {
        setIsMounted(true);
      }
    });
  });

  useBeforeLeave((e: BeforeLeaveEventArgs) => {
    if (isChatOpen() && !e.defaultPrevented) {
      // preventDefault to block immediately and prompt user async
      e.preventDefault();
      setTimeout(() => {
        alert.fire({
          title: 'Konfirmasi',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Ya',
          cancelButtonText: 'Tidak',
          html: `
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `
        }).then((result: SweetAlertResult) => {
          if (result.isConfirmed) e.retry(true);
        });
      }, 100);
    }
  });

  return (
    <MainLayout title='BARD'>
      <AudioPlayer isPlaying={musicStart()} setIsPlaying={setMusicStart} />
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          <div class="card shadow-2xl">
            <div class="card-body">
              <ChatHeader
                title="BING"
                isLoading={isLoading()}
                onNewChat={handleNewChat}
              />
              <ChatLoading
                isMounted={isMounted()}
              />
              <Show when={isMounted() && isApiOnline()}>
                <ChatBox
                  chat={chat()}
                  isLoading={isLoading()}
                />
                <ChatInput
                  value={text()}
                  isLoading={isLoading()}
                  isError={isResponseError()}
                  onSend={handleSend}
                  onNewChat={handleNewChat}
                  onChange={(e: any) => setText(e.target.value)}
                />
              </Show>
              <ChatError
                isMounted={isMounted()}
                isApiOnline={isApiOnline()}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
