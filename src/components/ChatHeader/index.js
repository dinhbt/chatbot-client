import React from 'react';
import { DuplicateIcon } from '@heroicons/react/solid';

import './styles.css';

const ChatHeader = () => {
    return (
        <div className="chat_header">
        <div className="chat_option">
          <div className="header_img">
            <img alt="avatar" src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
          </div>
          <span id="chat_head" className="text-sm">Bot</span> <br />
          <span className="agent text-xs">Support</span> <span className="online text-xs">(Online)</span>
          <DuplicateIcon className="h-5 w-6 text-white float-right loader" />
        </div>
      </div>
    );
}

export default ChatHeader;