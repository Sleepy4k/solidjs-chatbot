import { BING_AI_API_URL, GPT_AI_API_URL, GEMINI_AI_API_URL, BARD_AI_API_URL, CHECK_STATUS_API_URL } from '@consts';

enum EApiType {
  BING = BING_AI_API_URL,
  GPT = GPT_AI_API_URL,
  GEMINI = GEMINI_AI_API_URL,
  BARD = BARD_AI_API_URL,
  CHECK_STATUS = CHECK_STATUS_API_URL
}

enum EApiMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete'
}

export {
  EApiType,
  EApiMethod
};