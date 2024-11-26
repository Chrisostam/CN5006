import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import EmojiCounter from './Emoji';
import EmojiToggle from './ToggleEmoji';


ReactDOM.render(
  <React.StrictMode>
    <EmojiCounter type = 'like'/>
    <EmojiCounter type = 'love'/>
    <EmojiCounter type = 'happy'/>

    <EmojiToggle/>
  </React.StrictMode>,
  document.getElementById('root')
);

