import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import EventListContainer from './containers/eventListContainer.js'

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <MenuIcon />
      </div>
      <EventListContainer />
    </div>
  );
}

export default App;
