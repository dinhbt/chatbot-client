import produce from 'immer';

import {
    SET_TYPING,
    SAVE_MESSAGE,
    RESET_MESSAGE
} from './constants';


const initialState = {
    typing: false,
    message: []
};

const reducer = produce((draft, action) => {
    switch (action.type) {
        case SET_TYPING:
            draft.typing = action.payload;
            break;
        case SAVE_MESSAGE:
            draft.message.push(action.payload);
            break;
        case RESET_MESSAGE:
            draft.message = [];
            break;
        default:
            draft = initialState;
    }
}, initialState);

export default reducer;