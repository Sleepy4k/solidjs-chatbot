import { routes } from './routes';
import { Meta, Theme } from '@contexts';
import { HashRouter } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import { Suspense, type Component } from 'solid-js';

const App: Component = () => {
  return (
    <MetaProvider>
      <main class="min-h-screen">
        <HashRouter root={(props) => (
          <Suspense fallback={
            <div class="flex justify-center items-center h-screen">
              <span class="loading loading-ring loading-lg h-32 w-32 border-t-2 border-b-2" />
            </div>
          }>
            <Meta.MetaProvider>
              <Theme.ThemeProvider>
                {props.children}
              </Theme.ThemeProvider>
            </Meta.MetaProvider>
          </Suspense>
        )}>
          {routes}
        </HashRouter>
      </main>
    </MetaProvider>
  );
};

export default App;
