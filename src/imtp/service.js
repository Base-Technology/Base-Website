import 'react-native-get-random-values';
import '@ethersproject/shims';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers';
import axios from 'axios';
import OpenIMSDKRN, { OpenIMEmitter } from 'open-im-sdk-rn';
import RNFS, { stat } from 'react-native-fs';
import { addMessage, queryLastMessage } from '../database/message';
import { queryProfileByID } from '../database/profile';

import { useState, useEffect } from 'react';
import { getSDK } from "open-im-sdk-wasm";
export function useIMTP() {
  const [imtpInstance, setIMTPInstance] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function initializeIMTP() {
      try {
        const instance = await IMTP.getSDK();
        if (isMounted) {
          setIMTPInstance(instance);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    }

    initializeIMTP();

    return () => {
      isMounted = false;
    };
  }, []);

  async function login() {
    try {
      if (imtpInstance) {
        await imtpInstance.login();
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  async function sendMessage(message, callback) {
    try {
      if (imtpInstance) {
        await imtpInstance.sendMessage(message, callback);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  async function loadHistoryMessage() {
    try {
      if (imtpInstance) {
        await imtpInstance.loadHistoryMessage();
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  async function addListener(listener) {
    try {
      if (imtpInstance) {
        await imtpInstance.addListener(listener);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  async function removeListener(id) {
    try {
      if (imtpInstance) {
        await imtpInstance.removeListener(id);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  return {
    login,
    sendMessage,
    loadHistoryMessage,
    addListener,
    removeListener,
  };
}
