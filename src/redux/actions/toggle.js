import {TOGGLE} from '../actions-types/toggle';

export const toggleState = payload => {
  return {type: TOGGLE, payload: payload};
};
