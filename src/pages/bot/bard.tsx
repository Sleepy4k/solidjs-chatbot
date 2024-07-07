import { MainLayout } from '@layouts';
import { ApiService } from '@services';
import { IChatStruct } from '@interfaces';
import { EApiType, EChatSender } from '@enums';
import { createSignal, For, Match, Show, Switch } from 'solid-js';
import { BeforeLeaveEventArgs, useBeforeLeave } from '@solidjs/router';

export default function BARD() {
  const [text, setText] = createSignal<string>('');
  const [chat, setChat] = createSignal<IChatStruct[]>([]);
  const [isLoading, setLoading] = createSignal<boolean>(false);
  const [isChatOpen, setIsChatOpen] = createSignal<boolean>(false);
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
      }
    });
  }

  useBeforeLeave((e: BeforeLeaveEventArgs) => {
    if (isChatOpen() && !e.defaultPrevented) {
      // preventDefault to block immediately and prompt user async
      e.preventDefault();
      setTimeout(() => {
        if (window.confirm("Are you sure you want to leave?\n\nChat will be closed automatically!")) {
          // user wants to proceed anyway so retry with force=true
          e.retry(true);
        }
      }, 100);
    }
  });

  return (
    <MainLayout>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          <div class="card shadow-2xl">
            <div class="card-body">
              <div class="flex justify-between items-center">
                <h2 class="card-title">BARD AI</h2>
                <button
                  type='button'
                  class="btn btn-ghost"
                  onClick={handleNewChat}
                  disabled={isLoading()}
                >
                  New Chat
                </button>
              </div>
              <div class='divider divider-lg'></div>
              <div class="overflow-y-auto h-[31rem]">
                <For each={chat()}>
                  {(chat) => (
                    <Switch>
                      <Match when={chat.sender === EChatSender.BOT}>
                        <div class="chat chat-start mt-[2vh]">
                          <div class="chat-bubble">{chat.messages}</div>
                        </div>
                      </Match>

                      <Match when={chat.sender === EChatSender.USER}>
                        <div class="chat chat-end">
                          <div class="chat-bubble">{chat.messages}</div>
                        </div>
                      </Match>
                    </Switch>
                  )}
                </For>

                <Show when={isLoading()}>
                  <div class="chat chat-start">
                    <div class="chat-bubble">
                      <span class="loading loading-dots loading-md"></span>
                    </div>
                  </div>
                </Show>
              </div>
              <div class="flex gap-2 w-full mt-[2vh]">
                <input
                  required
                  type="text"
                  value={text()}
                  class="input input-primary w-full"
                  placeholder="Type a message to AI"
                  onchange={(e: any) => setText(e.target.value)}
                />
                <Show when={isResponseError()}>
                  <button type='submit' class="btn btn-error" onclick={handleNewChat}>New Chat</button>
                </Show>

                <Show when={!isResponseError()}>
                  <button type='submit' class="btn btn-error" onclick={handleSend} disabled={isLoading()}>Send</button>
                </Show>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
