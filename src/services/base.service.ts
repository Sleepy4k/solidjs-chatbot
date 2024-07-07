import axios from 'axios';
import { EApiType } from '@enums';

const backendApi = (server: EApiType = EApiType.GPT) => {
  // This number data type is crazy, due enum index
  // Please let me know if this problem solved
  let serviceUrl: number = EApiType.GPT.valueOf();

  switch (server) {
  case EApiType.GPT:
    serviceUrl = EApiType.GPT.valueOf();
    break;

  case EApiType.BARD:
    serviceUrl = EApiType.BARD.valueOf();
    break;

  case EApiType.BING:
    serviceUrl = EApiType.BING.valueOf();
    break;

  case EApiType.GEMINI:
    serviceUrl = EApiType.GEMINI.valueOf();
    break;

  default:
    serviceUrl = EApiType.GPT.valueOf();
    break;
  }

  return axios.create({
    baseURL: String(serviceUrl),
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  });
};

export default backendApi;