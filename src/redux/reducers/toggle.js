import {TOGGLE} from '../actions-types/toggle';
const initialState = {
  toggle: false,
};
const toggle = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        toggle: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default toggle;
