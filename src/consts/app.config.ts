const APP_NAME = import.meta.env.VITE_APP_NAME || 'Solid App';
const APP_ENV = import.meta.env.VITE_APP_ENV || 'development';

const BING_AI_API_URL = import.meta.env.VITE_BING_AI_API_URL || 'http://localhost:3000';
const GPT_AI_API_URL = import.meta.env.VITE_GPT_AI_API_URL || 'http://localhost:3001';
const GEMINI_AI_API_URL = import.meta.env.VITE_GEMINI_AI_API_URL || 'http://localhost:3002';
const BARD_AI_API_URL = import.meta.env.VITE_BARD_AI_API_URL || 'http://localhost:3003';
const CHECK_STATUS_API_URL = import.meta.env.VITE_CHECK_STATUS_API_URL || 'http://localhost';

export {
  APP_NAME,
  APP_ENV,
  BING_AI_API_URL,
  GPT_AI_API_URL,
  GEMINI_AI_API_URL,
  BARD_AI_API_URL,
  CHECK_STATUS_API_URL
};