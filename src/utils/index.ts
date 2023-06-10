import { ethers } from 'ethers';

export const toFloat = (bn:any, decimals:any) => {
  if (bn == undefined) {
    return;
  }
  return ethers.utils.formatUnits(bn, decimals);
};

export const toBN = (num:any, decimals:any) => {
  return ethers.utils.parseUnits(`${num}`, decimals);
};

export function getFromLocalStorage(key:string) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing JSON from LocalStorage:', error);
    }
  }
  return null;
}
