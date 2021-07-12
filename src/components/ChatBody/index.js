import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
    resetMessageAction,
    getEventMessageAction
} from '../../stores/actions';

import './styles.css';


const DEFAULT_EVENT = 'wellcome';
const ChatBody = () => {
    const bodyRef = useRef();
    const dispath = useDispatch();
    const global = useSelector((state) => state.global, shallowEqual);

    useLayoutEffect(() => { bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [global.message]);

    useEffect(() => {
        dispath(getEventMessageAction({ event: DEFAULT_EVENT }));
        return () => dispath(resetMessageAction());
    }, []);

    return (
        <div className="chat_body" ref={bodyRef}>
            {global.message.map((item) => {
                if (item.person === 'bot') {
                    return item.message.map((mes, idx) => (
                        <span className="chat_msg_item chat_msg_item_admin" key={idx}>
                            {idx < 1 && <div className="chat_avatar">
                                <img alt="avatar-admin" src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                            </div>}
                            {mes}
                        </span>
                    ));
                }
                return item.message.map((mess, index) => (
                    <div key={index}>
                        <span className="chat_msg_item chat_msg_item_user">{mess}</span>
                        {/* <span className="status">20m ago</span> */}
                    </div>
                ));
            })}


        </div>
    );
}

export default ChatBody;