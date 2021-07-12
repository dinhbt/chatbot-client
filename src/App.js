import { useState } from 'react';
import {
  XIcon,
  ChatAlt2Icon,
} from '@heroicons/react/solid';


import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import './App.css';


const App = () => {
  const [isOpenPopup, setOpenPopup] = useState(false);

  return (
    <div className="fabs font-sans">
      <div className={isOpenPopup ? "chat active" : "chat"}>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
      <div className="fab" onClick={() => setOpenPopup(!isOpenPopup)}>
        {isOpenPopup && <XIcon className="h-8 w-8 text-white text-align-center" />}
        {!isOpenPopup && <ChatAlt2Icon className="h-8 w-8 text-white text-align-center" />}
      </div>
    </div>
  );
}

export default App;
