import actionTypes from './actionTypes';

export const storeEmoji = emojiData => dispatch => {
  dispatch({
    type: actionTypes.STORE_EMOJI,
    emojiData
  });
};

export const showModal = () => dispatch => {
  dispatch({
    type: actionTypes.SHOW_MODAL
  });
};

export const hideModal = () => dispatch => {
  dispatch({
    type: actionTypes.HIDE_MODAL
  });
};
