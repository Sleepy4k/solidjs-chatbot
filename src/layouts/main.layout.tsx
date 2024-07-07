import { Meta } from '@contexts';
import { createEffect } from 'solid-js';
import { IMainLayoutProp } from '@interfaces';
import { NavBar, Footer } from '@components';

export default function MainLayout(props: IMainLayoutProp) {
  const { changeTitle } = Meta.useMeta();

  createEffect(() => {
    if (props.title) changeTitle(props.title);
    else changeTitle();
  });

  return (
    <div
      class="w-full p-0 m-0 overflow-visible min-h-screen flex flex-col justify-between"
    >
      <NavBar />
      <div class='lg:mt-[8vh] mt-[5rem]'>
        <div class="flex gap-0 pt-5 mb-auto flex justify-center z-0">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}