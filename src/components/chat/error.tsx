import { Show } from "solid-js";

interface IChatErrorProps {
  isMounted: boolean;
  isApiOnline: boolean;
}

export default function ChatError(props: IChatErrorProps) {
  return (
    <Show when={props.isMounted && !props.isApiOnline}>
      <div class="flex justify-center items-center h-[50vh]">
        <div class="flex flex-col items-center gap-4">
          <span class="text-2xl font-bold text-red-500">API Bot is Offline</span>
          <span class="text-lg font-semibold text-gray-500">Please try again later</span>
        </div>
      </div>
    </Show>
  );
}
