interface IHeaderProps {
  title: string;
  isLoading: boolean;
  onNewChat: () => void;
}

export default function ChatHeader(props: IHeaderProps) {
  return (
    <>
      <div class="flex justify-between items-center">
        <h2 class="card-title">{props.title}</h2>
        <button
          type='button'
          class="btn btn-ghost"
          onClick={props.onNewChat}
          disabled={props.isLoading}
        >
          New Chat
        </button>
      </div>
      <div class='divider divider-lg' />
    </>
  );
}