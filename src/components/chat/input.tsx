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
          placeholder="Type a message to AI"
          onchange={props.onChange}
        />
        <Show when={props.isError}>
          <button type='submit' class="btn btn-error" onclick={props.onNewChat}>New Chat</button>
        </Show>

        <Show when={!props.isError}>
          <button type='submit' class="btn btn-error" onclick={props.onSend} disabled={props.isLoading}>Send</button>
        </Show>
      </div>
    </form>
  );
}