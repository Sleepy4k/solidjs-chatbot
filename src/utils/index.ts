import alert from './sweet.alert';
import { convertErrorResponseData } from './parse';
import { getCurrentDate, formatDateToAmPm } from './time';
import { getStorage, setStorage, deleteStorage, setAndDeleteStorage, getOrCreateStorage } from './local.storage';

export {
  alert,
  getStorage,
  setStorage,
  deleteStorage,
  getCurrentDate,
  formatDateToAmPm,
  getOrCreateStorage,
  setAndDeleteStorage,
  convertErrorResponseData
};
