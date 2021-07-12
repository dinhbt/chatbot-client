import React, { useRef } from 'react';
import {
    CameraIcon,
    ChevronRightIcon
} from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';

import {
    saveMessageAction,
    getTextMessageAction
} from '../../stores/actions';
import './styles.css';


const ChatFooter = () => {
    const dispatch = useDispatch();
    const textRef = useRef();

    const onSendMessage = () => {
        const text = textRef.current.value;
        dispatch(saveMessageAction({ person: 'user', message: [text] }));
        dispatch(getTextMessageAction({ text }));
        textRef.current.value = '';
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSendMessage();
            event.preventDefault();
        }
    }

    return (
        <div className="chat_footer">
            <div className="flex m-2 justify-between">
                <CameraIcon className="h-5 w-6 text-gray-400 m-0.5" />
                <textarea
                    className="chat_message text-sm text-gray-500"
                    type="text" placeholder="Send a message"
                    ref={textRef}
                    onKeyPress={handleKeyPress}
                />
                <ChevronRightIcon className="h-5 w-6 text-gray-400 m-1" onClick={onSendMessage} />
            </div>
        </div>
    );
}

export default ChatFooter;