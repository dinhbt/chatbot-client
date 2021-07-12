import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import {
    getTextMessageService,
    getEventMessageService
} from '../services/dialogflow';
import {
    setTypingAction,
    saveMessageAction,
} from './actions';
import {
    GET_TEXT_MESSAGE,
    GET_EVENT_MESSAGE,
} from './constants';


function* getTextMessage({ payload }) {
    try {
        yield put(setTypingAction(true));
        const response = yield call(getTextMessageService, payload);

        if (response.data && response.status === 200) {
            const message = {
                person: 'bot',
                message: [response.data]
            };
            yield put(saveMessageAction(message));
        }
    }
    catch (error) { }
    finally {
        yield put(setTypingAction(false));
    }
}

function* getEventMessage({ payload }) {
    try {
        yield put(setTypingAction(true));
        const response = yield call(getEventMessageService, payload);

        if (response.data && response.status === 200) {
            const message = {
                person: 'bot',
                message: response.data.map(item => item.text.text[0])
            };
            yield put(saveMessageAction(message));
        }
    }
    catch (error) { }
    finally {
        yield put(setTypingAction(false));
    }
}

export default function* saga() {
    yield takeLatest(GET_TEXT_MESSAGE, getTextMessage);
    yield takeLatest(GET_EVENT_MESSAGE, getEventMessage);
}