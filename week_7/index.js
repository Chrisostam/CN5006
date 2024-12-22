import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Hook_ControlledButtonState from './Counter';
import EmojiCounter from './EmojiCounter';

import EmojiDisplay from './EmojiDisplay';

ReactDOM.render(
  <React.StrictMode>
    <Hook_ControlledButtonState/>
    <EmojiCounter pic='love'/>
    <EmojiCounter pic='sad'/>
    <EmojiCounter pic='like'/>
    <EmojiCounter pic='happy'/>

    <EmojiDisplay/>
  </React.StrictMode>,
  document.getElementById('root')
);



