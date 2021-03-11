import './App.css';
import { css } from '@emotion/css';

import SideDrawerContainer from './containers/sideDrawerContainer';
import EventListContainer from './containers/eventListContainer.js'


const App = () => {
  return (
    <div 
      className={css`
        width: 100%;
        margin: 0 auto;
      `}>
      <div 
        className={css`
          display: flex;
          justify-content: flex-end;
          margin: 5px;
        `}
      >
        <SideDrawerContainer />
      </div>
      <EventListContainer />
    </div>
  );
}

export default App;
