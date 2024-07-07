import { A } from '@solidjs/router';
import ChangeTheme from '@components/change.theme';

export default function NavBar() {
  return (
    <div class="fixed navbar bg-base-300 z-50 flex justify-center">
      <div class="absolute top-5 right-5">
        <ChangeTheme />
      </div>
      <div class='navbar w-[85vw]'>
        <div class="navbar-start">
          <A href='/' class="btn btn-ghost">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/solidjs/templates/main/ts/src/logo.svg"
              alt="Logo SolidJS"
              class='lg:w-[2.5rem] w-9 lg:h-[2.5rem] h-9'
            />
          </A>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 lg:text-md gap-2">
            <li>
              <A href='/' end>Home</A>
            </li>
            <li>
              <A href='/gpt4'>GPT4</A>
            </li>
            <li>
              <A href='/bard'>BARD</A>
            </li>
            <li>
              <A href='/bing'>BING</A>
            </li>
            <li>
              <A href='/gemini'>GEMINI</A>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <div
              title="Menu"
              tabindex="0"
              role="button"
              class="btn btn-ghost lg:hidden me-[1.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              <li>
                <A href='/' end>Home</A>
              </li>
              <li>
                <A href='/gpt4'>GPT4</A>
              </li>
              <li>
                <A href='/bard'>BARD</A>
              </li>
              <li>
                <A href='/bing'>BING</A>
              </li>
              <li>
                <A href='/gemini'>GEMINI</A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
