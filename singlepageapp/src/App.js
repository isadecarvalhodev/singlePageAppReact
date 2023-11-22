import React from 'react';
import './index.css';

const App = () => {
  return (
    <div>
      <div class="container">
        <div class="box">  
          <h1>something</h1>
          <p>some text about something cute</p>
          <div class="icon-section"> 
            <img src="/singlepageapp/src/resources/image0_0.jpeg" alt="cute unicorn" />
            <div class="icon-section">
              <img class="icon" src="/singlepageapp/src/resources/github.svg" alt="github icon" />
              <img class="icon" src="/singlepageapp/src/resources/linkedin.svg" alt="linkedin icon" />
              <img class="icon" src="/singlepageapp/src/resources/youtube.svg" alt="youtube icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;