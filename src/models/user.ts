
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default {
  state: {
    num: 100,
    user: {},
  },
  reducers: {
    add(state: any) {
      state.num += 1;
    },
    queryUserSuccess(state: any, { payload }: any) {
      return {
        ...state,
        user: payload,
      };
    },
  },
  effects: {
    *queryUser({ payload }: any, { call, put }: any) {
      debugger;
      // const { data } = yield call(queryUser, payload);
      yield put({ type: 'queryUserSuccess', payload });
    },
    *addAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'add' });
    },
  },
};
