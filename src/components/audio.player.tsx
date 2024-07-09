import SOUND from '@assets/sounds/notif.mp3';
import { createEffect, createSignal, onCleanup, onMount, Setter } from 'solid-js';

interface IAudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: Setter<boolean>;
}

export default function AudioPlayer(props: IAudioPlayerProps) {
  const [audio, setAudio] = createSignal<HTMLAudioElement | null>(null);

  onMount(() => {
    const audioElement = new Audio(SOUND);
    audioElement.loop = false;
    audioElement.volume = 0.1;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  });

  onCleanup(() => {
    const audioElement = audio();
    if (!audioElement) return;

    audioElement.pause();
    audioElement.src = '';
  });

  createEffect(async () => {
    const audioElement = audio();
    if (!audioElement) return;

    if (props.isPlaying) {
      props.setIsPlaying(false);
      await audioElement.play();
    }
  });

  return (
    <audio
      class="hidden"
      ref={audio}
    />
  );
}
