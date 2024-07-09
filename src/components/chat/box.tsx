import { EChatSender } from '@enums';
import { IChatStruct } from '@interfaces';
import BOTLOGO from '@assets/images/bot-logo.jpg';
import { getCurrentDate, formatDateToAmPm } from '@utils';
import { createEffect, createSignal, Index, Match, Show, Switch } from 'solid-js';

interface IChatBoxProps {
  chat: IChatStruct[];
  isLoading: boolean;
}

interface IChatTemplateProps {
  isBot?: boolean;
  isLatest?: boolean;
  children: any;
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

  const getCurrentTime = () => formatDateToAmPm(getCurrentDate());

  const ChatTemplate = (props: IChatTemplateProps) => (
    <>
      <Show when={props.isBot}>
        <div class="avatar">
          <div class="w-[2rem] rounded-full">
            <img src={BOTLOGO} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </Show>
      <div class="chat-bubble">
        {props.children}
        <Show when={props.isLatest && props.isBot && isTyping()}>
          <span class="cursor cursor-blink">|</span>
        </Show>
        <div class="chat-header">
          <time class="text-xs opacity-50">{getCurrentTime()}</time>
        </div>
      </div>
    </>
  );

  return (
    <div class="overflow-y-auto h-[50vh] lg:h-[31rem]">
      <Index each={props.chat}>
        {(chat, index) => (
          <Switch>
            <Match when={chat().sender === EChatSender.BOT && index !== props.chat.length - 1}>
              <div class="chat chat-start mt-[2vh]">
                <ChatTemplate isBot={true}>
                  {chat().messages}
                </ChatTemplate>
              </div>
            </Match>

            <Match when={chat().sender === EChatSender.BOT && index === props.chat.length - 1}>
              <div class="chat chat-start mt-[2vh]">
                <ChatTemplate isBot={true} isLatest={true}>
                  {displayResponse()}
                </ChatTemplate>
              </div>
            </Match>

            <Match when={chat().sender === EChatSender.USER}>
              <div class="chat chat-end">
                <ChatTemplate>
                  {chat().messages}
                </ChatTemplate>
              </div>
            </Match>
          </Switch>
        )}
      </Index>

      <Show when={props.isLoading}>
        <div class="chat chat-start">
          <ChatTemplate isBot={true}>
            <span class="loading loading-dots loading-md"></span>
          </ChatTemplate>
        </div>
      </Show>
    </div>
  );
}