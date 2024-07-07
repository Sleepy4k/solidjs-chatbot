import { MainLayout } from '@layouts';

export default function Home() {
  return (
    <MainLayout>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          <div class="card shadow-2xl">
            <div class="card-body">
              <h2 class="card-title">Welcome to AI Chatbot</h2>
              <div class='divider divider-lg'></div>
              <p class="text-lg text-gray-500">
                This is a simple AI chatbot application that uses various AI models to generate responses.
              </p>
              <p class="text-lg text-gray-500">
                You can start a new chat with the AI by selecting one of the AI models from the navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}