import { EChatSender } from '@enums';
import { IChatStruct } from '@interfaces';
import { createEffect, createSignal, Index, Match, Show, Switch } from 'solid-js';

interface IChatBoxProps {
  chat: IChatStruct[];
  isLoading: boolean;
}

export default function ChatBox(props: IChatBoxProps) {
  const [isTyping, setIsTyping] = createSignal<boolean>(false);
  const [displayResponse, setDisplayResponse] = createSignal<string>('');

  createEffect(() => {
    const chat = props.chat;
    if (chat.length < 1) return;

    if (props.isLoading) setIsTyping(true);

    const lastChat = chat[chat.length - 1];

    if (lastChat.sender === EChatSender.BOT) {
      setIsTyping(true);

      let index = 0;
      const words = lastChat.messages.split(' ');

      const interval = setInterval(() => {
        if (index === words.length) {
          clearInterval(interval);
          setIsTyping(false);
        } else {
          setDisplayResponse(words.slice(0, index).join(' '));
          index++;
        }
      }, Math.floor(Math.random() * 100) + 35);

      return () => clearInterval(interval);
    }

    if (lastChat.sender === EChatSender.USER) {
      setIsTyping(false);
    }
  });

  return (
    <div class="overflow-y-auto h-[50vh] lg:h-[31rem]">
      <Index each={props.chat}>
        {(chat, index) => (
          <Switch>
            <Match when={chat().sender === EChatSender.BOT && index !== props.chat.length - 1}>
              <div class="chat chat-start mt-[2vh]">
                <div class="avatar">
                  <div class="w-[2rem] rounded-full">
                    <img src="https://static.vecteezy.com/system/resources/previews/021/608/790/original/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div class="chat-bubble">
                  {chat().messages}
                </div>
              </div>
            </Match>

            <Match when={chat().sender === EChatSender.BOT && index === props.chat.length - 1}>
              <div class="chat chat-start mt-[2vh]">
                <div class="avatar">
                  <div class="w-[2rem] rounded-full">
                    <img src="https://static.vecteezy.com/system/resources/previews/021/608/790/original/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div class="chat-bubble">
                  {displayResponse()}
                  <Show when={isTyping()}>
                    <span class="cursor cursor-blink">|</span>
                  </Show>
                </div>
              </div>
            </Match>

            <Match when={chat().sender === EChatSender.USER}>
              <div class="chat chat-end">
                <div class="chat-bubble">{chat().messages}</div>
              </div>
            </Match>
          </Switch>
        )}
      </Index>

      <Show when={props.isLoading}>
        <div class="chat chat-start">
          <div class="chat-bubble">
            <span class="loading loading-dots loading-md"></span>
          </div>
        </div>
      </Show>
    </div>
  );
}