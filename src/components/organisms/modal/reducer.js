import actionTypes from './actionTypes';

const initialState = {
  emoji: '😀',
  visible: true
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_EMOJI:
      return { ...state, emoji: action.data };
    case actionTypes.SHOW_MODAL:
      return { ...state, visible: true };
    case actionTypes.HIDE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
}
