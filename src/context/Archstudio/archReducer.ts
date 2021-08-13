import { get_current } from "../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case get_current:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
