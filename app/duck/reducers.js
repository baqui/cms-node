import types from './types';
import { Config } from './records';

const global = (state = new Config(), action) => {
  switch (action.type) {
    case types.TEST:
      return state;
  }

  return state;
};

export default global;
