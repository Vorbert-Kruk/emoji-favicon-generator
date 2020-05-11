import actionTypes from './actionTypes';

const initialState = {
  emoji: undefined,
  modal: undefined
};

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_EMOJI:
      return '';
    case actionTypes.SHOW_MODAL:
      return '';
    case actionTypes.HIDE_MODAL:
      return '';
    default:
      return state;
  }
}
