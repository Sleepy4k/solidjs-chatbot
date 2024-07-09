import { Show } from "solid-js";

interface IInputProps {
  onChange: (e: any) => void;
  onNewChat: () => void;
  onSend: () => void;
  isLoading: boolean;
  isError: boolean;
  value: string;
}

export default function ChatInput(props: IInputProps) {
  return (
    <form id='prompt-form'>
      <div class="flex gap-2 w-full mt-[2vh]">
        <input
          required
          type="text"
          value={props.value}
          class="input input-primary w-full"
          placeholder={props.isError ? "Something went wrong, please make a new chat" : "Type a message to AI"}
          onchange={props.onChange}
          disabled={props.isLoading || props.isError}
        />
        <Show when={props.isError}>
          <button
            type='submit'
            class="btn btn-error"
            onclick={props.onNewChat}
          >
            New Chat
          </button>
        </Show>

        <Show when={!props.isError}>
          <button
            type='submit'
            class={`btn btn-${props.isLoading ? 'neutral' : 'primary'}`}
            onclick={props.onSend}
            disabled={props.isLoading}
          >
            Send
          </button>
        </Show>
      </div>
    </form>
  );
}