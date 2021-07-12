import { 
    SET_TYPING,
    SAVE_MESSAGE,
    RESET_MESSAGE,
    GET_TEXT_MESSAGE,
    GET_EVENT_MESSAGE,
} from './constants';

export const setTypingAction = (payload) => ({ type: SET_TYPING, payload });
export const saveMessageAction = (payload) => ({ type: SAVE_MESSAGE, payload });
export const resetMessageAction = (payload) => ({ type: RESET_MESSAGE, payload });
export const getTextMessageAction = (payload) => ({ type: GET_TEXT_MESSAGE, payload });
export const getEventMessageAction = (payload) => ({ type: GET_EVENT_MESSAGE, payload });