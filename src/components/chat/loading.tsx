import { Show } from "solid-js";

interface IChatLoadingProps {
  isMounted: boolean;
}

export default function ChatLoading(props: IChatLoadingProps) {
  return (
    <Show when={!props.isMounted}>
      <div class="flex justify-center items-center h-[50vh]">
        <span class="loading loading-lg"></span>
        <span class="text-lg font-semibold text-gray-500 ml-2">Fetching API...</span>
      </div>
    </Show>
  );
}
